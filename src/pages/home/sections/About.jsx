import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-47-light dark:bg-gradient-47-dark w-full min-h-screen pt-4 flex justify-center">
      <section>
        <h1 className="font-semibold text-[var(--text)] text-6xl text-center">
          About <span className="text-[var(--primary)]">Us</span>
        </h1>

        <section className="flex flex-row gap-15 mt-10 pt-20">
          <div className="flex flex-col gap-10 max-w-[550px]">
            <p className="text-[var(--text)] text-xl leading-relaxed mb-10">
              At <span className="text-[var(--special-text)]">MS TECH</span>, we
              don't just solve problems - we build technology-driven success.
            </p>

            <div className="w-[400px] h-[350px] rounded-[30px] bg-[var(--card)]"></div>
          </div>

          <div className="max-w-[600px]">
            <div className="flex gap-6">
              <div className="w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]"></div>
              <div className="w-[280px] h-[180px] rounded-[30px] bg-[var(--card)]"></div>
            </div>

            <p className="text-[var(--text)] text-lg mt-6 mb-10 leading-relaxed">
              At MS TECH, we help businesses grow smarter through innovative IT
              consulting and technology solutions. Our goal is simple — to make
              technology work for you, not against you.
            </p>

            <div className="col-span-2 grid grid-cols-3 gap-6 mt-6 text-[var(--text)] text-center">
              <div>
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Agentic AI Projects
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">60+</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Generative AI Projects
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Cyber Security Projects
                </p>
              </div>

              <div className="col-span-2 mt-6 flex justify-start">
                <button
                  onClick={() => navigate("/about")}
                  className="px-6 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark"
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
