import img1 from "../../../assets/whoweprovide_img1.png";
import img2 from "../../../assets/whoweprovide_img2.png";
import img3 from "../../../assets/whoweprovide_img3.png";

export default function WhoWeProvide() {
  return (
    <section className="w-full pt-40 bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* INNER SECTION */}
      <div className="bg-[var(--card-bg)] text-[var(--text)] py-40 max-w-[1700px] mx-auto px-6 md:px-8 rounded-[40px]">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[var(--primary)] mb-12">
          Who We Provide
        </h2>

        {/* Grid */}
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
              bg-[var(--card-soft)] px-8 py-5 rounded-full text-xl text-[var(--primary)]"
            >
              Risk Management Consultancy
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-12">
            {/* TOP */}
            <div className="relative h-[190px] md:h-[280px] rounded-3xl">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                bg-[var(--card-soft)] px-8 py-5 rounded-full text-[var(--primary)] text-xl"
              >
                Operational Efficiency
              </div>
            </div>

            {/* BOTTOM */}
            <div className="relative h-[190px] md:h-[280px] rounded-3xl">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                bg-[var(--card-soft)] px-8 py-5 rounded-full text-[var(--primary)] text-xl"
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
