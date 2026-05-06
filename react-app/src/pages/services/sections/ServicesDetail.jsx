import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../../../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--text)]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Service not found</h2>
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark"
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
          className="flex items-center gap-4 bg-[var(--card)] rounded-2xl px-5 py-3.5 hover:bg-[var(--card-soft)] transition"
        >
          {numbered ? (
            <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
              <span className="text-[var(--primary)] text-xs font-bold">
                {i + 1}
              </span>
            </div>
          ) : (
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />
          )}
          <p className="text-[var(--text-muted)] text-sm">{item}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* HERO BANNER */}
      <div className="w-full bg-[var(--card-bg)] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/services")}
            className="mb-8 flex items-center gap-2 text-[var(--primary)] text-sm hover:opacity-70 transition"
          >
            ← Back to Services
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4 block">
            MSNG Technologies
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-[var(--text)] mb-6 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-3xl">
            {service.overview}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col gap-20">
        {/* ROW 1 — Offerings (full width) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-8">
            Our <span className="text-[var(--primary)]">Offerings</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.offerings.map((item, i) => (
              <div
                key={i}
                className="relative bg-[var(--card)] rounded-2xl p-6 overflow-hidden hover:bg-[var(--card-soft)] transition"
              >
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-[var(--primary)]" />
                <div className="pl-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mb-4">
                    <span className="text-[var(--primary)] text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-[var(--text)] text-sm font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 — Key Features + Use Cases */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[var(--card-bg)] rounded-3xl p-8">
            <Section title="Key Features" items={service.keyFeatures} />
          </div>
          <div className="bg-[var(--card-bg)] rounded-3xl p-8">
            <Section title="Use Cases" items={service.useCases} />
          </div>
        </div>

        {/* ROW 3 — Our Approach (timeline style) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-8">
            Our <span className="text-[var(--primary)]">Approach</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.approach.map((item, i) => (
              <div
                key={i}
                className="relative bg-[var(--card)] rounded-2xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--primary)] font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {item}
                </p>
                {i < service.approach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[var(--primary)]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4 — Business Benefits + Why MSNG */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Benefits */}
          <div className="relative bg-[var(--card-bg)] rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Business Benefits
              </span>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
                What You Gain
              </h3>
              <div className="flex flex-col gap-2">
                {service.businessBenefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card)] rounded-xl px-4 py-3"
                  >
                    <span className="text-[var(--primary)] text-lg">✓</span>
                    <p className="text-[var(--text-muted)] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why MSNG */}
          <div className="relative bg-[var(--card-bg)] rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Why MSNG Technologies
              </span>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
                The MSNG Advantage
              </h3>
              <div className="flex flex-col gap-2">
                {service.whyMSNG.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card)] rounded-xl px-4 py-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[var(--text-muted)] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--card-bg)] rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-4">
            Ready to get started with{" "}
            <span className="text-[var(--primary)]">{service.title}?</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mb-8 max-w-xl mx-auto">
            Let's discuss how MSNG Technologies can help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition"
            >
              Talk to Our Expert
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] hover:opacity-90 transition"
            >
              Explore Other Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
