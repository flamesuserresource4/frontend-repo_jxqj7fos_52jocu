const projects = [
  {
    title: 'Fintech Onboarding',
    tag: 'SaaS · Web',
    color: 'from-indigo-500 to-sky-500'
  },
  {
    title: 'Wellness Mobile App',
    tag: 'iOS · Android',
    color: 'from-emerald-500 to-lime-500'
  },
  {
    title: '3D Landing Experience',
    tag: 'Web · Marketing',
    color: 'from-fuchsia-500 to-rose-500'
  },
  {
    title: 'Analytics Dashboard',
    tag: 'B2B · Web',
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Selected Work</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">A snapshot of recent projects across product and marketing.</p>
          </div>
          <a href="#contact" className="rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur px-5 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-white/10 transition-colors">Get the full case study deck</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((p, idx) => (
            <article key={p.title} className={`lg:col-span-${idx % 3 === 0 ? '7' : idx % 3 === 1 ? '5' : '6'} col-span-1`}>
              <div className={`group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-tr ${p.color} p-1`}> 
                <div className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.25),transparent_50%)]" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-semibold text-white drop-shadow-sm">{p.title}</h3>
                    <p className="text-sm text-white/90">{p.tag}</p>
                  </div>
                  <span className="rounded-full bg-white/20 text-white text-xs px-3 py-1">Case Study</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
