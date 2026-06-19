import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-warm-ivory dark:bg-dark-bg pt-36 pb-12 sm:pt-36 sm:pb-16 lg:pt-24 lg:pb-0"
    >
      {/* Editorial Grid Backing */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-15 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-12 grid grid-cols-4 gap-4 lg:gap-8">
          <div className="border-l border-warm-border h-full" />
          <div className="border-l border-warm-border h-full" />
          <div className="border-l border-warm-border h-full" />
          <div className="border-l border-warm-border h-full border-r" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">
        
        {/* Left Side: Elegant typography */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 lg:space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-warm-beige dark:bg-zinc-800 border border-warm-border/80 dark:border-zinc-700/60 rounded-full"
          >
            <Compass className="w-4 h-4 text-terracotta dark:text-dark-accent" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-800 dark:text-zinc-200">
              Licensed & Insured Residential Contractor
            </span>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-[1.15] sm:leading-[1.1] tracking-tight"
            >
              Transforming <br />
              <span className="italic block font-light text-terracotta dark:text-dark-accent mt-0.5 sm:mt-1">
                Houses Into Dream Homes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-sans text-xs sm:text-base lg:text-lg text-gray-600 dark:text-zinc-300 max-w-xl leading-relaxed"
            >
              Premium residential renovations across your region. <span className="hidden sm:inline">Done with premium materials, absolute budget transparency, and professional master woodcraft.</span>
            </motion.p>
          </div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('estimate')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-terracotta dark:bg-dark-accent text-white font-medium uppercase tracking-widest text-[10px] sm:text-xs hover:bg-terracotta-hover dark:hover:bg-amber-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border border-warm-border dark:border-zinc-700 hover:border-gray-900 dark:hover:border-zinc-400 bg-white/40 dark:bg-zinc-900/30 text-gray-900 dark:text-white font-medium uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-300 cursor-pointer"
            >
              View Our Projects
            </button>
          </motion.div>

          {/* High-end attributes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-4 sm:pt-6 border-t border-warm-border dark:border-zinc-800 w-full grid grid-cols-3 gap-2 sm:gap-4"
          >
            <div>
              <span className="block font-serif text-base sm:text-2xl lg:text-3xl font-semibold text-gray-950 dark:text-white">100%</span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-gray-500 dark:text-zinc-400">Satisfaction</span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-2xl lg:text-3xl font-semibold text-gray-950 dark:text-white">18+ Yrs</span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-gray-500 dark:text-zinc-400">Experience</span>
            </div>
            <div>
              <span className="block font-serif text-base sm:text-2xl lg:text-3xl font-semibold text-gray-950 dark:text-white truncate">Local Team</span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-gray-500 dark:text-zinc-400 font-sans">Active Experts</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Showcase Luxury Visual Frame */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-square overflow-hidden group shadow-2xl border-4 border-white dark:border-zinc-800"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200"
              alt="Premium kitchen transformation and wood design"
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant transparent card layout overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 text-white p-6 flex flex-col justify-between pointer-events-none">
              <div className="self-end bg-black/40 backdrop-blur-md px-3 py-1 border border-white/20 text-[9px] tracking-widest uppercase">
                Featured Remodel
              </div>
              <div>
                <span className="text-xs tracking-wider uppercase opacity-85">Scenic waterfront view</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1">The Mid-Century Culinary Oasis</h4>
              </div>
            </div>
          </motion.div>

          {/* Absolute floating luxury design badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-3 bg-white dark:bg-zinc-900 border border-warm-border dark:border-zinc-800 p-4 shadow-xl z-20"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-warm-beige dark:bg-zinc-800 text-terracotta dark:text-dark-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Premium Materials Only</p>
              <p className="text-[10px] text-gray-500 dark:text-zinc-400">White Oak, Marble & Premium Steel</p>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-terracotta/20 dark:border-dark-accent/20 z-0 pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
