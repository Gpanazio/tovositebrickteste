import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'NEON VOID', client: 'NIKE LAB', image: 'https://picsum.photos/seed/1/800/1200', category: 'COMMERCIAL' },
  { id: 2, title: 'STATIC NOISE', client: 'SONY MUSIC', image: 'https://picsum.photos/seed/2/800/1200', category: 'MUSIC VIDEO' },
  { id: 3, title: 'CHROMOPHOBIA', client: 'BALENCIAGA', image: 'https://picsum.photos/seed/3/800/1200', category: 'RUNWAY' },
  { id: 4, title: 'ZERO KELVIN', client: 'TESLA', image: 'https://picsum.photos/seed/4/800/1200', category: 'BRAND FILM' },
  { id: 5, title: 'ECHO CHAMBER', client: 'A24', image: 'https://picsum.photos/seed/5/800/1200', category: 'TRAILER' },
];

export const ProjectList: React.FC = () => {
  return (
    <section className="w-full py-32 bg-black-pure border-t border-white/10">
      <div className="px-6 mb-12 flex items-baseline justify-between">
        <h2 className="font-sans font-black text-6xl tracking-tightest text-white">SELECTED <span className="text-transparent stroke-white text-stroke">WORKS</span></h2>
        <span className="font-sans font-light text-xs tracking-widest text-red-pure">[ 001 - 005 ]</span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto scrollbar-hide pl-6 md:pl-12 pr-6 pb-12">
        <div className="flex gap-4 md:gap-8 w-max">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative w-[70vw] md:w-[25vw] aspect-monolith bg-neutral-900 cursor-pointer overflow-hidden border border-white/5 hover:border-red-pure/50 transition-colors duration-500"
            >
              <img 
                src={`${project.image}?grayscale`} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-sans font-light text-[10px] tracking-widest text-white border border-white/20 px-2 py-1 uppercase backdrop-blur-sm">
                    {project.category}
                  </span>
                  <ArrowRight className="text-white w-6 h-6 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-pure" />
                </div>
                
                <div>
                  <h3 className="font-sans font-black text-3xl tracking-tightest text-white uppercase leading-none mb-1 group-hover:text-red-pure transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans font-light text-xs text-neutral-400 uppercase tracking-wider">
                    // {project.client}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
