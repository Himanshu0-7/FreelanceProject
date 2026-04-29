import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function About() {
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
    <section className="relative  bg-[linear-gradient(47deg,rgba(0,0,0,1)_0%,rgba(9,25,72,1)_100%)] w-full min-h-screen pt-4 flex justify-center">
      <section>
        <h1 className="font-semibold text-white text-6xl text-center">
          About <span className="text-[#1487d5]">Us</span>
        </h1>
        <section className="flex flex-row gap-15 mt-10 pt-20">
          <div className="flex flex-col gap-10 max-w-[550px]">
            <p className="text-white text-xl leading-relaxed mb-10">
              At <span className="text-blue-400">MS TECH</span>, we don't just
              solve problems - we build technology-driven success.
            </p>

            <div className="w-[400px] h-[350px] rounded-[30px] bg-white"></div>
          </div>
          <div className="max-w-[600px]">
            <div className="flex gap-6">
              <div className="w-[280px] h-[180px] rounded-[30px] bg-white"></div>
              <div className="w-[280px] h-[180px] rounded-[30px] bg-white"></div>
            </div>

            <p className="text-white text-lg mt-6 mb-10 leading-relaxed">
              At MS TECH, we help businesses grow smarter through innovative IT
              consulting and technology solutions. Our goal is simple — to make
              technology work for you, not against you.
            </p>
            <div className="col-span-2 grid grid-cols-3 gap-6 mt-6 text-white text-center">
              <div>
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-sm">Agentic AI Projects</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">60+</h2>
                <p className="text-sm">Generative AI Projects</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-sm">Cyber Security Projects</p>
              </div>
              <div className="col-span-2 mt-6 flex justify-start">
                <button className="bg-blue-600 px-6 py-3 rounded-full text-white">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
