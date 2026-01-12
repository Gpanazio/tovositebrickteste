import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black-pure pt-20">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 border-l border-white/10">
          {[...Array(8)].map((_, i) => (
             <div key={i} className="border-r border-white/10 h-full" />
          ))}
        </div>
      </div>

      <div className="z-10 w-full max-w-[90vw] relative">
        {/* Massive Typography Layer 1 */}
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-[12vw] leading-[0.8] tracking-tightest text-white text-center mix-blend-exclusion"
        >
          SILENCE
        </motion.h1>

        {/* The Monolith - Central Visual Anchor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] md:w-[18vw] aspect-monolith z-20 pointer-events-none">
           <motion.div 
             initial={{ scaleY: 0 }}
             animate={{ scaleY: 1 }}
             transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
             className="w-full h-full bg-red-pure overflow-hidden relative"
           >
              <img 
                src="https://picsum.photos/600/900?grayscale" 
                alt="Hero Monolith" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
           </motion.div>
        </div>

        {/* Massive Typography Layer 2 */}
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-[12vw] leading-[0.8] tracking-tightest text-white text-center mix-blend-exclusion relative z-30"
        >
          IS LOUD<span className="text-red-pure">.</span>
        </motion.h1>
      </div>

      <div className="absolute bottom-10 left-6 md:left-12 flex flex-col gap-2">
         <span className="w-4 h-4 bg-red-pure animate-pulse" />
         <p className="font-sans font-light text-xs text-white max-w-[200px] uppercase tracking-widest opacity-60">
           Scroll to decompose<br/>the reality
         </p>
      </div>
    </section>
  );
};
