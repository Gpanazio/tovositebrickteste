import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { Manifesto } from './components/Manifesto';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-black-pure min-h-screen w-full text-white selection:bg-red-pure selection:text-black">
      <CustomCursor />
      <Navigation />
      
      {/* Decorative Grid Overlay (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '100px 100px' }}>
      </div>

      <Hero />
      <ProjectList />
      <Manifesto />
      <Contact />
    </main>
  );
}

export default App;
