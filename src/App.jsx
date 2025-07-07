import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./util/ScrollToTop";
import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero/Index";
import Achievement from "./segments/Achievement";
import About from "./segments/About";
import Service from "./segments/Services";
import Portfolio from "./segments/Portfolio";
import Testimonials from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Blog from "./segments/Blog";
import Footer from "./segments/Footer";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Pricing from "./pages/Pricing";

import "swiper/css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.state?.scrollToContact) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Achievement />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Blog />
    </>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
