import React, { useEffect } from 'react';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import WorkSection from "./components/WorkSection";


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
    <div className="App">
      <div className={"overflow-clip"}>
        <Header />
        <LandingSection />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;
