import mapImg from "../../../assets/location_img.jpg";

export default function ContactInfo() {
  const reasons = [
    "Fast response time",
    "Personalized solutions",
    "Modern tech expertise",
    "Transparent communication",
  ];

  return (
    <section className="w-full bg-gradient-180-light dark:bg-gradient-180-dark py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-start">
        {/* LEFT — reasons */}
        <div>
          <h2 className="text-[var(--text)] text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10">
            Why Contact Us
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--card)] text-[var(--text-muted)] px-4 sm:px-6 py-4 sm:py-5 rounded-xl border border-[var(--card-border)] text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — map */}
        <div>
          <h2 className="text-[var(--text)] text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10">
            Our Location
          </h2>
          <div className="rounded-xl overflow-hidden border border-[var(--card-border)]">
            <img
              src={mapImg}
              alt="Our office location"
              className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
