import { Search } from "lucide-react"; // optional icon lib

export default function BlogSearch() {
  return (
    <section className="w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
          Blogs Topic
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-base mb-8">
          Get all the blogs about latest technology, To Learn and Grow in your
          Industry
        </p>

        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full bg-[#1a2031] border border-gray-500 text-white 
            px-5 py-3 rounded-lg outline-none 
            focus:border-blue-500 transition"
          />

          {/* Icon */}
          <Search
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </section>
  );
}
