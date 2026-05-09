import { useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ExploreServices from "./sections/ExploreServices";
import IndustriesCapabilities from "./sections/IndustriesCapabilities";
import Introduction from "./sections/Introduction";
import Testimonials from "./sections/Testimonials";
import VisionSection from "./sections/Vision";
import WhatWeDo from "./sections/WhatWeDO";
import WhoWeProvide from "./sections/WhoWeProvide";

gsap.registerPlugin(ScrollToPlugin);

export default function Index() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    const el = servicesRef.current;
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY - 80;

    gsap.to(window, {
      scrollTo: { y: targetY },
      duration: 1.2,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <Introduction scrollToServices={scrollToServices} />
      <WhatWeDo />
      <WhoWeProvide />
      <IndustriesCapabilities />
      <VisionSection />
      <Testimonials />
      <ExploreServices servicesRef={servicesRef} />
    </>
  );
}
