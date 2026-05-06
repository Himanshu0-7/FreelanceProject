import img1 from "../../../assets/whoweprovide_img1.png";
import img2 from "../../../assets/whoweprovide_img2.png";
import img3 from "../../../assets/whoweprovide_img3.png";

export default function WhoWeProvide() {
  return (
    <section className="w-full pt-16 sm:pt-24 md:pt-32 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* Inner card */}
      <div className="bg-[var(--card-bg)] text-[var(--text)] py-16 sm:py-20 md:py-28 max-w-[1700px] mx-auto px-6 md:px-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[var(--border)]">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary)] mb-16 sm:mb-20">
          Who We Provide
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20 md:gap-10">
          {/* LEFT */}
          <div className="relative h-[300px] sm:h-[420px] md:h-[600px] rounded-2xl sm:rounded-3xl pb-6 group">
            <img
              src={img1}
              alt="Risk Management"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition duration-500 group-hover:scale-[1.02]"
            />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
              bg-[var(--card-soft)] px-5 sm:px-8 py-3 sm:py-5 rounded-full
              text-sm sm:text-base md:text-lg text-[var(--primary)] whitespace-nowrap
              border border-[var(--border)] shadow-lg"
            >
              Risk Management Consultancy
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-16 sm:gap-12">
            {/* Top */}
            <div className="relative h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl sm:rounded-3xl pb-6 group">
              <img
                src={img2}
                alt="Operational Efficiency"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition duration-500 group-hover:scale-[1.02]"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                bg-[var(--card-soft)] px-5 sm:px-8 py-3 sm:py-5 rounded-full
                text-sm sm:text-base md:text-lg text-[var(--primary)] whitespace-nowrap
                border border-[var(--border)] shadow-lg"
              >
                Operational Efficiency
              </div>
            </div>

            {/* Bottom */}
            <div className="relative h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl sm:rounded-3xl pb-6 group">
              <img
                src={img3}
                alt="Business Strategy"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition duration-500 group-hover:scale-[1.02]"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                bg-[var(--card-soft)] px-5 sm:px-8 py-3 sm:py-5 rounded-full
                text-sm sm:text-base md:text-lg text-[var(--primary)] whitespace-nowrap
                border border-[var(--border)] shadow-lg"
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
