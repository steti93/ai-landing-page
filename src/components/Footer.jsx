export default function Footer() {
  return (
    <footer className="bg-obsidian pt-24 pb-12 px-8 rounded-t-[4rem] border-t border-slate/20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand & Purpose */}
          <div className="max-w-sm">
            <h2 className="font-sans font-bold text-ivory text-3xl tracking-tight mb-4">s4v3.net</h2>
            <p className="font-mono text-ivory/60 text-sm leading-relaxed">
              Secure sharing of files on transit and at rest. Your files' privacy is handled on top level.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 font-mono text-sm tracking-widest">
            <div className="flex flex-col gap-4">
              <h4 className="text-ivory font-bold mb-2">PLATFORM</h4>
              <a href="#" className="text-ivory/60 hover:text-champagne transition-colors">Technology</a>
              <a href="#" className="text-ivory/60 hover:text-champagne transition-colors">Protocol</a>
              <a href="#" className="text-ivory/60 hover:text-champagne transition-colors">Access</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-ivory font-bold mb-2">LEGAL</h4>
              <a href="#" className="text-ivory/60 hover:text-champagne transition-colors">Privacy</a>
              <a href="#" className="text-ivory/60 hover:text-champagne transition-colors">Terms</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate/30"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} s4v3.net. All rights reserved.
          </p>

          {/* System Status Indicator */}
          <div className="flex items-center gap-3 bg-slate/40 px-4 py-2 rounded-full border border-slate/30">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="font-mono text-[10px] text-ivory/80 tracking-widest uppercase">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
