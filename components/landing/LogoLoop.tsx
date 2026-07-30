
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
    <section className="py-12 border-y border-white/5 bg-app overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center text-sm text-zinc-500 font-medium tracking-widest uppercase">
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
              <span className="text-xl md:text-2xl font-display font-bold text-zinc-400/30 hover:text-zinc-200 transition-colors cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
