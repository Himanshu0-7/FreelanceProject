import Person from "../../../assets/personImg.png";

export default function Introduction() {
  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Focused Approach" },
    { value: "98%", label: "Client Understanding" },
    { value: "10+", label: "Industries Served" },
  ];

  return (
    <section className="w-full min-h-screen py-20 text-[var(--text)] bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* 🔹 TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold">
            About <span className="text-[var(--primary)]">Us</span>
          </h1>

          <p className="text-[var(--text-muted)] mt-4 text-lg">
            Building Intelligent, Secure Digital Futures
          </p>

          <p className="text-[var(--text-muted)] mt-3 max-w-3xl mx-auto text-sm">
            We are a forward-thinking consultancy helping businesses navigate
            cybersecurity, generative AI, and intelligent automation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-[var(--primary)] text-2xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-[var(--text-muted)] text-sm mb-4">
              We are a technology consultancy focused on solving modern business
              challenges through a combination of security, intelligence, and
              innovation.
            </p>

            <p className="text-[var(--text-muted)] text-sm mb-4">
              From protecting digital assets to implementing AI-driven systems,
              we design scalable solutions.
            </p>

            <p className="text-[var(--text-muted)] text-sm">
              Our team combines cybersecurity, generative AI, and automation
              expertise to deliver real outcomes.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            {/* BASE CONTAINER */}
            <div className="bg-[var(--card-bg)] w-full h-[420px] rounded-2xl"></div>

            {/* INNER BOX */}
            <div
              className="absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-[30%]
              w-[75%] h-[65%] bg-[var(--card-soft)] rounded-xl"
            />

            {/* STATS */}
            <div
              className="absolute left-1/2 top-[20px] 
              -translate-x-1/2 w-[75%] flex justify-between"
            >
              <div className="bg-[var(--card-soft)] px-6 py-4 rounded-xl text-center w-[150px]">
                <h2 className="text-[var(--text)] font-bold text-xl">50+</h2>
                <p className="text-[var(--text-muted)] text-sm">Clients</p>
              </div>

              <div className="bg-[var(--card-soft)] px-6 py-4 rounded-xl text-center w-[170px]">
                <h2 className="text-[var(--text)] font-semibold text-2xl">
                  4.8
                </h2>
                <p className="text-[var(--text-muted)] text-sm">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <img
              src={Person}
              alt=""
              className="absolute bottom-0 h-[420px] object-contain z-10"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-16">
          <button className="px-8 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark">
            Explore Our Services
          </button>

          <button className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] font-semibold">
            Talk to our Expert
          </button>
        </div>
      </div>

      {/* 🔹 STATS SECTION */}
      <div className="w-full max-w-6xl mt-24 mx-auto px-6">
        <div className="bg-[var(--card-bg)]/80 rounded-[40px] px-10 py-12 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, i) => (
              <div key={i} className="bg-[var(--card-soft)] rounded-2xl py-8">
                <h2 className="text-[var(--primary)] text-2xl font-semibold">
                  {item.value}
                </h2>
                <p className="text-[var(--text-muted)] text-sm mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
