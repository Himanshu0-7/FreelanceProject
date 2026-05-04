import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();
  const blogs = [
    {
      title: "What is Agentic AI",
      desc: "Here are strong, professional texts for the Our Services section of your MS TECH consultancy website....",
      img: "/img2.jpg",
      tag: "AGENTIC AI",
    },
    {
      title: "What is Generative AI",
      desc: "Here are strong, professional texts for the Our Services section of your MS TECH consultancy website....",
      img: "/img1.jpg",
      tag: "GENERATIVE AI",
    },
    {
      title: "What is Cyber Security",
      desc: "Here are strong, professional texts for the Our Services section of your MS TECH consultancy website....",
      img: "/img3.jpg",
      tag: "CYBER SECURITY",
    },
    {
      title: "What is Agentic AI",
      desc: "Here are strong, professional texts for the Our Services section of your MS TECH consultancy website....",
      img: "/img2.jpg",
      tag: "AGENTIC AI",
    },
  ];

  return (
    <section className="w-full min-h-screen py-20 flex flex-col items-center bg-gradient-47-light dark:bg-gradient-47-dark">
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-[var(--text)]">
        Our <span className="text-[var(--primary)]">Latest Blogs</span>
      </h1>

      <p className="text-[var(--text-muted)] text-center max-w-2xl mt-4">
        Get all the latest Blogs For The New Technology that helps you to learn
        and grow as an individuals
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[var(--card)] rounded-2xl overflow-hidden w-[280px]"
          >
            <div className="relative h-[180px]">
              <img src={blog.img} className="w-full h-full object-cover" />

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[var(--text)] text-sm font-semibold">
                {blog.tag}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-[var(--text)] font-semibold text-lg">
                {blog.title}
              </h3>

              <p className="text-[var(--text-muted)] text-sm mt-2">
                {blog.desc}
              </p>

              <button className="mt-4 px-4 py-2 rounded-full text-white text-sm bg-btn-light dark:bg-btn-dark">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/blogs")}
        className="mt-16 px-8 py-3 rounded-full text-white transition bg-btn-light dark:bg-btn-dark"
      >
        View All Blogs
      </button>
    </section>
  );
}
