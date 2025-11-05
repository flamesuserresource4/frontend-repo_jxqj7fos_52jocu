import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white shadow-md">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">TopLevel Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700 dark:text-gray-200">
          <a href="#work" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Work</a>
          <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">
          <Rocket size={16} />
          Start a Project
        </a>
      </div>
    </header>
  );
}
