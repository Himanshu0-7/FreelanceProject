import gsap from "gsap";
import { useEffect, useRef } from "react";
import icon1 from "../../../assets/hero_img1.png";
import icon2 from "../../../assets/hero_img2.png";
import icon3 from "../../../assets/hero_img3.png";
import icon4 from "../../../assets/hero_img1.png";
import icon5 from "../../../assets/hero_img5.png";
import icon6 from "../../../assets/hero_img6.png";
import HeroImage from "../../../assets/HeroSection_image.svg";

export default function Hero() {
  const orbitRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();
  const lineRef = useRef();
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const triangleRef = useRef();
  const bgRef = useRef();
  useEffect(() => {
    const total = icons.length;

    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });

    tl1
      .fromTo(
        lineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "sine.inOut" },
      )
      .fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 0.6, duration: 2, ease: "sine.inOut" },
        "<",
      )
      .fromTo(
        triangleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "sine.inOut" },
        "<",
      ); // ← add this
    const orbit = {
      rotation: 0,
      radius: 38,
    };

    const bgRotate = gsap.to(orbitRef.current, {
      rotation: -360,
      duration: 30,
      ease: "none",
      repeat: 5,
    });

    const iconsEl = document.querySelectorAll(".orbit-icon");
    let lastTopIndex = -1;

    const updatePositions = (isShifting = false) => {
      let currentTopIndex = -1;
      let closestDistance = Infinity;

      // First pass — find who is closest to top
      iconsEl.forEach((el, i) => {
        const angle = (360 / total) * i - 90 + orbit.rotation;
        const normalizedAngle = ((angle % 360) + 360) % 360;
        const distanceFromTop = Math.min(
          Math.abs(normalizedAngle - 270),
          Math.abs(normalizedAngle + 90),
        );
        if (distanceFromTop < closestDistance) {
          closestDistance = distanceFromTop;
          currentTopIndex = i;
        }
      });

      // Second pass — update each icon
      iconsEl.forEach((el, i) => {
        const angle = (360 / total) * i - 90 + orbit.rotation;
        const x = 50 + orbit.radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + orbit.radius * Math.sin((angle * Math.PI) / 180);

        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        el.style.transform = `translate(-50%, -50%)`;

        const normalizedAngle = ((angle % 360) + 360) % 360;
        const distanceFromTop = Math.min(
          Math.abs(normalizedAngle - 270),
          Math.abs(normalizedAngle + 90),
        );

        const inner = el.querySelector(".icon-inner");
        if (!inner) return;

        const INFLUENCE_ZONE = 60;
        const proximity = Math.max(0, 1 - distanceFromTop / INFLUENCE_ZONE);

        const radiusProgress = isShifting ? (orbit.radius - 30) / (38 - 30) : 1;
        const baseSize = 44 + radiusProgress * 12; // 44px → 56px
        const scale = (baseSize + proximity * 16) / baseSize;

        inner.style.transition = "transform 0.2s ease"; // smooth scaling
        inner.style.transform = `scale(${scale})`;

        const glowOpacity1 = 0.4 + proximity * 0.5;
        const glowOpacity2 = 0.2 + proximity * 0.3;
        const glowOpacity3 = 0.05 + proximity * 0.2;

        inner.style.boxShadow = `
          0 0 ${8 + proximity * 8}px rgba(34,211,238,${glowOpacity1}),
          0 0 ${20 + proximity * 20}px rgba(34,211,238,${glowOpacity2}),
          0 0 ${40 + proximity * 30}px rgba(34,211,238,${glowOpacity3})
        `;
        inner.style.borderColor = `rgba(34,211,238,${0.3 + proximity * 0.7})`;
        el.style.zIndex = Math.round(10 + proximity * 10);
      });

      if (currentTopIndex !== -1 && currentTopIndex !== lastTopIndex) {
        lastTopIndex = currentTopIndex;
      }
    };

    updatePositions();

    // ✅ Clean loop — no code outside the for loop
    const tl = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < total; i++) {
      // Shrink phase — radius goes in, icons shrink + rotate
      tl.to(orbit, {
        keyframes: [
          {
            rotation: `+=${-360 / total}`,
            radius: 28,
            duration: 3,
          },
          {
            radius: 38,
            duration: 1,
          },
        ],
        onUpdate: () => updatePositions(true),
      });

      tl.call(() => updatePositions(false));
    }

    return () => {
      tl.kill();
      bgRotate.kill();
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-x-hidden 
  bg-gradient-90-light 
  dark:bg-none dark:bg-black"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none dark:bg-gradient-0-dark"
      />

      <div
        ref={lineRef}
        className="absolute top-1/2 left-1/2 w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, #60a5fa, #22d3ee, transparent)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center 40%, rgba(34,211,238,0.8) 0%, rgba(59,130,246,0.5) 30%, transparent 0%)",
            filter: "blur(1px)",
            transform: "scaleY(4)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom 35%, rgba(59,130,246,0.5) 0%, transparent 0%)",
            filter: "blur(5px)",
            transform: "scaleY(6)",
          }}
        />
      </div>
      <div
        ref={triangleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-[40%] h-[25vh] z-0 pointer-events-none"
      >
        {/* light mode */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-100 dark:opacity-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(34,211,238,0.2)_0%,rgba(34,211,238,0.08)_50%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[50%] opacity-100 dark:opacity-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(34,211,238,0.35)_0%,rgba(34,211,238,0.1)_50%,transparent_70%)] blur-lg" />

        {/* dark mode */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(34,211,238,0.4)_0%,rgba(34,211,238,0.12)_50%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[50%] opacity-0 dark:opacity-90 bg-[radial-gradient(ellipse_40%_50%_at_50%_100%,rgba(34,211,238,0.7)_0%,rgba(34,211,238,0.2)_50%,transparent_70%)] blur-lg" />
      </div>
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

      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square pointer-events-none">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="orbit-icon absolute"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div
              className="icon-inner flex items-center justify-center rounded-[14px] bg-black border border-cyan-400/40 shrink-0"
              style={{
                width: "56px",
                height: "56px",
                boxShadow:
                  "0 0 8px rgba(34,211,238,0.5), 0 0 20px rgba(34,211,238,0.25), 0 0 40px rgba(34,211,238,0.1)",
              }}
            >
              <img
                src={icon}
                className="w-10 h-10 object-contain rounded-[10px] shrink-0"
              />
            </div>
          </div>
        ))}
      </div>

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
