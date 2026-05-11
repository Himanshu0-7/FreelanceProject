import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Blog_img1.png";
import img2 from "../../../assets/Blog_img2.png";

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

export default function BlogCards({ query }) {
  const navigate = useNavigate();

  const filtered = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.tag.toLowerCase().includes(query.toLowerCase()) ||
      blog.desc.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="w-full py-10 sm:py-5 overflow-hidden bg-gradient-90-light dark:bg-gradient-90-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)] text-lg">
              No blogs found for{" "}
              <span className="text-[var(--primary)] font-semibold">
                "{query}"
              </span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--card)] p-4 rounded-2xl shadow-lg border border-[var(--border)] hover:-translate-y-2 transition duration-300 flex flex-col cursor-pointer"
                onClick={() => navigate(`/blogs/${item.slug}`)}
              >
                <div className="rounded-xl overflow-hidden mb-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[180px] sm:h-[200px] object-cover transition duration-500 hover:scale-105"
                  />
                </div>
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
                  <div className="flex justify-between items-center gap-4 flex-wrap">
                    <span className="text-[var(--primary)] text-sm sm:text-base hover:opacity-80 transition">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
