import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Facebook } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-warm-ivory/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-warm-border/60 dark:border-zinc-800/60 py-4 shadow-sm'
          : 'bg-warm-ivory/30 dark:bg-dark-bg/40 backdrop-blur-xs py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          id="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-start group focus:outline-hidden text-left"
        >
          <span className="font-serif text-xl lg:text-2xl font-bold tracking-widest text-gray-900 dark:text-white transition-colors duration-300">
            SJ<span className="text-terracotta dark:text-dark-accent">.</span> FIX &amp; BUILD
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500 dark:text-zinc-400 font-sans group-hover:text-terracotta dark:group-hover:text-dark-accent transition-colors duration-300">
            Saint John, New Brunswick
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-sans">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-gray-700 hover:text-terracotta dark:text-zinc-300 dark:hover:text-dark-accent transition-colors duration-300 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-gray-700 hover:text-terracotta dark:text-zinc-300 dark:hover:text-dark-accent transition-colors duration-300 cursor-pointer"
          >
            Our Work
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-sm font-medium text-gray-700 hover:text-terracotta dark:text-zinc-300 dark:hover:text-dark-accent transition-colors duration-300 cursor-pointer"
          >
            The Process
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-gray-700 hover:text-terracotta dark:text-zinc-300 dark:hover:text-dark-accent transition-colors duration-300 cursor-pointer"
          >
            About Us
          </button>
          <a
            href="https://www.facebook.com/profile.php?id=61588880953890&mibextid=wwXIfr&rdid=wqNOaxOUiBVuZRPW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ZK4oR54B%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-terracotta dark:text-zinc-400 dark:hover:text-dark-accent p-1 transition-colors duration-300"
            title="SJP & Build Facebook Page"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <button
            id="navbar-cta-btn"
            onClick={() => scrollToSection('estimate')}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-none bg-terracotta dark:bg-dark-accent text-white hover:bg-terracotta-hover dark:hover:bg-amber-600 transition-all duration-300 shadow-sm focus:outline-hidden"
          >
            Get Free Estimate
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden space-x-3">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-zinc-300 hover:text-terracotta dark:hover:text-dark-accent focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-warm-ivory dark:bg-dark-bg border-b border-warm-border dark:border-zinc-800 transition-all duration-300 z-40 shadow-lg px-6 py-8 flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection('services')}
            className="text-base font-semibold text-gray-800 dark:text-zinc-200 text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-base font-semibold text-gray-800 dark:text-zinc-200 text-left"
          >
            Our Work
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-base font-semibold text-gray-800 dark:text-zinc-200 text-left"
          >
            The Process
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-base font-semibold text-gray-800 dark:text-zinc-200 text-left"
          >
            About Us
          </button>
          
          <div className="h-[1px] bg-warm-border dark:bg-zinc-800 my-4" />

          <a
            href="https://www.facebook.com/profile.php?id=61588880953890&mibextid=wwXIfr&rdid=wqNOaxOUiBVuZRPW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ZK4oR54B%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-zinc-300 hover:text-terracotta"
          >
            <Facebook className="w-5 h-5 text-terracotta dark:text-dark-accent" />
            <span className="text-sm">Follow our Facebook</span>
          </a>

          <button
            id="mobile-drawer-cta"
            onClick={() => scrollToSection('estimate')}
            className="w-full text-center py-3 bg-terracotta text-white font-semibold uppercase tracking-wider text-xs"
          >
            Get Free Estimate
          </button>
        </div>
      )}
    </nav>
  );
}
