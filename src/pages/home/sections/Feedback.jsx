export default function Feedback() {
  return (
    <section className="w-full bg-[#01050e] py-20 flex flex-col gap-6">
      <div className="text-center mb-4">
        <h1 className="text-white text-4xl font-semibold">
          Client <span className="text-blue-400">We Served</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          One Platform Where you get all the Ideas you need for your project
        </p>
      </div>

      <div className="px-20">
        <div className="relative py-4">
          {/* Corner brackets */}
          <span className="absolute top-0 z-10 left-0 w-10 h-10 border-t-[1.5px] border-l-[1.5px] border-[#549cba]" />
          <span className="absolute top-0 z-10 right-0 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-[#549cba]" />
          <span className="absolute bottom-0 z-10 left-0 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-[#549cba]" />
          <span className="absolute bottom-0 z-10 right-0 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-[#549cba]" />

          <div className="flex flex-col gap-10">
            <Row direction="left" />
            <Row direction="right" />
            <Row direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ direction = "left" }) {
  const items = new Array(10).fill(null);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-[15px] w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
      >
        {[...items, ...items].map((_, i) => (
          <div
            key={i}
            className="w-[150px] h-[150px] shrink-0 bg-[#050d1f] border border-[#5a7a89]"
          />
        ))}
      </div>
    </div>
  );
}
