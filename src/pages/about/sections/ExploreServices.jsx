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
    <section className="w-full bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-400 mb-16">
          Explore Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div key={index} className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] md:h-[330px] object-cover"
                />
              </div>

              <div
                className="absolute left-1/2 -translate-x-1/2 
                bottom-0 translate-y-1/2
                bg-[#252832] px-10 py-5 rounded-xl text-white shadow-lg"
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
