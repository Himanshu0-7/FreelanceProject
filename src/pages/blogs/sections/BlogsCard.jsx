import img from "../../../assets/blog_img.png"; // replace with your image

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
    <section className="w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b1220] p-4 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[160px] object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{item.desc}</p>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-blue-400 text-sm cursor-pointer">
                  Explore {item.title}
                </span>

                <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
