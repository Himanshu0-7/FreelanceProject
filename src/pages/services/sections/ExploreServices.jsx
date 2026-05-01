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
    <section className="w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-10">
      <div className="max-w-[1400px] mx-auto ">
        {/* Title */}
        <h2 className="text-blue-400 text-2xl md:text-4xl font-semibold mb-8">
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
                bg-[#252832] px-8 py-5 rounded-xl text-white shadow-lg"
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
