import Person from "../../../assets/personImg.png"; // replace with your image

export default function Introduction() {
  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Focused Approach" },
    { value: "98%", label: "Client Understanding" },
    { value: "10+", label: "Industries Served" },
  ];

  return (
    <section className="w-full min-h-screen bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)]  text-white py-20">
      {/* 🔹 TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold">
            About <span className="text-blue-400">Us</span>
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Building Intelligent, Secure Digital Futures
          </p>

          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm">
            We are a forward-thinking consultancy helping businesses navigate
            cybersecurity, generative AI, and intelligent automation. Our goal
            is simple — enable organizations to innovate faster while staying
            protected.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-blue-400 text-2xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We are a technology consultancy focused on solving modern business
              challenges through a combination of security, intelligence, and
              innovation.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              From protecting digital assets to implementing AI-driven systems,
              we partner with organizations to design solutions that are
              scalable, efficient, and future-ready.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Our team brings together expertise in cybersecurity, generative
              AI, and intelligent automation to deliver practical outcomes — not
              just ideas.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
            {/* BLACK CONTAINER */}
            <div className="bg-black w-full h-[420px] rounded-2xl"></div>

            {/* GRAY BOX (CENTERED) */}
            <div
              className="absolute left-1/2 top-1/2 
  -translate-x-1/2 -translate-y-[30%]
  w-[75%] h-[65%] bg-[#2a2f3a] rounded-xl"
            />

            {/* 🔥 STATS WRAPPER (same width as gray box) */}
            <div
              className="absolute left-1/2 top-[20px] 
    -translate-x-1/2 w-[75%] flex justify-between"
            >
              {/* LEFT CARD */}
              <div className="bg-[#2a2f3a] px-6 py-4 rounded-xl text-center w-[150px]">
                <h2 className="text-white font-bold text-xl">50+</h2>
                <p className="text-gray-400 text-sm">Clients</p>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-[#2a2f3a] px-6 py-4 rounded-xl text-center w-[170px]">
                <h2 className="text-white font-semibold text-2xl">4.8</h2>
                <p className="text-gray-400 text-sm">Happy Clients</p>
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
          {/* Gradient button */}
          <button className="relative px-8 py-3 rounded-full overflow-hidden">
            <span
              className="absolute inset-0 
              bg-[linear-gradient(90deg,rgba(11,37,110,1)_0%,rgba(7,113,186,1)_100%)]"
            ></span>

            <span className="relative z-10 font-semibold">
              Explore Our Services
            </span>
          </button>

          {/* Secondary */}
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold">
            Talk to our Expert
          </button>
        </div>
      </div>

      {/* 🔹 STATS SECTION */}
      <div className="w-full max-w-6xl mt-24 mx-auto px-6">
        <div className="bg-black/80 rounded-[40px] px-10 py-12 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, i) => (
              <div key={i} className="bg-[#2a2f3a] rounded-2xl py-8">
                <h2 className="text-blue-400 text-2xl font-semibold">
                  {item.value}
                </h2>
                <p className="text-gray-300 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
