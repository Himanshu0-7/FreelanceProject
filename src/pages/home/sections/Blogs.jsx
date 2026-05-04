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
    <section className="w-full min-h-screen py-16 sm:py-20 flex flex-col items-center bg-gradient-47-light dark:bg-gradient-47-dark px-6 sm:px-10 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[var(--text)]">
        Our <span className="text-[var(--primary)]">Latest Blogs</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--text-muted)] text-center max-w-2xl mt-4 text-sm sm:text-base">
        Get all the latest Blogs For The New Technology that helps you to learn
        and grow as an individual
      </p>

      {/* Grid —1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 w-full max-w-[1200px]">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[var(--card)] rounded-2xl overflow-hidden w-full"
          >
            {/* Image */}
            <div className="relative h-[180px]">
              <img
                src={blog.img}
                className="w-full h-full object-cover"
                alt={blog.title}
              />
              {/* Tag badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                {blog.tag}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-[var(--text)] font-semibold text-base sm:text-lg">
                {blog.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm mt-2 line-clamp-3">
                {blog.desc}
              </p>
              <button className="mt-4 px-4 py-2 rounded-full text-white text-sm bg-btn-light dark:bg-btn-dark hover:opacity-90 transition">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <button
        onClick={() => navigate("/blogs")}
        className="mt-12 sm:mt-16 px-8 py-3 rounded-full text-white transition bg-btn-light dark:bg-btn-dark hover:opacity-90"
      >
        View All Blogs
      </button>
    </section>
  );
}
