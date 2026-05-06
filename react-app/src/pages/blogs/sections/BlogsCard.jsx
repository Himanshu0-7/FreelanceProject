import img from "../../../assets/blog_img.png";

const blogs = [
  {
    title: "Agentic AI",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-1",
    img: img,
  },

  {
    title: "Generative AI",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-2",
    img: img,
  },

  {
    title: "Cyber Security",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-3",
    img: img,
  },

  {
    title: "AI Automation",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-4",
    img: img,
  },

  {
    title: "Cloud AI",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-5",
    img: img,
  },

  {
    title: "ML Systems",
    desc: "Create content, designs, and solutions instantly using advanced AI models that enhance creativity and speed up workflows.",
    tag: "Topic-6",
    img: img,
  },
];

export default function BlogCards() {
  return (
    <section className="w-full py-10 sm:py-16 overflow-hidden bg-gradient-90-light dark:bg-gradient-90-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--card)] p-4 rounded-2xl shadow-lg border border-[var(--border)] hover:-translate-y-2 transition duration-300 flex flex-col"
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
                {/* Title */}
                <h3 className="text-[var(--text)] text-xl font-semibold mb-3 leading-relaxed">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center gap-4 flex-wrap">
                  <span className="text-[var(--primary)] text-sm sm:text-base cursor-pointer hover:opacity-80 transition">
                    Explore {item.title}
                  </span>

                  <span className="bg-[var(--primary)]/20 text-[var(--primary)] text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
