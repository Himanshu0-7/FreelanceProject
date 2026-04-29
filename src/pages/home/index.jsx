import About from "./sections/About";
import Blogs from "./sections/Blogs";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
export default function index() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Blogs></Blogs>
      <Feedback></Feedback>
    </>
  );
}
