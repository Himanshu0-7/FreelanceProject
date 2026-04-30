import gsap from "gsap";
import { useEffect, useRef } from "react";
import HeroImage from "../../../assets/HeroSection_image.svg";
export default function Hero() {
  const imgRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const text = "Digital-First World. ";
    let obj = { count: 0 };

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(obj, {
      count: text.length,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        textRef.current.textContent = text.slice(0, Math.floor(obj.count));
      },
    });

    tl.set(obj, { count: 0 });
    tl.set(textRef.current, { textContent: "" });

    gsap.to(imgRef.current, {
      rotate: -360,
      transformOrigin: "50% 50%",
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <>
      <section className="relative bg-[#01050e] w-full min-h-screen flex items-center">
        <img
          ref={imgRef}
          src={HeroImage}
          className="
    absolute 
   right-0 
    top-1/2 
    -translate-y-1/2 
    translate-x-1/4
    w-[50vw] max-w-[800px]
    origin-center
  "
        />
        <section className="pl-20">
          <div className="max-w-xl text-white">
            <p className="font-semibold text-2xl text-[#42b9f4] mb-2">
              #1 in the Consultancy
            </p>
            <h1 className="text-7xl font-bold text-white leading-tight">
              <span className="block whitespace-nowrap">
                Innovative IT Consulting For
              </span>{" "}
              <span
                ref={textRef}
                className="text-5xl mb-2 block min-h-[40px]"
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
              <button className="relative px-6 py-3 rounded-full overflow-hidden">
                {/* Gradient background */}
                <span
                  className="absolute inset-0 
    bg-[linear-gradient(90deg,rgba(11,37,110,1)_0%,rgba(7,113,186,1)_100%)]"
                ></span>

                {/* Text */}
                <span className="relative z-10 text-white font-semibold">
                  Our Services
                </span>
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
