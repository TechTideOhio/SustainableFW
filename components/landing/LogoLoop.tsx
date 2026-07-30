
export function LogoLoop() {
  const logos = [
    'Patagonia',
    'Unilever',
    'BASF',
    'Salesforce',
    'Shell Renewables',
    'Verra',
    'Gold Standard',
    'South Pole',
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-app overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center text-sm text-zinc-500 font-medium">
        TRUSTED BY LEADING ESG AND SUSTAINABILITY TEAMS
      </div>
      <div className="relative flex overflow-hidden">
        {/* We need two groups to animate them seamlessly */}
        <div className="flex animate-marquee whitespace-nowrap motion-reduce:animate-none">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 min-w-[150px]"
            >
              <span className="text-xl md:text-2xl font-display font-bold text-zinc-400/50 hover:text-zinc-300 transition-colors cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap absolute top-0 motion-reduce:animate-none" aria-hidden="true" style={{ left: '100%' }}>
           {[...logos, ...logos].map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center mx-8 min-w-[150px]"
            >
              <span className="text-xl md:text-2xl font-display font-bold text-zinc-400/50 hover:text-zinc-300 transition-colors cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
