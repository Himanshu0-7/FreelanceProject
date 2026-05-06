import ExploreServices from "./sections/ExploreServices";
import IndustriesCapabilities from "./sections/IndustriesCapabilities";
import Introduction from "./sections/Introduction";
import Testimonials from "./sections/Testimonials";
import VisionSection from "./sections/Vision";
import WhatWeDo from "./sections/WhatWeDO";
import WhoWeProvide from "./sections/WhoWeProvide";
export default function index() {
  return (
    <>
      <Introduction />
      <WhatWeDo />
      <WhoWeProvide />
      <IndustriesCapabilities />
      <VisionSection />
      <Testimonials />
      <ExploreServices />
    </>
  );
}
