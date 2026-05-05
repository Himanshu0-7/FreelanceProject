import { useState } from "react";
import whatwedo_img from "../../../assets/whatwedo_img.png";

const services = [
  {
    title: "Cybersecurity Consulting",
    desc: "Protect systems, data, and infrastructure with modern security strategies and risk management.",
  },
  {
    title: "Web Development",
    desc: "Build fast, scalable, and modern web applications tailored to your business.",
  },
  {
    title: "UI/UX Design",
    desc: "Design intuitive and engaging user experiences with modern design systems.",
  },
  {
    title: "Cloud Solutions",
    desc: "Deploy and manage scalable cloud infrastructure with best practices.",
  },
];

export default function WhatWeDo() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
      {/* Background */}
      <img
        src={whatwedo_img}
        alt="team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

      {/* Content Card */}
      <div
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 
        bg-[var(--card)] text-[var(--text)] 
        p-6 md:p-8 rounded-2xl w-[300px] md:w-[550px] md:h-[250px] 
        shadow-xl transition-all duration-300"
      >
        <h2 className="text-xl md:text-4xl font-semibold mb-4 text-[var(--primary)]">
          What We Do
        </h2>

        {/* Inner Box */}
        <div className="bg-[var(--card-bg)] p-4 rounded-lg backdrop-blur-sm transition-all duration-300">
          <h3 className="font-semibold text-sm md:text-lg mb-2">
            {services[index].title}
          </h3>

          <p className="text-xs md:text-sm text-[var(--text-muted)]">
            {services[index].desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="relative mt-2">
          <div
            className="absolute left-1/2 -translate-x-1/2 
            bottom-0 translate-y-[120%]
            flex justify-between gap-6 
            bg-[var(--card-soft)] w-[250px] py-2 rounded-full shadow-lg"
          >
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--card-bg)] text-[var(--text)] 
              hover:opacity-80 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--card-bg)] text-[var(--text)] 
              hover:opacity-80 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
