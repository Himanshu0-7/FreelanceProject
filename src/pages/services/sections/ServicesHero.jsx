import heroImg from "../../../assets/services_img.png";

export default function ServicesHero() {
  return (
    <section className="w-full">
      {/* 🔵 TOP IMAGE SECTION */}
      <div className="relative h-[300px] md:h-[450px]">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />

        {/* Floating Card */}
        <div
          className="absolute left-10 md:left-20 
          bottom-0 translate-y-1/2
          bg-[#252832] px-20 py-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold">
            Services
          </h2>
        </div>
      </div>

      {/* ⚫ BOTTOM CONTENT SECTION */}
      <div className="bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-6 max-w-[700px]">
            A future-focused portfolio designed to solve complex business
            challenges.
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed max-w-[700px]">
            We deliver specialized consulting across Generative AI, Agentic
            Systems, and Cybersecurity to help organizations adapt, scale, and
            innovate with confidence. Our approach combines strategic thinking
            with advanced technology to streamline operations, enhance
            decision-making, and secure digital ecosystems. By aligning
            innovation with business goals, we enable sustainable growth in an
            increasingly dynamic environment.
          </p>
        </div>
      </div>
    </section>
  );
}
