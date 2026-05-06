import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-47-light dark:bg-gradient-47-dark w-full min-h-dvh pt-10 pb-20 flex justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
      <section className="w-full max-w-[1200px]">
        <h1 className="font-semibold text-[var(--text)] text-4xl sm:text-5xl lg:text-6xl text-center">
          About <span className="text-[var(--primary)]">Us</span>
        </h1>

        <section className="flex flex-col lg:flex-row gap-10 mt-10 pt-10 lg:pt-20">
          <div className="flex flex-col gap-10 w-full lg:max-w-[550px]">
            <p className="text-[var(--text)] text-lg sm:text-xl leading-relaxed">
              <span className="text-[var(--special-text)] font-semibold">
                MSNG Technologies
              </span>{" "}
              is an emerging technology solutions provider, founded by industry
              veterans with deep expertise across enterprise systems, digital
              transformation, and global delivery models. We focus on delivering
              innovative, scalable, and business driven solutions that align
              with the evolving needs of modern enterprises.
            </p>

            <div className="w-full sm:w-[400px] h-[250px] sm:h-[350px] rounded-[30px] bg-[var(--card)]" />
          </div>

          <div className="w-full lg:max-w-[600px]">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]" />

              <div className="w-full sm:w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]" />
            </div>

            <p className="text-[var(--text)] text-base sm:text-lg mt-6 mb-10 leading-relaxed">
              With a strong emphasis on quality, efficiency, and future ready
              technologies, we help organizations streamline operations, enhance
              security, and accelerate digital transformation. Our capabilities
              span enterprise platforms, cloud infrastructure, cybersecurity,
              and global capability development, along with advanced solutions
              in Agentic AI, enabling intelligent automation, autonomous
              decision making, and next generation business processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[var(--text)] text-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">50+</h2>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Enterprise Clients Served
                  <br />
                  Across multiple industries and geographies
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">10+</h2>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Global Markets
                  <br />
                  Supporting clients with scalable and remote delivery models
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">99%</h2>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Client Satisfaction Rate
                  <br />
                  Focused on long-term partnerships and consistent delivery
                </p>
              </div>

              <div className="sm:col-span-3 mt-4 flex justify-center sm:justify-start">
                <button
                  onClick={() => navigate("/about")}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark transition duration-300 hover:opacity-90"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
