import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    const text = "Digital-First World. ";
    let obj = { count: 0 };

    const tl = gsap.timeline({ repeat: -1 });

    // Typing
    tl.to(obj, {
      count: text.length,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        textRef.current.textContent = text.slice(0, Math.floor(obj.count));
      },
    });

    // Instant reset (THIS is key 🔥)
    tl.set(obj, { count: 0 });
    tl.set(textRef.current, { textContent: "" });
  }, []);
  return (
    <>
      <section className="relative bg-[#01050e] w-full min-h-screen flex items-center">
        <section className="pl-20">
          <div className="max-w-xl text-white">
            <p className="text-blue-400 mb-4">#1 in the Consultancy</p>
            <h1 className="text-5xl font-bold text-white leading-tight">
              <span className="block whitespace-nowrap">
                Innovative IT Consulting For
              </span>{" "}
              <span
                ref={textRef}
                className="text-4xl mb-2 block min-h-[40px]"
              ></span>
            </h1>
            <p className="text-gray-300 mb-8 mt-4">
              <span className="block">
                From strategic planning to technology execution, MS TECH
                delivers
              </span>
              <span className="block">
                expert consulting services that help businesses scale and
                innovate
              </span>
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-6 py-3 rounded-full">
                Our Services
              </button>

              <button className="bg-gray-400 text-black px-6 py-3 rounded-full">
                Free Consultancy
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
