import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Platforms />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>;
}