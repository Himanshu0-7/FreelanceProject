import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Industires from "./pages/industries";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industires />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
