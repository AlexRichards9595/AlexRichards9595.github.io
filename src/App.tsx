import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection/WorkSection";

function App() {
  return (
    <div className="App">
      <div className={"overflow-auto"}>
        <Header />
        <LandingSection />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;
