import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Morphing logic based on scroll
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'scrolled',
          targets: navRef.current
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full mix-blend-normal">
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-8 py-4 w-full max-w-5xl rounded-[3rem] transition-all duration-500 will-change-[background-color,backdrop-filter,text-color] text-ivory/90 [&.scrolled]:bg-ivory/60 [&.scrolled]:backdrop-blur-xl [&.scrolled]:border [&.scrolled]:border-slate/10 [&.scrolled]:text-obsidian [&.scrolled]:shadow-lg"
      >
        <div className="font-sans font-bold text-xl tracking-tight">s4v3.net</div>
        
        <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest font-medium">
          <a href="#features" className="hover:-translate-y-[1px] transition-transform duration-300">TECHNOLOGY</a>
          <a href="#protocol" className="hover:-translate-y-[1px] transition-transform duration-300">PROTOCOL</a>
          <a href="#pricing" className="hover:-translate-y-[1px] transition-transform duration-300">ACCESS</a>
        </div>

        <button className="btn-magnetic px-6 py-2 rounded-full font-mono text-sm tracking-widest font-semibold bg-champagne text-obsidian shadow-sm relative overflow-hidden group">
          <span className="relative z-10 w-full flex items-center gap-2">UPLOAD <span className="opacity-70 group-hover:opacity-100 transition-opacity">→</span></span>
          <div className="absolute inset-0 bg-ivory/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        </button>
      </nav>
    </div>
  );
}
