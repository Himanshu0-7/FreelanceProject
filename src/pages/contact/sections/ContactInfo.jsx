import mapImg from "../../../assets/location_img.jpg"; // your map image

export default function ContactInfo() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
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
                className="bg-[#0b1220] px-6 py-5 rounded-xl text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
            Our Location
          </h2>

          <div className="rounded-xl overflow-hidden">
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
