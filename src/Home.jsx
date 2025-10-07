import React, { useRef } from 'react';
import Navigation from './Components/home/Navigation';
import Hero from './Components/home/Hero';
import Services from './Components/home/Services';
import Portfolio from './Components/home/Portfolio';
import Testimonials from './Components/home/Testimonials';
import About from './Components/home/About';
import Contact from './Components/home/Contact';
import Footer from './Components/home/Footer';
import Training from './Components/home/Training';

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <div id="training">
        <Training />
      </div>
      <Services />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Testimonials />
      <div id="about">
        <About />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}