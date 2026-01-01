// pages/Index.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Loading Animation */}
      <Loader />

      {/* Navbar */}
      <Navigation />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default Index;
