import mapImg from "../../../assets/location_img.jpg";

export default function ContactInfo() {
  return (
    <section className="w-full bg-gradient-180-light dark:bg-gradient-180-dark py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-[var(--text)] text-2xl md:text-3xl font-semibold mb-10">
            Why Contact US
          </h2>

          <div className="space-y-6">
            {[
              "Fast response time",
              "Personalized solutions",
              "Modern tech expertise",
              "Transparent communication",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--card)] dark:bg-[var(--card)] text-[var(--text-muted)] px-6 py-5 rounded-xl border border-[var(--card-border)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-[var(--text)] text-2xl md:text-3xl font-semibold mb-10">
            Our Location
          </h2>

          <div className="rounded-xl overflow-hidden border border-[var(--card-border)]">
            <img
              src={mapImg}
              alt="map"
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
