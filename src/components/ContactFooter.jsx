export default function ContactFooter() {
  return (
    <footer id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Let’s build something delightful</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Share a few details about your product and I’ll get back within 24 hours with next steps and a call slot.</p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div><span className="font-semibold text-gray-900 dark:text-white">Email:</span> hello@toplevel.design</div>
                <div><span className="font-semibold text-gray-900 dark:text-white">Timezone:</span> GMT — available worldwide</div>
              </div>
            </div>
            <div className="p-8 sm:p-12 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10">
              <form className="grid grid-cols-1 gap-4">
                <input className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
                <input type="email" className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Email address" />
                <textarea rows={4} className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tell me about your project" />
                <button type="button" className="inline-flex justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">Request proposal</button>
                <p className="text-xs text-gray-500 dark:text-gray-400">By clicking, you agree to be contacted about your project. No spam.</p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} TopLevel Studio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-gray-700 dark:hover:text-gray-300">Services</a>
            <a href="#work" className="hover:text-gray-700 dark:hover:text-gray-300">Work</a>
            <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
