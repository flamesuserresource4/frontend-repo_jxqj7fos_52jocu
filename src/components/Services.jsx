import { PenTool, Smartphone, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Product & UI Design',
    desc: 'From research to hi-fi design systems. Flows, wireframes, and pixel-perfect interfaces that scale.'
  },
  {
    icon: Smartphone,
    title: 'Interaction & Motion',
    desc: 'Micro-interactions, transitions, and prototyping to bring concepts to life and boost usability.'
  },
  {
    icon: Rocket,
    title: 'Design to Dev Handoff',
    desc: 'Accessible, responsive, and developer-friendly components with clean specs and tokens.'
  },
  {
    icon: Sparkles,
    title: 'Brand & Visual Systems',
    desc: 'Logo, color, and typography systems that create a cohesive, memorable product presence.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Capabilities</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">A flexible, end-to-end partner for design-led product teams.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
