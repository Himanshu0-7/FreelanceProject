import Background from "../../../assets/Background.png";

export default function Services() {
  const services = [
    { title: "Generative AI Service" },
    { title: "Agentic AI Service" },
    { title: "Cybersecurity Protection" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center py-20 bg-gradient-270-light dark:bg-gradient-270-dark">
      <img
        src={Background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
      />

      <h1 className="text-4xl md:text-5xl font-semibold text-center text-[var(--special-text)]">
        Our <span className="text-[var(--primary)]">Services</span>
      </h1>

      <p className="text-[var(--text-muted)] text-center max-w-3xl mt-4">
        Our services are built to support digital transformation and long-term
        success. We provide expert consulting, scalable technology solutions,
        and end-to-end support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] rounded-2xl overflow-visible bg-[var(--card)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
              px-6 py-3 rounded-xl text-white whitespace-nowrap 
              bg-btn-light dark:bg-btn-dark"
            >
              {service.title}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-16 px-10 py-4 rounded-full text-white font-semibold bg-btn-light dark:bg-btn-dark">
        Hire Us Today →
      </button>
    </section>
  );
}
