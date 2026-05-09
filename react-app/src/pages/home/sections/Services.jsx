import { useNavigate } from "react-router-dom";
import Background from "../../../assets/Background.png";

const services = [
  { title: "ServiceNow Solutions", slug: "servicenow" },
  { title: "Salesforce Services", slug: "salesforce" },
  { title: "DevOps and Cloud Engineering", slug: "devops" },
  { title: "Agentic AI and Generative AI", slug: "agentic-ai" },
  { title: "Cybersecurity and Risk Management", slug: "cybersecurity" },
  { title: "Global Capability Centers (GCC)", slug: "gcc" },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-dvh flex flex-col items-center py-16 sm:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* Background */}
      <img
        src={Background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--special-text)]">
          Our <span className="text-[var(--primary)]">Services</span>
        </h1>
        <p className="text-[var(--text-muted)] text-center mt-4 text-sm sm:text-base leading-relaxed">
          Our services are built to support digital transformation and long-term
          success. We provide expert consulting, scalable technology solutions,
          and end-to-end support.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-16 mb-16 w-full max-w-[1200px]">
        {services.map((service, index) => (
          <div key={index} className="flex justify-center">
            <div
              onClick={() => navigate(`/services/${service.slug}`)}
              className="relative w-full max-w-[320px] h-[260px] sm:h-[300px] rounded-2xl overflow-visible bg-[var(--card)] cursor-pointer group"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition duration-300" />

              {/* Label button */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                w-[220px] py-2.5 sm:py-3 rounded-xl text-white text-sm sm:text-base
                bg-btn-light dark:bg-btn-dark text-center px-4
                group-hover:opacity-90 transition duration-300"
              >
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center mt-8">
        <button
          onClick={() => navigate("/services")}
          className="px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-semibold bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300"
        >
          Explore All Services →
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold bg-[var(--card)] text-[var(--text)] hover:opacity-90 transition duration-300"
        >
          Hire Us Today →
        </button>
      </div>
    </section>
  );
}
