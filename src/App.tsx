import React, { useEffect, useRef } from 'react';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import WorkSection from "./components/WorkSection";
import LandingImage from "./images/LandingImage.jpg";

function App() {
  const scrollToElement = () => {
    const element = document.getElementById("work-section");
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => scrollToElement(), 5000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App overflow-x-hidden relative">
        <Header />
        <LandingSection />
        <WorkSection />
      </div>
  );
}

export default App;
