import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very simple text reveal (line by line)
      gsap.fromTo('.phil-text',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        }
      );

      // Parallax effect on background image
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80vh] flex items-center justify-center py-32 px-4 md:px-8 bg-obsidian overflow-hidden">
      
      {/* Background Texture with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="parallax-bg absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
      </div>
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,18,0.8)_100%)]"></div>

      <div ref={textRef} className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        <p className="phil-text font-sans text-lg md:text-xl text-ivory/60 tracking-wide max-w-2xl">
          Most platforms focus on: ease at the expense of true security.
        </p>
        
        <h2 className="flex flex-col gap-2">
          <span className="phil-text font-sans font-bold text-2xl md:text-4xl text-ivory tracking-tight">
            We focus on:
          </span>
          <span className="phil-text font-drama italic text-5xl md:text-7xl lg:text-8xl text-champagne leading-tight">
            Cryptographic silence.
          </span>
        </h2>
      </div>
    </section>
  );
}
