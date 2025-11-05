import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0f] dark:text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ContactFooter />
      </main>
    </div>
  );
}
