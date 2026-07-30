
export function LogoLoop() {
  const logos = [
    'React',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Python',
    'Linux',
    'Docker',
    'Next.js',
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center text-sm text-muted-foreground font-medium tracking-widest uppercase">
        Built With Open Source Technologies
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 min-w-[150px]"
            >
              <span className="text-xl md:text-2xl font-display font-bold text-slate-300 dark:text-slate-600 hover:text-foreground transition-colors duration-200 cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
