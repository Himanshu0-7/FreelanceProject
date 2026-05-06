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
    <section className="w-full py-20 sm:py-24 overflow-hidden bg-gradient-270-light dark:bg-gradient-270-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary)] mb-16">
          What Our Clients Say About Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                min-h-[320px] sm:min-h-[360px]
                p-6 sm:p-8 rounded-2xl border
                flex flex-col justify-center items-center
                transition-all duration-300 text-center
                ${item.highlight
                  ? "border-[var(--card-border2)] bg-[var(--card-bg)] md:scale-105 shadow-xl"
                  : "border-[var(--border2)] bg-[var(--card)] opacity-90 hover:opacity-100"
                }
              `}
            >
              {/* Quote */}
              <p className="text-[var(--text-muted)] text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                “{item.text}”
              </p>

              {/* Author */}
              <p className="text-[var(--text)] text-sm sm:text-base font-medium">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
