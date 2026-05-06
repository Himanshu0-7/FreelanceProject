import gsap from "gsap";
import { useEffect, useRef } from "react";
import icon1 from "../../../assets/hero_img1.png";
import icon2 from "../../../assets/hero_img2.png";
import icon3 from "../../../assets/hero_img3.png";
import icon4 from "../../../assets/hero_img1.png";
import icon5 from "../../../assets/hero_img5.png";
import icon6 from "../../../assets/hero_img6.png";
import HeroImage from "../../../assets/HeroSection_image.svg";
import { useNavigate } from "react-router-dom";

// 👇 Toggle this to switch versions
const MOBILE_ORBIT = "behind"; // "hide" | "behind"

export default function Hero() {
  const orbitRef = useRef();
  const imgRef = useRef();
  const lineRef = useRef();
  const iconsContainerRef = useRef();
  const triangleRef = useRef();
  const bgRef = useRef();
  const textRef = useRef();
  const navigate = useNavigate();

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  useEffect(() => {
    const text = "Digital-First World. ";
    let obj = { count: 0 };
    const tl3 = gsap.timeline({ repeat: -1 });
    tl3.to(obj, {
      count: text.length,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent = text.slice(0, Math.floor(obj.count));
        }
      },
    });
    tl3.set(obj, { count: 0 });
    tl3.set(textRef.current, { textContent: "" });
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
      );

    const orbit = { rotation: 0, radius: 38 };

    const bgRotate = gsap.to(orbitRef.current, {
      rotation: -360,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const iconsEl = iconsContainerRef.current.querySelectorAll(".orbit-icon");

    const updatePositions = (isShifting = false) => {
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

        const baseSize = 44 + radiusProgress * 12;

        const scale = (baseSize + proximity * 16) / baseSize;

        inner.style.transition = "transform 0.2s ease";

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
    };

    updatePositions();

    const tl = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < total; i++) {
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
          tl1.play();
          bgRotate.play();
        } else {
          tl.pause();
          tl1.pause();
          bgRotate.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(iconsContainerRef.current);

    return () => {
      tl.kill();
      tl1.kill();
      bgRotate.kill();
      gsap.killTweensOf(orbit);
      observer.disconnect();
    };
  }, []);

  const orbitWrapClass =
    MOBILE_ORBIT === "hide"
      ? "hidden md:block absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square"
      : "absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:right-[-8%] md:translate-x-0 w-[90vw] sm:w-[70vw] md:w-[50vw] max-w-[750px] aspect-square opacity-15 sm:opacity-40 md:opacity-100 z-0";

  const iconsWrapClass =
    MOBILE_ORBIT === "hide"
      ? "hidden md:block absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[800px] aspect-square pointer-events-none"
      : "absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:right-[-8%] md:translate-x-0 w-[90vw] sm:w-[70vw] md:w-[50vw] max-w-[750px] aspect-square pointer-events-none opacity-15 sm:opacity-40 md:opacity-100 z-0";

  return (
    <section className="relative w-full min-h-dvh flex items-center overflow-hidden bg-gradient-90-light dark:bg-none dark:bg-black">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none dark:bg-gradient-0-dark"
      />

      <div
        ref={lineRef}
        className="hidden md:block absolute top-1/2 left-1/2 w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 z-0"
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
      </div>

      <div
        ref={triangleRef}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-[40%] h-[25vh] z-0 pointer-events-none"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-100 dark:opacity-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(34,211,238,0.2)_0%,rgba(34,211,238,0.08)_50%,transparent_70%)]" />
      </div>

      <div className={orbitWrapClass}>
        <div ref={orbitRef} className="w-full h-full">
          <img
            ref={imgRef}
            src={HeroImage}
            alt=""
            className="w-full h-full object-contain origin-center"
          />
        </div>
      </div>

      <div ref={iconsContainerRef} className={iconsWrapClass}>
        {icons.map((icon, i) => (
          <div
            key={i}
            className="orbit-icon absolute"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="icon-inner flex items-center justify-center rounded-[14px] bg-black border border-cyan-400/40 shrink-0"
              style={{
                width: "56px",
                height: "56px",
              }}
            >
              <img
                src={icon}
                alt=""
                className="w-10 h-10 object-contain rounded-[10px] shrink-0"
              />
            </div>
          </div>
        ))}
      </div>

      <section className="relative z-10 px-6 sm:px-12 lg:pl-20 w-full md:w-1/2">
        <div className="max-w-xl text-[var(--text)]">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl text-[var(--special-text)] mb-2">
            #1 in the Consultancy
          </p>

          <h1
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
            }}
          >
            <span className="block whitespace-nowrap">
              Innovative IT Consulting For
            </span>

            <span
              ref={textRef}
              className="block mt-2 "
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
                minHeight: "60px",
              }}
            />
          </h1>
          <p className="text-[var(--text-muted)] mb-4 mt-8 text-sm sm:text-base">
            From strategic planning to technology execution, MS TECH delivers
            expert consulting services that help businesses scale and innovate
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-btn-light dark:bg-btn-dark px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white font-semibold transition duration-300 hover:opacity-90">
              Our Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-[var(--button-soft)] text-[var(--text)] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full"
            >
              Free Consultancy
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
