import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Staggered text reveal animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.reveal-text', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, delay: 0.2 }
      )
      .fromTo('.reveal-btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] flex items-end pb-24 px-8 overflow-hidden bg-obsidian">
      {/* Background Image: Luxury dark aesthetics & marble textures */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618219985224-811c7fd1d7ba?q=80&w=2072&auto=format&fit=crop")' }}
      ></div>
      
      {/* Primary-to-black gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

      {/* Content wrapper */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start gap-8">
        
        <h1 className="flex flex-col gap-2">
          {/* Preset Hero Line Pattern: "[Aspirational noun] meets / [Precision word]." */}
          <span className="reveal-text font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-ivory/90 tracking-tight overflow-hidden">
            <span className="inline-block">Absolute privacy meets</span>
          </span>
          <span className="reveal-text font-drama italic text-7xl md:text-8xl lg:text-[9rem] text-champagne leading-[0.9] overflow-hidden">
            <span className="inline-block relative">Flawless transit.</span>
          </span>
        </h1>
        
        <p className="reveal-text max-w-xl font-mono text-sm md:text-base text-ivory/70 leading-relaxed tracking-wide overflow-hidden">
          <span className="inline-block">Make the sharing of any files easier than ever.<br/>Secure sharing on transit and at rest.<br/>Your privacy, handled at the top level.</span>
        </p>

        <div className="reveal-btn pt-4">
          <button className="btn-magnetic px-8 py-4 rounded-full font-mono text-sm tracking-widest font-semibold bg-champagne text-obsidian shadow-[0_0_40px_-10px_rgba(201,168,76,0.3)] relative overflow-hidden group">
            <span className="relative z-10 w-full flex items-center justify-center gap-3">
              UPLOAD FILES 
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-ivory/30 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
