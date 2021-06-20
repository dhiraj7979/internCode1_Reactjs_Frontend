import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cover from './components/cover'
import ThreeCardsSection from "./components/threeCardsSection";
import Section3 from './components/section3';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Cover />
      <ThreeCardsSection />
      <Section3 />
    </React.Fragment>

  );
}

export default App;
