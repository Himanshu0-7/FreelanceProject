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
    <section className="w-full py-24 bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-16">
        {/* INDUSTRIES + CAPABILITIES */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            What We <span className="text-[var(--primary)]">Know</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Industries */}
            <div className="relative bg-[var(--card)] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
              <h3 className="text-xl font-semibold mb-5 pl-4">
                Industries We{" "}
                <span className="text-[var(--primary)]">Serve</span>
              </h3>
              <div className="flex flex-col gap-2 pl-4">
                {industries.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    <p className="text-[var(--text-muted)] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="relative bg-[var(--card)] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
              <h3 className="text-xl font-semibold mb-5 pl-4">
                Our <span className="text-[var(--primary)]">Capabilities</span>
              </h3>
              <div className="flex flex-col gap-2 pl-4">
                {capabilities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    <p className="text-[var(--text-muted)] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE + TECH EXPERTISE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            Why <span className="text-[var(--primary)]">MSNG Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Why Choose */}
            <div className="bg-[var(--card)] rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-5 text-[var(--primary)]">
                Why Choose MSNG Technologies
              </h3>
              <div className="flex flex-col gap-2">
                {whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-2.5"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[var(--text-muted)] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Expertise */}
            <div className="bg-[var(--card)] rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-5 text-[var(--primary)]">
                Technology Expertise
              </h3>
              <div className="flex flex-col gap-2">
                {techExpertise.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[var(--card-soft)] rounded-xl px-4 py-2.5"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <span className="text-[var(--primary)] text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[var(--text)] text-sm font-medium">
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
