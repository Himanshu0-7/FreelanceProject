import gsap from "gsap";
import { useEffect, useRef } from "react";
import icon1 from "../../../assets/hero_Img1.svg";
import icon2 from "../../../assets/hero_Img2.svg";
import icon3 from "../../../assets/hero_Img3.svg";
import icon4 from "../../../assets/hero_Img4.svg";
import icon5 from "../../../assets/hero_Img5.svg";
import icon6 from "../../../assets/hero_Img6.svg";

import HeroImage from "../../../assets/HeroSection_image.svg";
export default function Hero() {
  const orbitRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  useEffect(() => {
    const total = icons.length;

    const orbit = {
      rotation: 0,
      radius: 38,
      activeIndex: 0,
    };
    const bgRotate = gsap.to(orbitRef.current, {
      rotation: -360,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    const iconsEl = document.querySelectorAll(".orbit-icon");

    const updatePositions = () => {
      iconsEl.forEach((el, i) => {
        const angle = (360 / total) * i - 90 + orbit.rotation;

        const x = 50 + orbit.radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + orbit.radius * Math.sin((angle * Math.PI) / 180);

        el.style.left = `${x}%`;
        el.style.top = `${y}%`;

        // 🎯 distance logic
        const normalizedAngle = ((angle % 360) + 360) % 360;
        const distanceFromTop = Math.min(
          Math.abs(normalizedAngle - 270),
          Math.abs(normalizedAngle - -90),
        );

        const scale = 1 + Math.max(0, (60 - distanceFromTop) / 60) * 0.5;

        el.style.transform = `translate(-50%, -50%)`;

        // ✅ APPLY SCALE TO INNER ICON
        const inner = el.querySelector(".icon-inner");

        if (inner) {
          inner.style.transform = `scale(${scale})`;
          inner.style.transition = "transform 0.3s ease";
        }

        el.style.zIndex = Math.round(scale * 10);
      });
    };
    updatePositions();

    const tl = gsap.timeline({ repeat: 5 });

    for (let i = 0; i < total; i++) {
      tl.to(orbit, {
        rotation: `+=${360 / total}`,

        radius: 30,
        duration: 3,

        onUpdate: updatePositions,
      });

      tl.to(orbit, {
        // expand radius back
        radius: 38,
        duration: 2,
        ease: "power2.out",
        onUpdate: updatePositions,
      });

      tl.call(() => {
        orbit.activeIndex = (orbit.activeIndex + 1) % total;
        updatePositions();
      });
    }

    return () => {
      tl.kill();
      bgRotate.kill(); // ✅ add this
    };
  }, []);
  return (
    <>
      <section className="relative bg-[#01050e] w-full min-h-screen flex items-center overflow-x-hidden">
        <div
          ref={orbitRef}
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square overflow"
        >
          <img
            ref={imgRef}
            src={HeroImage}
            className="w-full h-full object-contain origin-center"
          />
        </div>
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square pointer-events-none">
          {icons.map((icon, i) => {
            {
              /* const isTop = i === 0; */
            }
            {
              /* const shadow = isTop */
            }
            {
              /*   ? "shadow-[0_0_30px_rgba(59,130,246,0.8)]" */
            }
            {
              /*   : "shadow-[0_0_20px_rgba(59,130,246,0.4)]"; */
            }

            return (
              <div
                key={i}
                className="orbit-icon absolute"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <img
                  src={icon}
                  className="icon-inner w-20 h-20 object-contain"
                />
              </div>
            );
          })}
        </div>
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
