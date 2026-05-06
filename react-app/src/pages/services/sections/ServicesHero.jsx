import heroImg from "../../../assets/services_img.png";

export default function ServicesHero() {
  return (
    <section className="w-full overflow-hidden">
      {/* HERO IMAGE */}
      <div className="relative h-[220px] sm:h-[320px] md:h-[500px]">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />

        {/* Floating Card */}
        <div
          className="absolute left-4 sm:left-10 md:left-20
          bottom-0 translate-y-1/2
          bg-[var(--card-soft)] backdrop-blur-md
          px-6 sm:px-12 md:px-20 py-4 sm:py-6 md:py-8
          rounded-xl sm:rounded-2xl shadow-2xl
          border border-[var(--border)]"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-[var(--primary)] font-semibold whitespace-nowrap">
            Services
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 bg-gradient-90-light dark:bg-gradient-90-dark">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h3 className="text-[var(--text)] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-relaxed max-w-[850px]">
            A future-focused portfolio designed to solve complex business
            challenges.
          </h3>

          <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed max-w-[850px]">
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
