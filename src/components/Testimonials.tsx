import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-warm-beige dark:bg-zinc-900/35 border-y border-warm-border/50 dark:border-zinc-800/80 overflow-hidden text-left">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Title area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 space-y-4 lg:space-y-0">
          <div className="space-y-2 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
              Client Voice
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
              What Our Neighbors Say About Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            Pristine spaces, responsive updates, and master woodwork. <span className="hidden sm:inline">This represents real feedback submitted by our valued clients.</span>
          </p>
        </div>

        {/* Testimonial Active Display Card Frame */}
        <div className="relative min-h-[280px] sm:min-h-[350px] flex items-center justify-center">
          
          <div className="w-full max-w-5xl bg-white dark:bg-zinc-900 border border-warm-border/80 dark:border-zinc-800/80 p-5 sm:p-12 md:p-16 relative shadow-md">
            
            {/* Elegant massive Quote watermark icon */}
            <Quote className="absolute top-4 right-4 w-10 h-10 sm:w-20 sm:h-20 text-warm-beige dark:text-zinc-800/20 z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 sm:space-y-8 relative z-10"
              >
                {/* Visual rating cluster */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 h-5 fill-terracotta dark:fill-dark-accent text-terracotta dark:text-dark-accent" />
                  ))}
                </div>

                {/* Main review message */}
                <blockquote className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-950 dark:text-white leading-relaxed italic font-light">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author attribution metadata block */}
                <div className="flex items-center space-x-4 pt-4 border-t border-warm-border dark:border-zinc-800">
                  {current.image && (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-warm-border dark:border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <cite className="not-italic font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {current.name}
                    </cite>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-[11px] sm:text-xs text-neutral-400 dark:text-neutral-500 font-medium mt-0.5">
                      <span>{current.location}</span>
                      <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-zinc-700" />
                      <span className="text-terracotta dark:text-dark-accent font-semibold mt-0.5 sm:mt-0">{current.projectType}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls navigation deck */}
            <div className="flex justify-end items-center space-x-3 mt-6 sm:absolute sm:bottom-12 sm:right-12 z-20">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-none border border-warm-border dark:border-zinc-800 hover:border-gray-900 dark:hover:border-zinc-300 bg-white/80 dark:bg-zinc-900/85 text-gray-800 dark:text-gray-200 transition-all duration-300 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-none border border-warm-border dark:border-zinc-800 hover:border-gray-900 dark:hover:border-zinc-300 bg-white/80 dark:bg-zinc-900/85 text-gray-800 dark:text-gray-200 transition-all duration-300 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
