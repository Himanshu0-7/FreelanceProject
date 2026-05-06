const industries = [
  "Healthcare",
  "Financial Services",
  "E Commerce and Retail",
  "Manufacturing",
  "Technology and SaaS",
  "Education",
  "Logistics and Supply Chain",
];

const capabilities = [
  "End to end digital transformation",
  "Enterprise application development",
  "Cloud migration and optimization",
  "Workflow automation and process improvement",
  "AI driven solutions and analytics",
  "Security and compliance frameworks",
  "Integration and API development",
];

const whyChoose = [
  "Founded by experienced industry professionals",
  "Strong expertise across multiple technology domains",
  "Focus on business outcomes and ROI",
  "Scalable and cost effective delivery models",
  "Agile execution with faster turnaround times",
  "Commitment to long term partnerships",
];

const techExpertise = [
  "ServiceNow",
  "Salesforce",
  "Cloud Platforms (AWS, Azure, GCP)",
  "DevOps Tools and CI CD Pipelines",
  "AI and Machine Learning Frameworks",
  "Cybersecurity Tools and Practices",
];

export default function IndustriesCapabilities() {
  return (
    <section className="w-full py-20 sm:py-24 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-20">
        {/* INDUSTRIES + CAPABILITIES */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 text-[var(--text)]">
            What We <span className="text-[var(--primary)]">Know</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industries */}
            <div className="relative bg-[var(--card)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--border)]">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />

              <h3 className="text-xl sm:text-2xl font-semibold mb-6 pl-4 text-[var(--text)]">
                Industries We{" "}
                <span className="text-[var(--primary)]">Serve</span>
              </h3>

              <div className="flex flex-col gap-3 pl-4">
                {industries.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />

                    <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="relative bg-[var(--card)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--border)]">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />

              <h3 className="text-xl sm:text-2xl font-semibold mb-6 pl-4 text-[var(--text)]">
                Our <span className="text-[var(--primary)]">Capabilities</span>
              </h3>

              <div className="flex flex-col gap-3 pl-4">
                {capabilities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />

                    <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE + TECH */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 text-[var(--text)]">
            Why <span className="text-[var(--primary)]">MSNG Technologies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Choose */}
            <div className="bg-[var(--card)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[var(--primary)]">
                Why Choose MSNG Technologies
              </h3>

              <div className="flex flex-col gap-3">
                {whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
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

            {/* Tech Expertise */}
            <div className="bg-[var(--card)] rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[var(--primary)]">
                Technology Expertise
              </h3>

              <div className="flex flex-col gap-3">
                {techExpertise.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <p className="text-[var(--text)] text-sm sm:text-base font-medium leading-relaxed">
                      {item}
                    </p>
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
