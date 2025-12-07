import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SelectedWorks from "./Components/SelectedWorks";
import WorkCarousel from "./Components/WorkCarousel";
import Mail from "./Components/Mail";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <Header
        refs={{
          hero: heroRef,
          about: aboutRef,
          contact: contactRef,
          projects: projectsRef,
        }}
      />
      <div className="w-full mt-15">
        <div ref={heroRef} data-aos="fade-up">
          <Hero />
        </div>
        <div ref={aboutRef} data-aos="fade-right" className=" items-center">
          <About />
        </div>
        <div ref={projectsRef} className="w-full md:flex flex-col md:flex-row justify-between items-center md:items-start" data-aos="fade-up">
          <SelectedWorks />
          <WorkCarousel />
        </div>
        <div ref={contactRef} data-aos="slide-up" className="mt-20">
          <Mail />
        </div>
      </div>
    </div>
  );
}

export default App;
