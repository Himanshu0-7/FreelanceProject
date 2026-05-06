import img1 from "../../../assets/exploreServices_img.png";
import img2 from "../../../assets/exploreServices_img2.jpg";
import img3 from "../../../assets/exploreServices_img3.jpg";

const services = [
  { title: "Agentic AI", img: img1 },
  { title: "Generative AI", img: img2 },
  { title: "Cybersecurity", img: img3 },
];

export default function ExploreServices() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary)] mb-16 sm:mb-20">
          Explore Our Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {services.map((item, index) => (
            <div key={index} className="relative group">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[240px] sm:h-[300px] md:h-[330px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <div
                className="absolute left-1/2 -translate-x-1/2 
                bottom-0 translate-y-1/2
                bg-[var(--card-soft)] px-6 sm:px-10 py-4 sm:py-5 rounded-xl 
                text-[var(--text)] shadow-lg whitespace-nowrap border border-[var(--border)]"
              >
                <p className="text-sm sm:text-base font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
