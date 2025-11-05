import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-black/70 dark:via-black/30 dark:to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for new projects Q4 · UI/UX • Product • Motion
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Playful, modern interfaces that feel alive.
          </h1>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
            I design and build premium product experiences for startups and scaleups — blending systems thinking with interaction and motion to ship delightful, conversion-focused UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 text-sm font-medium shadow hover:shadow-md transition-shadow">See Selected Work</a>
            <a href="#services" className="rounded-full bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/15 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white backdrop-blur hover:bg-white/90 dark:hover:bg-white/10 transition-colors">What I Do</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">50+</div>
              <div>Projects shipped</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">10yrs</div>
              <div>Design experience</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">98%</div>
              <div>Client satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
