import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Client from './components/Client';
import Team from './components/Team';
import Info from './components/Info';
import Footer from './components/Footer';
// In your main App component or index file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Services />
            <About />
            <WhyUs />
            <Team />
            <Client />
            <Info />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/client" element={<Client />} />
        <Route path="/info" element={<Info />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
