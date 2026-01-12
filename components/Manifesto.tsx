import React, { useEffect, useState } from 'react';
import { generateManifesto } from '../services/geminiService';
import { ManifestoContent } from '../types';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const [content, setContent] = useState<ManifestoContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await generateManifesto();
      setContent(data);
    };
    fetchContent();
  }, []);

  return (
    <section className="w-full min-h-screen bg-black-pure flex items-center justify-center relative py-20 px-6 border-t border-white/10">
      {/* Decorative Grid */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
         <div className="col-span-1 border-r border-white/5 h-full hidden md:block" />
         <div className="col-span-10" />
         <div className="col-span-1 border-l border-white/5 h-full hidden md:block" />
      </div>

      <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* The Monolith (Video Placeholder) */}
        <div className="w-full aspect-monolith relative overflow-hidden bg-neutral-900 border border-white/10 group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-24 bg-red-pure group-hover:h-full transition-all duration-500 ease-in-out" />
                <div className="h-1 w-24 bg-red-pure absolute group-hover:w-full transition-all duration-500 ease-in-out" />
             </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
           <span className="font-sans text-red-pure text-xs tracking-widest mb-8 block uppercase">
              // The Philosophy
           </span>
           
           {content ? (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tightest text-white leading-[0.9] mb-8 uppercase">
                  {content.headline}
                </h2>
                <p className="font-sans font-light text-lg md:text-xl text-neutral-400 leading-relaxed max-w-md border-l border-red-pure pl-6">
                  {content.body}
                </p>
             </motion.div>
           ) : (
             <div className="animate-pulse space-y-4">
               <div className="h-20 bg-neutral-900 w-full" />
               <div className="h-20 bg-neutral-900 w-2/3" />
               <div className="h-40 bg-neutral-900 w-full mt-8" />
             </div>
           )}
        </div>
      </div>
    </section>
  );
};
