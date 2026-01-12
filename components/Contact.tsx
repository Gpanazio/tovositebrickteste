import React from 'react';

export const Contact: React.FC = () => {
  return (
    <footer className="w-full bg-black-pure py-20 px-6 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        
        {/* Large CTA */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-between min-h-[400px]">
           <div>
             <h2 className="font-sans font-black text-[10vw] leading-[0.8] tracking-tightest text-white uppercase mix-blend-exclusion">
               START
             </h2>
             <h2 className="font-sans font-black text-[10vw] leading-[0.8] tracking-tightest text-transparent text-stroke stroke-white uppercase hover:text-red-pure transition-colors duration-500 cursor-pointer">
               PROJECT
             </h2>
           </div>
           
           <div className="mt-12">
             <a href="mailto:hello@monolith.com" className="font-sans font-light text-xl text-white hover:text-red-pure transition-colors">hello@monolith.com</a>
           </div>
        </div>

        {/* Info Columns */}
        <div className="col-span-1 md:col-span-2 pt-4">
           <h4 className="font-sans font-bold text-white mb-4 uppercase text-xs tracking-widest">Socials</h4>
           <ul className="space-y-2">
             {['Instagram', 'Vimeo', 'LinkedIn', 'Twitter'].map(link => (
               <li key={link}>
                 <a href="#" className="font-sans font-light text-sm text-neutral-500 hover:text-red-pure uppercase transition-colors">
                   {link}
                 </a>
               </li>
             ))}
           </ul>
        </div>

        <div className="col-span-1 md:col-span-2 pt-4">
           <h4 className="font-sans font-bold text-white mb-4 uppercase text-xs tracking-widest">Office</h4>
           <address className="font-sans font-light text-sm text-neutral-500 not-italic">
             142 Wooster St<br/>
             New York, NY 10012<br/>
             <br/>
             +1 (212) 555-0199
           </address>
        </div>

      </div>
      
      <div className="w-full mt-20 pt-8 border-t border-neutral-900 flex justify-between items-end">
        <span className="font-sans font-black text-[15vw] leading-none text-neutral-900 select-none -mb-10 block">M</span>
        <span className="font-sans font-light text-[10px] text-neutral-600 uppercase tracking-widest pb-2">© 2024 Monolith Systems Inc.</span>
      </div>
    </footer>
  );
};
