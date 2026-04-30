const testimonials = [
  {
    text: "MS TECH helped us simplify our workflow using AI solutions. The approach was clear, and the execution was smooth and efficient.",
    author: "Founder, Startup Company",
  },
  {
    text: "MS TECH helped us simplify our workflow using AI solutions. The approach was clear, and the execution was smooth and efficient.",
    author: "Founder, Startup Company",
    highlight: true,
  },
  {
    text: "MS TECH helped us simplify our workflow using AI solutions. The approach was clear, and the execution was smooth and efficient.",
    author: "Founder, Startup Company",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-400 mb-16">
          What Our Clients Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div
              className={`
    p-6 rounded-2xl border aspect-square
    flex flex-col justify-center item-center
    transition-all duration-300
    ${item.highlight
                  ? "border-blue-500 bg-[#111827] scale-105"
                  : "border-white/10 bg-[#0b1220] opacity-80 hover:opacity-100"
                }
  `}
            >
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                “{item.text}”
              </p>

              <p className="text-gray-400 text-lg">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
