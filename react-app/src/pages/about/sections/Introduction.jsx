import { useNavigate } from "react-router-dom";
import Person from "../../../assets/personImg.png";

export default function Introduction() {
  const navigate = useNavigate();

  const stats = [
    { value: "50+", label: "Enterprise Clients Served" },
    { value: "10+", label: "Global Markets" },
    { value: "99%", label: "Client Satisfaction Rate" },
    { value: "40+", label: "Years of Leadership Experience" },
  ];

  const leaders = [
    {
      name: "Manoj Raizada",
      role: "Director",
      bio: [
        "With over 40 years of industry experience, Manoj Raizada brings deep strategic insight and leadership excellence to MSNG Technologies. His career spans global enterprises where he has led large scale technology initiatives, driven digital transformation, and built high performing teams across diverse domains.",

        "An alumnus of IIM Bangalore and IISc, Manoj combines strong academic foundation with real world execution expertise. His experience includes leadership roles at Siemens, where he contributed to complex enterprise solutions, operational efficiency, and innovation driven growth.",

        "At MSNG Technologies, he provides strategic direction, fosters innovation, and ensures a strong focus on delivering scalable, high impact technology solutions aligned with evolving business needs.",
      ],
    },

    {
      name: "Sunil Goel",
      role: "Director",
      bio: [
        "Sunil Goel brings over 35 years of experience across technology, BFSI, and enterprise program management, with a strong focus on delivering large scale, mission critical solutions. His expertise lies in architecting complex systems, managing global delivery models, and driving operational excellence.",

        "Having held key leadership roles at IBM and TCS, Sunil has led multi geography programs involving cloud transformation, enterprise platforms, compliance frameworks, and high availability systems. He has a deep understanding of integrating technology with business processes to deliver secure, efficient, and scalable solutions.",

        "At MSNG Technologies, he leads global operations and drives solution architecture, delivery governance, and client success, ensuring the organization consistently delivers high quality, technology driven outcomes.",
      ],
    },
  ];

  return (
    <section className="w-full min-h-dvh py-16 sm:py-20 overflow-hidden text-[var(--text)] bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            About <span className="text-[var(--primary)]">Us</span>
          </h1>

          <p className="text-[var(--text-muted)] mt-4 text-base sm:text-lg leading-relaxed">
            Building Intelligent, Secure Digital Futures
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-[var(--primary)] text-2xl sm:text-3xl font-semibold mb-5">
              Who We Are
            </h2>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4">
              MSNG Technologies is an emerging technology solutions provider
              founded by industry veterans with extensive experience across
              enterprise platforms, digital transformation, and global delivery
              ecosystems. Built with a vision to bridge the gap between business
              needs and advanced technology, we partner with organizations to
              deliver scalable, secure, and future ready solutions.
            </p>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Our foundation is rooted in deep technical expertise, strong
              business understanding, and a commitment to delivering measurable
              outcomes. As organizations navigate an increasingly digital world,
              MSNG Technologies serves as a trusted partner enabling innovation,
              efficiency, and sustainable growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            <div className="bg-[var(--card-bg)] w-full h-[380px] sm:h-[420px] rounded-2xl" />

            <div
              className="absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-[30%]
              w-[75%] h-[65%] bg-[var(--card-soft)] rounded-xl"
            />

            <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[90%] sm:w-[75%] flex justify-between gap-4">
              <div className="bg-[var(--card-soft)] px-4 sm:px-6 py-4 rounded-xl text-center w-full max-w-[150px]">
                <h2 className="text-[var(--text)] font-bold text-xl sm:text-2xl">
                  50+
                </h2>

                <p className="text-[var(--text-muted)] text-xs sm:text-sm">
                  Clients
                </p>
              </div>

              <div className="bg-[var(--card-soft)] px-4 sm:px-6 py-4 rounded-xl text-center w-full max-w-[170px]">
                <h2 className="text-[var(--text)] font-semibold text-xl sm:text-2xl">
                  99%
                </h2>

                <p className="text-[var(--text-muted)] text-xs sm:text-sm">
                  Satisfaction Rate
                </p>
              </div>
            </div>

            <img
              src={Person}
              alt=""
              className="absolute bottom-0 h-[320px] sm:h-[420px] object-contain z-10"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-16">
          <button className="px-8 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300">
            Explore Our Services
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] font-semibold border border-[var(--border)] hover:opacity-90 transition duration-300"
          >
            Talk to our Expert
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="w-full max-w-6xl mt-24 mx-auto px-6">
        <div className="bg-[var(--card-bg)]/80 rounded-[30px] sm:rounded-[40px] px-6 sm:px-10 py-10 sm:py-12 backdrop-blur-md border border-[var(--border)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--card-soft)] rounded-2xl py-8 px-4"
              >
                <h2 className="text-[var(--primary)] text-2xl sm:text-3xl font-semibold">
                  {item.value}
                </h2>

                <p className="text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">
          Leadership <span className="text-[var(--primary)]">Team</span>
        </h2>

        <p className="text-center text-[var(--text-muted)] text-sm sm:text-base mb-16 leading-relaxed">
          Guided by decades of experience across global enterprises
        </p>

        <div className="flex flex-col gap-16">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-10 items-start"
            >
              {/* Photo */}
              <div className="w-full md:w-[240px] shrink-0 h-[280px] rounded-2xl bg-[var(--card-soft)] flex items-center justify-center text-[var(--text-muted)] text-sm border border-[var(--border)]">
                Photo
              </div>

              {/* Bio */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">
                  {leader.name}
                </h3>

                <p className="text-[var(--primary)] text-sm font-medium uppercase tracking-wide mt-1 mb-5">
                  {leader.role}
                </p>

                {leader.bio.map((para, j) => (
                  <p
                    key={j}
                    className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
