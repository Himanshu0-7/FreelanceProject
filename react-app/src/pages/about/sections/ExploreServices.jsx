import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/SalesNow.png";
import img2 from "../../../assets/SalesForce.png";
import img3 from "../../../assets/Devops_img.png";
import img4 from "../../../assets/agentic_ai_img.png";
import img5 from "../../../assets/CyberSecurity_img.png";
import img6 from "../../../assets/gcc_img.png";

const services = [
  { title: "ServiceNow Solutions", img: img1, slug: "servicenow" },
  { title: "Salesforce Services", img: img2, slug: "salesforce" },
  { title: "DevOps and Cloud Engineering", img: img3, slug: "devops" },
  { title: "Agentic AI and Generative AI", img: img4, slug: "agentic-ai" },
  {
    title: "Cybersecurity and Risk Management",
    img: img5,
    slug: "cybersecurity",
  },
  { title: "Global Capability Centers (GCC)", img: img6, slug: "gcc" },
];

export default function ExploreServices({ servicesRef }) {
  const navigate = useNavigate();

  return (
    <section className="w-full pt-5 sm:pt-12 lg:pt-16 pb-10 sm:pb-18 lg:pb-16 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary)] mb-16 sm:mb-20">
          Explore Our Services
        </h2>

        {/* Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer pb-6"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
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
                bg-[var(--card-soft)] px-6 sm:px-8 py-3 sm:py-4 rounded-xl 
                text-[var(--text)] shadow-lg border border-[var(--border)]
                w-[85%] text-center
                group-hover:text-[var(--primary)] transition duration-300"
              >
                <p className="text-sm sm:text-base font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-24">
          <button
            onClick={() => navigate("/services")}
            className="px-10 py-4 rounded-full text-white font-semibold bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300"
          >
            Explore All Services →
          </button>
        </div>
      </div>
    </section>
  );
}
