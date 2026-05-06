const coreValues = [
  {
    title: "Innovation First",
    desc: "Continuously adopting modern technologies including Agentic AI to drive transformation",
  },

  {
    title: "Customer Centric Approach",
    desc: "Aligning every solution with business goals and measurable outcomes",
  },

  {
    title: "Integrity and Transparency",
    desc: "Building trust through ethical practices and clear communication",
  },

  {
    title: "Excellence in Execution",
    desc: "Delivering high quality solutions with precision and consistency",
  },

  {
    title: "Agility and Scalability",
    desc: "Adapting quickly to changing business needs and scaling efficiently",
  },
];

export default function VisionSection() {
  return (
    <section className="w-full py-20 sm:py-24 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* Vision */}
            <div className="relative bg-[var(--card)] rounded-3xl p-6 sm:p-8 overflow-hidden flex-1 border border-[var(--border)]">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />

              <div className="pl-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                  Our Vision
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4">
                  Globally Trusted Technology Partner
                </h3>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  To become a globally trusted technology partner known for
                  delivering innovative, secure, and future ready digital
                  solutions that create lasting business impact.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative bg-[var(--card)] rounded-3xl p-6 sm:p-8 overflow-hidden flex-1 border border-[var(--border)]">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />

              <div className="pl-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                  Our Mission
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4">
                  Empowering Through Technology
                </h3>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  To empower organizations through advanced technology,
                  intelligent automation, and strategic execution while
                  maintaining the highest standards of quality, integrity, and
                  customer success.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-[var(--card)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--border)]">
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />

            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
                Our Core Values
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-6">
                What Drives Us Every Day
              </h3>

              <div className="flex flex-col gap-4">
                {coreValues.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-[var(--card-soft)] rounded-2xl px-4 py-4"
                  >
                    <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mt-0.5">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <div>
                      <p className="text-[var(--text)] text-sm sm:text-base font-semibold leading-relaxed">
                        {item.title}
                      </p>

                      <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
