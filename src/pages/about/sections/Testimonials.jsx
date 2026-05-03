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
    <section className="w-full py-20 bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[var(--primary)] mb-16">
          What Our Clients Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-2xl border aspect-square
                flex flex-col justify-center items-center
                transition-all duration-300
                ${item.highlight
                  ? "border-[var(--border)] bg-[var(--card-bg)] scale-105"
                  : "border-[var(--special-text)] bg-[var(--card)] opacity-80 hover:opacity-100"
                }
              `}
            >
              <p className="text-[var(--text-muted)] text-xl leading-relaxed mb-8 text-center">
                “{item.text}”
              </p>

              <p className="text-[var(--text-muted)] text-lg">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
