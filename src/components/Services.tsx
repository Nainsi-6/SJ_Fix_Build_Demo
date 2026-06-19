import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-warm-ivory dark:bg-dark-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Block Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-20 space-y-4 lg:space-y-0">
          <div className="space-y-2 sm:space-y-4 max-w-2xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
              Our Expertise
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-[1.15] sm:leading-[1.12]">
              Handcrafted Architectural Remodeling Solutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            Every custom wood block, premium stone slab, and precise joint is crafted to <span className="hidden sm:inline">form an integrated statement of luxury living.</span>
          </p>
        </div>

        {/* Asymmetrical Custom Image-Based Services Blocks Grid */}
        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Large Visual Section Column */}
                <div
                  className={`relative overflow-hidden group cursor-pointer shadow-xl border border-warm-border/30 dark:border-zinc-800 lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-6'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="overflow-hidden aspect-16/10 sm:aspect-16/9 w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Subtle luxurious translucent color gradient */}
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/0 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Absolute subtle pointer arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Narrative Text Column */}
                <div
                  className={`space-y-6 lg:col-span-5 ${
                    isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:col-start-1 lg:col-span-5'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-terracotta dark:text-dark-accent">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl text-gray-950 dark:text-white font-medium hover:text-terracotta dark:hover:text-dark-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-zinc-300">
                    {service.description}
                  </p>

                  {/* Highlights list snippet */}
                  <ul className="space-y-2 pt-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-500 dark:text-zinc-400">
                        <Check className="w-4 h-4 text-terracotta dark:text-dark-accent mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase hover:text-terracotta dark:hover:text-dark-accent border-b border-gray-900/10 dark:border-white/10 hover:border-terracotta transition-all duration-300 pt-2 cursor-pointer text-gray-900 dark:text-white"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Absolute Detailed Service Specs Modal Dialogue / Lightbox */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                className="bg-warm-ivory dark:bg-zinc-900 border border-warm-border dark:border-zinc-800 max-w-2xl w-full text-left relative shadow-2xl p-6 sm:p-10 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  aria-label="Close details"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta dark:text-dark-accent">
                      {selectedService.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-gray-950 dark:text-white font-medium">
                      {selectedService.title}
                    </h3>
                  </div>

                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full aspect-16/9 object-cover border border-warm-border dark:border-zinc-800"
                    referrerPolicy="no-referrer"
                  />

                  <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-zinc-300">
                    <p>{selectedService.fullDetails}</p>
                    
                    <div className="space-y-3 pt-2">
                      <h4 className="font-serif text-lg font-bold text-gray-950 dark:text-white">Included Project Work Scope:</h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {selectedService.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start text-xs text-gray-600 dark:text-zinc-400">
                            <div className="mr-2.5 mt-1 w-3.5 h-3.5 flex items-center justify-center rounded-none bg-terracotta/10 text-terracotta dark:text-dark-accent">
                              <Check className="w-3 h-3" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const form = document.getElementById('estimate');
                        if (form) form.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-terracotta dark:bg-dark-accent text-white uppercase tracking-widest text-[10px] hover:bg-terracotta-hover dark:hover:bg-amber-600 font-semibold cursor-pointer"
                    >
                      Inquire About This Service
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
