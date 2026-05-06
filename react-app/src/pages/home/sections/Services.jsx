import Background from "../../../assets/Background.png";
export default function Services() {
  const services = [
    { title: "ServiceNow" },
    { title: "Salesforce" },
    { title: "DevOps" },
    { title: "Cybersecurity / Risk Management" },
  ];
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* Background */}
      <img
        src={Background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
      />
      {/* Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--special-text)]">
          Our <span className="text-[var(--primary)]">Services</span>
        </h1>
        <p className="text-[var(--text-muted)] text-center max-w-3xl mt-4 text-sm sm:text-base">
          Our services are built to support digital transformation and long-term
          success. We provide expert consulting, scalable technology solutions,
          and end-to-end support.
        </p>
      </div>
      {/* Cards */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mt-16 mb-16 w-full max-w-[1200px]">
        {services.map((service, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-full max-w-[260px] h-[260px] sm:h-[300px] rounded-2xl overflow-visible bg-[var(--card)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent" />
              {/* Label button */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                w-[200px] py-2.5 sm:py-3 rounded-xl text-white text-sm sm:text-base
                bg-btn-light dark:bg-btn-dark text-center"
              >
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CTA button */}
      <button className="relative z-10 mt-8 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-semibold bg-btn-light dark:bg-btn-dark hover:opacity-90 transition">
        Hire Us Today →
      </button>
    </section>
  );
}
