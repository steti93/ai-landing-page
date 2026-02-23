import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      gsap.fromTo('.feature-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 px-4 md:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-sans font-bold text-slate text-4xl tracking-tight mb-4">Functional Artifacts</h2>
          <p className="font-mono text-slate/70 max-w-lg">Engineered for seamless transit, unwavering security, and absolute privacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Diagnostic Shuffler (Easy Sharing) */}
          <ShufflerCard />

          {/* Card 2: Telemetry Typewriter (Data Transit) */}
          <TypewriterCard />

          {/* Card 3: Cursor Protocol Scheduler (Privacy) */}
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}

// --- Card 1: Diagnostic Shuffler --- //
function ShufflerCard() {
  const [items, setItems] = useState(['Select Target', 'Generate Link', 'Share Access']);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card bg-ivory border border-slate/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px] relative overflow-hidden group">
      <div className="mb-auto z-10">
        <h3 className="font-sans font-bold text-obsidian text-xl mb-2">Frictionless Sharing</h3>
        <p className="font-sans text-sm text-slate/80">Upload and share with anyone in two clicks.</p>
      </div>

      <div ref={containerRef} className="relative h-40 w-full mt-8 flex flex-col items-center justify-center">
        {items.map((item, i) => {
          const isTop = i === 0;
          return (
            <div
              key={item}
              className="absolute w-3/4 bg-white border border-slate/10 shadow-sm rounded-xl p-4 flex items-center justify-between transition-all duration-700 font-mono text-xs text-slate"
              style={{
                top: `${i * 12}px`,
                scale: 1 - i * 0.05,
                opacity: 1 - i * 0.2,
                zIndex: 10 - i,
                backgroundColor: isTop ? '#C9A84C' : '#ffffff',
                color: isTop ? '#0D0D12' : 'inherit',
                borderColor: isTop ? 'transparent' : 'inherit',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <span>{item}</span>
              <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Card 2: Telemetry Typewriter --- //
function TypewriterCard() {
  const text = "Secure sharing of files on transit and at rest... AES-256 Encrypted... Connection Established.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + Math.random() * 50); // Variable typing speed
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(reset);
    }
  }, [currentIndex, text]);

  return (
    <div className="feature-card bg-obsidian text-ivory rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px] relative overflow-hidden">
      <div className="mb-auto z-10 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-ivory text-xl mb-2">Transit Security</h3>
          <p className="font-sans text-sm text-ivory/70">Encrypted at rest and in transit.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate px-3 py-1 rounded-full border border-slate/50">
          <div className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse-dot"></div>
          <span className="font-mono text-[10px] text-champagne tracking-wider uppercase">Live Feed</span>
        </div>
      </div>

      <div className="mt-8 bg-slate rounded-xl p-6 font-mono text-xs text-ivory/80 leading-relaxed h-40 overflow-hidden relative border border-slate/50">
        <div className="text-champagne/50 mb-2">{'>'} sys.log_stream</div>
        <p className="inline">
          {displayedText}
          <span className="inline-block w-2.5 h-[1.1em] bg-champagne ml-1 align-middle animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}

// --- Card 3: Cursor Protocol Scheduler --- //
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const svgRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });
      
      // Cursor sequence
      tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, { x: 80, y: 50, duration: 1 })
        // Click action
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .to('.highlight-target', { backgroundColor: '#C9A84C', color: '#0D0D12', duration: 0.2 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        // Move to save
        .to(cursorRef.current, { x: 180, y: 120, duration: 0.8, delay: 0.2 })
        // Click save
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .to('.save-btn', { backgroundColor: '#0D0D12', color: '#FAF8F5', duration: 0.2 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
        // Reset states
        .to('.highlight-target', { backgroundColor: 'transparent', color: 'inherit', duration: 0 }, ">")
        .to('.save-btn', { backgroundColor: '#FAF8F5', color: '#0D0D12', duration: 0 }, "<");
        
    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="feature-card bg-ivory border border-slate/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px] relative overflow-hidden">
      <div className="mb-auto z-10">
        <h3 className="font-sans font-bold text-obsidian text-xl mb-2">Absolute Privacy</h3>
        <p className="font-sans text-sm text-slate/80">Handled at the top level.</p>
      </div>

      <div ref={svgRef} className="relative h-48 w-full mt-4 flex flex-col items-center justify-center p-4">
        
        {/* Grid Area */}
        <div className="w-full flex justify-between px-2 mb-6">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-medium border border-slate/10 transition-colors
                ${i === 2 ? 'highlight-target' : 'text-slate'}`}
            >
              {d}
            </div>
          ))}
        </div>
        
        {/* UI Button Area */}
        <div className="w-full flex justify-end px-2">
          <div className="save-btn font-mono text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-slate text-obsidian bg-ivory transition-colors">
            CONFIRM PRIVACY
          </div>
        </div>

        {/* The Cursor */}
        <div ref={cursorRef} className="absolute left-4 top-0 z-20 pointer-events-none drop-shadow-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L9.5 21L13 14L20 10.5L4 4Z" fill="#2A2A35" stroke="#FAF8F5" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
