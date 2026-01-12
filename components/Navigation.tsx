import React from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-start">
      <div className="flex flex-col">
        <span className="font-sans font-black tracking-tightest text-xl leading-none text-white">MONOLITH</span>
        <span className="font-sans font-light text-[10px] tracking-widest text-white mt-1 opacity-70">EST. 2024 // TKY-NYC</span>
      </div>
      
      <button className="group flex items-center gap-2">
        <span className="font-sans font-light text-xs tracking-widest text-white hidden sm:block group-hover:text-red-pure transition-colors duration-300">MENU</span>
        <Menu className="text-white w-6 h-6 group-hover:text-red-pure transition-colors duration-300" strokeWidth={1} />
      </button>
    </nav>
  );
};
