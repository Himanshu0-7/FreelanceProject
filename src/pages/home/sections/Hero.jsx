// updated from your file :contentReference[oaicite:0]{index=0}

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

        const normalizedAngle = ((angle % 360) + 360) % 360;
        const distanceFromTop = Math.min(
          Math.abs(normalizedAngle - 270),
          Math.abs(normalizedAngle + 90),
        );

        const scale = 1 + Math.max(0, (60 - distanceFromTop) / 60) * 0.5;

        el.style.transform = `translate(-50%, -50%)`;

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
      bgRotate.kill();
    };
  }, []);

  return (
    <section className="relative bg-gradient-90-light dark:bg-gradient-90-dark w-full min-h-screen flex items-center overflow-x-hidden">
      {/* ROTATING IMAGE */}
      <div
        ref={orbitRef}
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square"
      >
        <img
          ref={imgRef}
          src={HeroImage}
          className="w-full h-full object-contain origin-center"
        />
      </div>

      {/* ICON ORBIT */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square pointer-events-none">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="orbit-icon absolute"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img src={icon} className="icon-inner w-24 h-24 object-contain" />
          </div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <section className="pl-20">
        <div className="max-w-xl text-[var(--text)]">
          <p className="font-semibold text-2xl text-[var(--special-text)] mb-2">
            #1 in the Consultancy
          </p>

          <h1 className="text-7xl font-bold leading-tight">
            <span className="block whitespace-nowrap">
              Innovative IT Consulting For
            </span>

            <span ref={textRef} className="text-5xl mb-2 block min-h-[40px]" />
          </h1>

          <p className="text-[var(--text-muted)] mb-8 mt-4">
            From strategic planning to technology execution, MS TECH delivers
            expert consulting services that help businesses scale and innovate
          </p>

          <div className="flex gap-4">
            <button className="bg-btn-light dark:bg-btn-dark px-6 py-3 rounded-full text-white font-semibold transition duration-300 hover:opacity-90">
              Our Services
            </button>

            <button className="bg-[var(--card-soft)] text-[var(--text)] px-6 py-3 rounded-full">
              Free Consultancy
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
