import { Facebook, Mail, MapPin, Phone, Clock, ArrowUp, Hammer } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 font-sans text-left relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-white">
              SJ<span className="text-[#D18B5B]">.</span> FIX &amp; BUILD
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold pt-1">
              Home Improvement Experts
            </span>
          </div>

          <p className="text-xs leading-relaxed text-neutral-400">
            A premium residential design-build renovation company specializing in custom millwork, spa-level bathroom remodels, and architectural kitchens. Constructed with timeless visual refinement and lasting durability.
          </p>

          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61588880953890&mibextid=wwXIfr&rdid=wqNOaxOUiBVuZRPW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ZK4oR54B%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:bg-[#D18B5B] hover:text-black transition-colors duration-300"
              aria-label="Connect with us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation map */}
        <div className="md:col-span-2 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">
            EXPLORE
          </span>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button
                onClick={() => scrollToId('services')}
                className="hover:text-white transition-colors duration-200"
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId('projects')}
                className="hover:text-white transition-colors duration-200"
              >
                Renovation Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId('process')}
                className="hover:text-white transition-colors duration-200"
              >
                Our Systemized Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId('about')}
                className="hover:text-white transition-colors duration-200"
              >
                About Our Artisans
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId('estimate')}
                className="hover:text-white transition-colors duration-200"
              >
                Free Estimate Blueprint
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Recent Case studies shortcuts */}
        <div className="md:col-span-3 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">
            PROJECT ARCHIVE
          </span>
          <ul className="space-y-3.5 text-xs">
            {PROJECTS.map((proj) => (
              <li key={proj.id}>
                <button
                  onClick={() => scrollToId('projects')}
                  className="hover:text-white text-left transition-colors duration-200 block space-y-0.5"
                >
                  <span className="font-serif italic font-semibold text-neutral-300 block">
                    {proj.title}
                  </span>
                  <span className="text-[9px] uppercase text-neutral-500 font-mono tracking-wider">
                    {proj.location} • {proj.timeline}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Physical Coordinates */}
        <div className="md:col-span-3 space-y-4 text-xs">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">
            CONTACT INFO
          </span>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2.5 text-[#D18B5B] shrink-0 mt-0.5" />
              <span>
                Main Office &amp; Design Studio,<br />
                Your Selected Location
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2.5 text-[#D18B5B] shrink-0" />
              <span>+1 (800) 555-0192</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2.5 text-[#D18B5B] shrink-0" />
              <span>remodel@premiumrenovations.com</span>
            </li>
            <li className="flex items-start">
              <Clock className="w-4 h-4 mr-2.5 text-[#D18B5B] shrink-0 mt-0.5" />
              <span>
                Mon - Fri: 7:30 AM - 5:30 PM<br />
                Atlantic Standard Time (AST)
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Under deck bottom legal bar */}
      <div className="border-t border-neutral-900 bg-neutral-950/70 text-[11px] text-neutral-600 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Premium Renovations Ltd. All Rights Reserved. Fully Licensed, Bonded &amp; Insured Home Improvement Experts.
          </p>

          <div className="flex items-center space-x-6 text-neutral-500">
            <a
              href="https://www.facebook.com/profile.php?id=61588880953890&mibextid=wwXIfr&rdid=wqNOaxOUiBVuZRPW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ZK4oR54B%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Facebook Connection
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 hover:text-white transition-all duration-200 group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-[#D18B5B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
