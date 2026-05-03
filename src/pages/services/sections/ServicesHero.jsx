import heroImg from "../../../assets/services_img.png";

export default function ServicesHero() {
  return (
    <section className="w-full">
      {/* 🔵 TOP IMAGE SECTION */}
      <div className="relative h-[300px] md:h-[450px]">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />

        {/* Floating Card */}
        <div
          className="absolute left-10 md:left-20 
          bottom-0 translate-y-1/2
          bg-[var(--card-soft)] px-20 py-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl text-[var(--primary)] font-semibold">
            Services
          </h2>
        </div>
      </div>

      {/* ⚫ BOTTOM CONTENT SECTION */}
      <div className="pt-24 pb-20 bg-gradient-90-light dark:bg-gradient-90-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h3 className="text-[var(--text)] text-xl md:text-2xl font-semibold mb-6 max-w-[700px]">
            A future-focused portfolio designed to solve complex business
            challenges.
          </h3>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[700px]">
            We deliver specialized consulting across Generative AI, Agentic
            Systems, and Cybersecurity to help organizations adapt, scale, and
            innovate with confidence. Our approach combines strategic thinking
            with advanced technology to streamline operations, enhance
            decision-making, and secure digital ecosystems. By aligning
            innovation with business goals, we enable sustainable growth in an
            increasingly dynamic environment.
          </p>
        </div>
      </div>
    </section>
  );
}
