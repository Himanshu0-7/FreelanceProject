import { Search } from "lucide-react";

export default function BlogSearch() {
  return (
    <section className="w-full py-16 sm:py-20 overflow-hidden bg-gradient-90-light dark:bg-gradient-90-dark">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary)] mb-4">
          Blogs Topic
        </h2>

        {/* Subtitle */}
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Get all the blogs about latest technology, To Learn and Grow in your
          Industry
        </p>

        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full 
              bg-[var(--card-soft)] 
              border border-[var(--border)] 
              text-[var(--text)] 
              px-5 py-3 sm:py-4 pr-14 rounded-xl outline-none 
              focus:border-[var(--primary)] 
              transition duration-300"
          />

          {/* Icon */}
          <Search
            size={20}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>
      </div>
    </section>
  );
}
