
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Process />
        <Services />
        <WhoWeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
