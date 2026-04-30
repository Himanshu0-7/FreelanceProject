import img1 from "../../../assets/whoweprovide_img1.png";
import img2 from "../../../assets/whoweprovide_img2.png";
import img3 from "../../../assets/whoweprovide_img3.png";

export default function WhoWeProvide() {
  return (
    <section className="w-full bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] pt-40">
      {/* 🔵 Gradient Section (Top) */}

      <div className="bg-black text-white py-40 max-w-[1700px]  mx-auto px-6 md:px-8 rounded-4xl">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-400 mb-12">
          Who We Provide
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* LEFT BIG CARD */}
          <div className="relative h-[400px] md:h-[600px] rounded-3xl">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
  bg-[#252832] px-8 py-5 rounded-full text-xl text-blue-400"
            >
              Risk Management Consultancy
            </div>
          </div>

          {/* RIGHT SIDE (2 STACKED) */}
          <div className="flex flex-col gap-12">
            {/* TOP SMALL */}
            <div className="relative h-[190px] md:h-[280px] rounded-3xl ">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
  bg-[#252832] px-8 py-5 rounded-full text-blue-400 text-xl"
              >
                Operational Efficiency
              </div>
            </div>

            {/* BOTTOM SMALL */}
            <div className="relative h-[190px] md:h-[280px] rounded-3xl">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
  bg-[#252832] px-8 py-5 rounded-full text-blue-400 text-xl"
              >
                Business Strategy Consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
