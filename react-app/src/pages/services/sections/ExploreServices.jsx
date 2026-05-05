import img1 from "../../../assets/exploreServices_img.png";
import img2 from "../../../assets/exploreServices_img2.jpg";
import img3 from "../../../assets/exploreServices_img3.jpg";

const services = [
  { title: "Agentic AI", img: img1 },
  { title: "Generative AI", img: img2 },
  { title: "Cybersecurity", img: img3 },
  { title: "Cybersecurity", img: img3 },
  { title: "Agentic AI", img: img1 },
  { title: "Generative AI", img: img2 },
];

export default function ExploreServices() {
  return (
    <section className="w-full py-10 bg-gradient-90-light dark:bg-gradient-90-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-[var(--primary)] text-xl sm:text-2xl md:text-4xl font-semibold mb-10 sm:mb-14">
          Explore Our Services
        </h2>

        {/* Grid — 1 col mobile, 2 col sm, 3 col md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-14 sm:gap-y-16">
          {services.map((item, index) => (
            <div key={index} className="relative pb-6">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[240px] md:h-[300px] object-cover"
                />
              </div>

              {/* Half-out label */}
              <div
                className="absolute left-1/2 -translate-x-1/2
                bottom-0 translate-y-1/2
                bg-[var(--card-soft)] px-5 sm:px-8 py-3 sm:py-5
                rounded-xl text-[var(--text)] shadow-lg
                text-sm sm:text-base whitespace-nowrap"
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
