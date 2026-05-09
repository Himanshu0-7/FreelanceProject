import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";
import Footer from "./components/layout/Footer";
import BlogDetailPage from "./pages/blogs/BlogsDetailPage";
import ScrollToTop from "./components/utils/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
