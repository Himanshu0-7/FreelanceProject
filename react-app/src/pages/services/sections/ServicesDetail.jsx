import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../../../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | "invalid"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim())
      return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  };

  const handleSubmit = async () => {
    if (!validate()) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: service.title }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!service) {
    return (
      <div className="min-h-dvh flex items-center justify-center text-[var(--text)] bg-gradient-270-light dark:bg-gradient-270-dark px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Service not found
          </h2>
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const Section = ({ title, items, numbered = false }) => (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-1">
        {title}
      </h3>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4 bg-[var(--card)] rounded-2xl px-5 py-4 hover:bg-[var(--card-soft)] transition duration-300 border border-[var(--border)]"
        >
          {numbered ? (
            <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mt-0.5">
              <span className="text-[var(--primary)] text-xs font-bold">
                {i + 1}
              </span>
            </div>
          ) : (
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0 mt-2" />
          )}
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );

  const inputClass = `w-full bg-[var(--card)] border border-[var(--border)] 
    text-[var(--text)] placeholder:text-[var(--text-muted)] 
    px-4 py-3 rounded-xl outline-none text-sm
    focus:border-[var(--primary)] transition duration-300`;

  return (
    <section className="w-full min-h-dvh overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* HERO */}
      <div className="w-full bg-[var(--card-bg)] py-16 sm:py-20 px-6 md:px-10 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/services")}
            className="mb-8 flex items-center gap-2 text-[var(--primary)] text-sm hover:opacity-70 transition duration-300"
          >
            ← Back to Services
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4 block">
            MSNG Technologies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--text)] mb-6 max-w-4xl leading-tight">
            {service.title}
          </h1>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-3xl">
            {service.overview}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 flex flex-col gap-20">
        {/* OFFERINGS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-10">
            Our <span className="text-[var(--primary)]">Offerings</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.offerings.map((item, i) => (
              <div
                key={i}
                className="relative bg-[var(--card)] rounded-2xl p-6 overflow-hidden hover:bg-[var(--card-soft)] transition duration-300 border border-[var(--border)]"
              >
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-[var(--primary)]" />
                <div className="pl-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mb-4">
                    <span className="text-[var(--primary)] text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-[var(--text)] text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES + USE CASES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
            <Section title="Key Features" items={service.keyFeatures} />
          </div>
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
            <Section title="Use Cases" items={service.useCases} />
          </div>
        </div>

        {/* APPROACH */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-10">
            Our <span className="text-[var(--primary)]">Approach</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {service.approach.map((item, i) => (
              <div
                key={i}
                className="relative bg-[var(--card)] rounded-2xl p-6 text-center border border-[var(--border)]"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--primary)] font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  {item}
                </p>
                {i < service.approach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[var(--primary)]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS + WHY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--border)]">
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Business Benefits
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-6">
                What You Gain
              </h3>
              <div className="flex flex-col gap-3">
                {service.businessBenefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-[var(--card)] rounded-xl px-4 py-3 border border-[var(--border)]"
                  >
                    <span className="text-[var(--primary)] text-lg mt-0.5">
                      ✓
                    </span>
                    <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--border)]">
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Why MSNG Technologies
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-6">
                The MSNG Advantage
              </h3>
              <div className="flex flex-col gap-3">
                {service.whyMSNG.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-[var(--card)] rounded-xl px-4 py-3 border border-[var(--border)]"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mt-0.5">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY */}
        {service.caseStudy && (
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
                MSNG's Real World{" "}
                <span className="text-[var(--primary)]">Impact</span>
              </h2>
            </div>

            {/* Overview card */}
            <div className="relative bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 border border-[var(--border)] overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
              <div className="pl-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-2 block">
                  Industry
                </span>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                  {service.caseStudy.industry}
                </h3>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  {service.caseStudy.overview}
                </p>
              </div>
            </div>

            {/* Results — stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.caseStudy.results.map((result, i) => (
                <div
                  key={i}
                  className="bg-[var(--card)] rounded-2xl p-6 text-center border border-[var(--border)]"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                    {result.value}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Challenges + Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
                  Challenges
                </h3>
                <div className="flex flex-col gap-2">
                  {service.caseStudy.challenges.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-[var(--card)] rounded-xl px-4 py-3 border border-[var(--border)]"
                    >
                      <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-[var(--card-bg)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4">
                  Our Solutions
                </h3>
                <div className="flex flex-col gap-2">
                  {service.caseStudy.solutions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-[var(--card)] rounded-xl px-4 py-3 border border-[var(--border)]"
                    >
                      <span className="text-[var(--primary)] mt-0.5 shrink-0">
                        ✓
                      </span>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ENQUIRY FORM */}
        <div className="relative bg-[var(--card-bg)] rounded-3xl p-8 sm:p-10 border border-[var(--border)] overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
          <div className="pl-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-2">
              Interested in{" "}
              <span className="text-[var(--primary)]">{service.title}?</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed">
              Fill in your details and our team will get back to you within 24
              hours.
            </p>

            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-6 py-8 text-center">
                <p className="text-green-500 text-2xl mb-2">✓</p>
                <p className="text-green-500 font-semibold text-lg mb-1">
                  Enquiry Sent Successfully!
                </p>
                <p className="text-[var(--text-muted)] text-sm">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 — Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 — Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={`Tell us about your ${service.title} requirements...`}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Validation error */}
                {status === "invalid" && (
                  <p className="text-red-400 text-sm">
                    Please fill in all required fields with a valid email.
                  </p>
                )}

                {/* Server error */}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full sm:w-fit px-10 py-3.5 rounded-full text-white font-semibold bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300 disabled:opacity-60 mt-2"
                >
                  {status === "loading" ? "Sending..." : "Send Enquiry →"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--card-bg)] rounded-3xl p-8 sm:p-10 text-center border border-[var(--border)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4 leading-relaxed">
            Ready to get started with{" "}
            <span className="text-[var(--primary)]">{service.title}</span>?
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how MSNG Technologies can help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300"
            >
              Talk to Our Expert
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:opacity-90 transition duration-300"
            >
              Explore Other Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
