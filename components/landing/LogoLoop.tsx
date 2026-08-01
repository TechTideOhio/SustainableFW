export function LogoLoop() {
  const logos = [
    {
      name: 'Sentinel Hub',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      name: 'Planet Labs',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="6" />
          <path d="M4 12a12 12 0 0 1 16 0" />
          <path d="M12 4a12 12 0 0 0 0 16" />
        </svg>
      )
    },
    {
      name: 'Verra',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 11 6a7 7 0 0 1 10 3 7 7 0 0 1-10 11z" />
          <path d="M11 20v4M11 13l4-4" />
        </svg>
      )
    },
    {
      name: 'Gold Standard',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      )
    },
    {
      name: 'AWS',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 17a9 9 0 0 1-18 2 12 12 0 0 0 18-2z" />
          <path d="M5 14l2-4 3 3 6-8" />
        </svg>
      )
    },
    {
      name: 'Mapbox',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12l10 10 10-10-10-10L2 12z" />
          <path d="M12 6l-6 6 6 6 6-6-6-6z" />
          <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      )
    },
    {
      name: 'ESRI',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2v20M8 8l8 8M16 8l-8 8" />
        </svg>
      )
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="13" width="18" height="8" rx="2" ry="2" />
          <path d="M3 17h18" />
          <rect x="7" y="5" width="4" height="4" />
          <rect x="11" y="9" width="4" height="4" />
          <rect x="13" y="5" width="4" height="4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Trusted by Industry Leaders
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 min-w-[200px] group/item"
            >
              <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 group-hover/item:text-foreground transition-colors duration-300 cursor-default">
                <div className="text-current transition-colors duration-300 group-hover/item:text-primary">
                  {logo.icon}
                </div>
                <span className="text-xl md:text-2xl font-display font-bold">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
