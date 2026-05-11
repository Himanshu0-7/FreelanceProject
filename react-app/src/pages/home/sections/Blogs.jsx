import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Blog_img1.png";
import img2 from "../../../assets/Blog_img2.png";

export default function Blogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      slug: "generative-ai",
      title:
        "Transforming Enterprises Through Intelligent Automation and Innovation",
      desc: "Generative AI has rapidly evolved from a futuristic concept into a transformative force reshaping industries worldwide. Organizations are adopting AI driven solutions to streamline operations and unlock new opportunities.",
      tag: "Generative AI",
      img: img1,
    },
    {
      slug: "cybersecurity",
      title: "Protecting Modern Enterprises Against Evolving Threats",
      desc: "As businesses accelerate digital transformation, cybersecurity has become one of the most critical priorities. From cloud infrastructure to AI powered systems, modern enterprises face increasing cyber threats.",
      tag: "Cybersecurity",
      img: img2,
    },
  ];

  return (
    <section className="w-full min-h-dvh py-16 sm:py-20 flex flex-col items-center overflow-hidden bg-gradient-47-light dark:bg-gradient-47-dark px-6 sm:px-10 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[var(--text)]">
        Our <span className="text-[var(--primary)]">Latest Blogs</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--text-muted)] text-center max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
        Get all the latest Blogs For The New Technology that helps you to learn
        and grow as an individual
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-14 w-full max-w-[1000px] mx-auto">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--card)] p-4 rounded-2xl shadow-lg border border-[var(--border)] hover:-translate-y-2 transition duration-300 flex flex-col cursor-pointer"
            onClick={() => navigate(`/blogs/${item.slug}`)}
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-5">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[180px] sm:h-[200px] object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <span className="bg-[var(--primary)]/20 text-[var(--primary)] text-xs px-3 py-1 rounded-full whitespace-nowrap w-fit mb-3">
                {item.tag}
              </span>

              <h3 className="text-[var(--text)] text-xl font-semibold mb-3 leading-relaxed">
                {item.title}
              </h3>

              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>

              <span className="text-[var(--primary)] text-sm sm:text-base hover:opacity-80 transition">
                Read More →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/blogs")}
        className="mt-14 px-8 py-3 rounded-full text-white transition duration-300 bg-btn-light dark:bg-btn-dark hover:opacity-90"
      >
        View All Blogs
      </button>
    </section>
  );
}
