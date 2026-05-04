import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-47-light dark:bg-gradient-47-dark w-full min-h-screen pt-10 pb-20 flex justify-center px-6 sm:px-10 lg:px-16">
      <section className="w-full max-w-[1200px]">
        <h1 className="font-semibold text-[var(--text)] text-4xl sm:text-5xl lg:text-6xl text-center">
          About <span className="text-[var(--primary)]">Us</span>
        </h1>
        <section className="flex flex-col lg:flex-row gap-10 mt-10 pt-10 lg:pt-20">
          <div className="flex flex-col gap-10 w-full lg:max-w-[550px]">
            <p className="text-[var(--text)] text-lg sm:text-xl leading-relaxed">
              At <span className="text-[var(--special-text)]">MS TECH</span>, we
              don't just solve problems - we build technology-driven success.
            </p>
            <div className="w-full sm:w-[400px] h-[250px] sm:h-[350px] rounded-[30px] bg-[var(--card)]" />
          </div>

          <div className="w-full lg:max-w-[600px]">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]" />
              <div className="w-full sm:w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]" />
            </div>

            <p className="text-[var(--text)] text-base sm:text-lg mt-6 mb-10 leading-relaxed">
              At MS TECH, we help businesses grow smarter through innovative IT
              consulting and technology solutions. Our goal is simple — to make
              technology work for you, not against you.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-[var(--text)] text-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">100+</h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Agentic AI Projects
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">60+</h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Generative AI Projects
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">100+</h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Cyber Security Projects
                </p>
              </div>

              <div className="col-span-3 sm:col-span-2 mt-6 flex justify-start">
                <button
                  onClick={() => navigate("/about")}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark"
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
