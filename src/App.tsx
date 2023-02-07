import React from 'react';
import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection/WorkSection";
import LandingImage from "./images/LandingImage.jpg";

function App() {
  return (
    <div className="App">
      <div className={"bg-cover bg-fixed bg-left-top overflow-y-auto overflow-x-hidden"} style={{backgroundImage: `url(${LandingImage})`}}>
        <Header />
        <LandingSection />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;
