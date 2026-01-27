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
import { useState, useEffect } from "react";


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 🛟 FAILSAFE: loader can NEVER block forever
  useEffect(() => {
    const fallback = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(fallback);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
