import ExploreServices from "./sections/ExploreServices";
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
      <VisionSection />
      <Testimonials />
      <ExploreServices />
    </>
  );
}
