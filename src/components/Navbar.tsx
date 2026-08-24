import { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPhase, setScrollPhase] = useState<'top' | 'translucent' | 'solid'>('top');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight;
      
      if (y <= 40) {
        setScrollPhase('top');
      } else if (y < heroHeight - 80) { // Transition to solid just before leaving the hero
        setScrollPhase('translucent');
      } else {
        setScrollPhase('solid');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 w-full px-4 sm:px-8 z-50 transition-all duration-300">
        <div 
          className={`rounded-full p-2 flex items-center justify-between shadow-2xl transition-all duration-300 ${
            scrollPhase === 'top'
              ? 'bg-transparent ring-0'
              : scrollPhase === 'translucent'
              ? 'bg-black/20 backdrop-blur-md ring-1 ring-white/20'
              : 'bg-black ring-1 ring-white/10'
          }`}
        >
          
          <div className="flex items-center gap-2 sm:gap-6">
          {/* Logo Circle (Left) */}
          <a 
            href="#" 
            className="w-12 h-12 bg-paper rounded-full flex items-center justify-center text-ink hover:scale-105 transition-transform shrink-0"
            aria-label="Home"
          >
            <Orbit size={24} strokeWidth={2.5} />
          </a>

            <nav className="hidden md:flex items-center gap-8 px-2">
              <a href="#" className="text-sm font-bold text-white hover:text-white/80 transition-colors">Discover</a>
              <a href="#" className="text-sm font-bold text-white hover:text-white/80 transition-colors">Designers</a>
              <a href="#" className="text-sm font-bold text-white hover:text-white/80 transition-colors">Projects</a>
              <a href="#" className="text-sm font-bold text-white hover:text-white/80 transition-colors">How it Works</a>
            </nav>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <div className="text-sm font-bold text-white bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center">
              <a href="#" className="hover:text-paper transition-colors">For Manufacturers</a>
              <span className="mx-3 text-white/30">·</span>
              <a href="#" className="hover:text-paper transition-colors">For Designers</a>
            </div>
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center bg-paper text-ink text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-paper/90 transition-all active:scale-95 shadow-[0_0_15px_rgba(211,184,158,0.2)]"
            >
              Join the Room
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pr-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-paper p-2 -mr-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-[#1c1c1c] rounded-3xl p-6 flex flex-col space-y-4 shadow-2xl z-50 ring-1 ring-white/10">
          <a href="#" className="text-lg font-medium text-paper/90">Discover</a>
          <a href="#" className="text-lg font-medium text-paper/90">Designers</a>
          <a href="#" className="text-lg font-medium text-paper/90">Projects</a>
          <a href="#" className="text-lg font-medium text-paper/90">How it Works</a>
          <hr className="border-white/10 my-2" />
          <a href="#" className="text-lg font-medium text-ink bg-paper text-center py-3 rounded-full mt-2">
            Join the Room
          </a>
        </div>
      )}
    </>
  );
}
