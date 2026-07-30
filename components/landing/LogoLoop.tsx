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
    <section className="py-12 border-y border-sage-mist/20 bg-black-olive overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center text-sage-mist uppercase tracking-[0.06em] text-xs font-medium">
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
              <span className="text-sage-mist/40 hover:text-warm-cream text-xl font-medium tracking-[0.04em] uppercase transition-colors duration-200 cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
