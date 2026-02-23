import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Initialize Transfer",
      desc: "Select files. Local encryption begins immediately before any network handshake."
    },
    {
      id: "02",
      title: "Establish Transit",
      desc: "Data is fragmented and routed through secure, untraceable tunnels."
    },
    {
      id: "03",
      title: "Confirm Receipt",
      desc: "Target receives the package. The origin ledger is wiped clean."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        // Sticky stacking logic
        ScrollTrigger.create({
          trigger: card,
          start: "top 15%",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        // Dimming effect as the next card covers it
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 60%",
              end: "top 15%",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" className="bg-ivory py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-24 text-center">
        <h2 className="font-sans font-bold text-slate text-4xl tracking-tight mb-4">The Protocol</h2>
        <p className="font-mono text-slate/70">A sequence defined by its inevitably secure outcome.</p>
      </div>

      {/* The Container needs enough padding at the bottom so the last pinned element can scroll away naturally */}
      <div ref={containerRef} className="relative pb-[50vh]">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="protocol-card w-full max-w-4xl mx-auto h-[60vh] md:h-[70vh] rounded-[3rem] bg-obsidian text-ivory p-8 md:p-16 flex flex-col justify-between border border-slate/20 shadow-xl mb-[5vh]"
          >
            <div className="flex justify-between items-start w-full">
              <span className="font-mono text-4xl md:text-6xl font-medium text-champagne/50">{step.id}</span>
              <div className="bg-slate px-4 py-1.5 rounded-full border border-slate/50">
                <span className="font-mono text-xs text-ivory tracking-widest uppercase">Phase {index + 1} // Active</span>
              </div>
            </div>

            <div className="max-w-xl">
              <h3 className="font-sans font-bold text-3xl md:text-5xl text-ivory mb-6">{step.title}</h3>
              <p className="font-sans text-lg md:text-xl text-ivory/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
            
            {/* Visual Indicator Background (Just a subtle geometric overlay) */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 overflow-hidden pointer-events-none opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="100" x2="100" y2="0" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="80" x2="100" y2="-20" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="120" x2="100" y2="20" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 4" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
