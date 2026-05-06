import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/exploreServices_img.png";
import img2 from "../../../assets/exploreServices_img2.jpg";
import img3 from "../../../assets/exploreServices_img3.jpg";

const services = [
  { title: "ServiceNow Solutions", img: img1, slug: "servicenow" },
  { title: "Salesforce Services", img: img2, slug: "salesforce" },
  { title: "DevOps and Cloud Engineering", img: img3, slug: "devops" },
  { title: "Agentic AI and Generative AI", img: img1, slug: "agentic-ai" },
  {
    title: "Cybersecurity and Risk Management",
    img: img2,
    slug: "cybersecurity",
  },
  { title: "Global Capability Centers (GCC)", img: img3, slug: "gcc" },
];

export default function ExploreServices() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 bg-gradient-90-light dark:bg-gradient-90-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-[var(--primary)] text-xl sm:text-2xl md:text-4xl font-semibold mb-10 sm:mb-14">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-14 sm:gap-y-16">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative pb-6 cursor-pointer group"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[240px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2
                bg-[var(--card-soft)] px-5 sm:px-8 py-3 sm:py-5
                rounded-xl text-[var(--text)] shadow-lg
                text-sm sm:text-base text-center w-[85%]
                group-hover:text-[var(--primary)] transition-colors duration-300"
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
