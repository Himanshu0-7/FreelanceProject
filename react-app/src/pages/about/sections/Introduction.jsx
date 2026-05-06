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

  // const coreValues = [
  //   {
  //     title: "Innovation First",
  //     desc: "Continuously adopting modern technologies including Agentic AI to drive transformation",
  //   },
  //   {
  //     title: "Customer Centric Approach",
  //     desc: "Aligning every solution with business goals and measurable outcomes",
  //   },
  //   {
  //     title: "Integrity and Transparency",
  //     desc: "Building trust through ethical practices and clear communication",
  //   },
  //   {
  //     title: "Excellence in Execution",
  //     desc: "Delivering high quality solutions with precision and consistency",
  //   },
  //   {
  //     title: "Agility and Scalability",
  //     desc: "Adapting quickly to changing business needs and scaling efficiently",
  //   },
  // ];
  //
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
    <section className="w-full min-h-screen py-20 text-[var(--text)] bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold">
            About <span className="text-[var(--primary)]">Us</span>
          </h1>
          <p className="text-[var(--text-muted)] mt-4 text-lg">
            Building Intelligent, Secure Digital Futures
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-[var(--primary)] text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-[var(--text-muted)] text-sm mb-4">
              MSNG Technologies is an emerging technology solutions provider
              founded by industry veterans with extensive experience across
              enterprise platforms, digital transformation, and global delivery
              ecosystems. Built with a vision to bridge the gap between business
              needs and advanced technology, we partner with organizations to
              deliver scalable, secure, and future ready solutions.
            </p>
            <p className="text-[var(--text-muted)] text-sm">
              Our foundation is rooted in deep technical expertise, strong
              business understanding, and a commitment to delivering measurable
              outcomes. As organizations navigate an increasingly digital world,
              MSNG Technologies serves as a trusted partner enabling innovation,
              efficiency, and sustainable growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            <div className="bg-[var(--card-bg)] w-full h-[420px] rounded-2xl"></div>
            <div
              className="absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-[30%]
              w-[75%] h-[65%] bg-[var(--card-soft)] rounded-xl"
            />
            <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[75%] flex justify-between">
              <div className="bg-[var(--card-soft)] px-6 py-4 rounded-xl text-center w-[150px]">
                <h2 className="text-[var(--text)] font-bold text-xl">50+</h2>
                <p className="text-[var(--text-muted)] text-sm">Clients</p>
              </div>
              <div className="bg-[var(--card-soft)] px-6 py-4 rounded-xl text-center w-[170px]">
                <h2 className="text-[var(--text)] font-semibold text-2xl">
                  99%
                </h2>
                <p className="text-[var(--text-muted)] text-sm">
                  Satisfaction Rate
                </p>
              </div>
            </div>
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
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] font-semibold"
          >
            Talk to our Expert
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
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

      {/* LEADERSHIP TEAM SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Leadership <span className="text-[var(--primary)]">Team</span>
        </h2>
        <p className="text-center text-[var(--text-muted)] text-sm mb-16">
          Guided by decades of experience across global enterprises
        </p>

        <div className="flex flex-col gap-16">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-10 items-start"
            >
              {/* Photo Placeholder */}
              <div className="w-full md:w-[240px] shrink-0 h-[280px] rounded-2xl bg-[var(--card-soft)] flex items-center justify-center text-[var(--text-muted)] text-sm">
                Photo
              </div>
              {/* Bio */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[var(--text)]">
                  {leader.name}
                </h3>
                <p className="text-[var(--primary)] text-sm font-medium uppercase tracking-wide mt-1 mb-4">
                  {leader.role}
                </p>
                {leader.bio.map((para, j) => (
                  <p key={j} className="text-[var(--text-muted)] text-sm mb-3">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="max-w-6xl mx-auto px-6 mt-24"> */}
      {/*   <div className="border-t border-[var(--card-soft)] pt-12"> */}
      {/*     <h2 className="text-2xl font-semibold mb-4"> */}
      {/*       Our <span className="text-[var(--primary)]">Vision</span> */}
      {/*     </h2> */}
      {/*     <p className="text-[var(--text-muted)] text-sm max-w-3xl"> */}
      {/*       To become a globally trusted technology partner known for delivering */}
      {/*       innovative, secure, and future ready digital solutions that create */}
      {/*       lasting business impact. */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}
      {/**/}
      {/* <div className="max-w-6xl mx-auto px-6 mt-12"> */}
      {/*   <div className="border-t border-[var(--card-soft)] pt-12"> */}
      {/*     <h2 className="text-2xl font-semibold mb-4"> */}
      {/*       Our <span className="text-[var(--primary)]">Mission</span> */}
      {/*     </h2> */}
      {/*     <p className="text-[var(--text-muted)] text-sm max-w-3xl"> */}
      {/*       To empower organizations through advanced technology, intelligent */}
      {/*       automation, and strategic execution while maintaining the highest */}
      {/*       standards of quality, integrity, and customer success. */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}

      {/* <div className="max-w-6xl mx-auto px-6 mt-12"> */}
      {/*   <div className="border-t border-[var(--card-soft)] pt-12"> */}
      {/*     <h2 className="text-2xl font-semibold mb-8"> */}
      {/*       Our Core <span className="text-[var(--primary)]">Values</span> */}
      {/*     </h2> */}
      {/*     <div className="flex flex-col gap-4"> */}
      {/*       {coreValues.map((val, i) => ( */}
      {/*         <div key={i} className="flex gap-3 items-start"> */}
      {/*           <span className="mt-1 w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" /> */}
      {/*           <p className="text-[var(--text-muted)] text-sm"> */}
      {/*             <span className="text-[var(--text)] font-semibold"> */}
      {/*               {val.title} —{" "} */}
      {/*             </span> */}
      {/*             {val.desc} */}
      {/*           </p> */}
      {/*         </div> */}
      {/*       ))} */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
