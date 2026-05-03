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
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <h2 className="text-[var(--primary)] text-2xl md:text-4xl font-semibold mb-8">
          Explore Our Services
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] md:h-[300px] object-cover"
                />
              </div>

              {/* Half-out label */}
              <div
                className="absolute left-1/2 -translate-x-1/2 
                bottom-0 translate-y-1/2
                bg-[var(--card-soft)] px-8 py-5 rounded-xl 
                text-[var(--text)] shadow-lg"
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
