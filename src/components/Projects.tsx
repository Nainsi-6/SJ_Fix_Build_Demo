import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Hammer, SwatchBook, HelpCircle, ArrowRightLeft } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Allow dragging slider bar
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onTouchEnd = () => handleMouseUp();
    const onMouseUp = () => handleMouseUp();

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-warm-beige/35 dark:bg-dark-bg/65 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Title Section */}
        <div className="space-y-4 mb-10 sm:mb-16 max-w-2xl text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
            Case Studies
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
            Our Portfolio of Masterful Renovations
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 max-w-xl">
            Drag the comparison bar to inspect our precise restoration transitions, <span className="hidden sm:inline">showcasing actual before &amp; after transformations.</span>
          </p>
        </div>

        {/* Featured Case Study Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 bg-white dark:bg-zinc-900 border border-warm-border/60 dark:border-zinc-800/80 p-6 lg:p-12 shadow-md">
          
          {/* Column Left: Visual Comparison Slider */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B7280] dark:text-zinc-400 block font-bold">
              // INTERACTIVE INSPECTOR
            </span>
            
            {/* Interactive Slider Area */}
            <div
              ref={containerRef}
              className="relative aspect-16/11 sm:aspect-16/10 overflow-hidden border border-warm-border dark:border-zinc-800 select-none cursor-ew-resize bg-neutral-900"
              onMouseDown={(e) => {
                isDragging.current = true;
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                isDragging.current = true;
                handleMove(e.touches[0].clientX);
              }}
            >
              {/* base image: AFTER (Luxury remodel results) */}
              <img
                src={selectedProject.afterImage}
                alt={`${selectedProject.title} After State`}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-[#FFFFFF] font-bold text-[9px] uppercase tracking-widest px-3 py-1 z-10">
                AFTER REMODEL
              </div>

              {/* clipped image: BEFORE (Outdated / raw state) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={selectedProject.beforeImage}
                  alt={`${selectedProject.title} Before State`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-[#C67C4E]/90 backdrop-blur-md text-[#FFFFFF] font-bold text-[9px] uppercase tracking-widest px-3 py-1 z-10">
                  BEFORE STATE
                </div>
              </div>

              {/* Central Separator bar link */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#C67C4E] dark:bg-amber-600 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag handle pill */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FFFFFF] dark:bg-zinc-800 border-2 border-[#C67C4E] dark:border-amber-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <ArrowRightLeft className="w-3.5 h-3.5 text-[#C16D3C] dark:text-amber-500" />
                </div>
              </div>
            </div>
            
            <p className="text-center font-sans text-xs text-neutral-400 dark:text-neutral-500 italic">
              Slide back and forth or click anywhere on the photograph to slide the comparison layer.
            </p>
          </div>

          {/* Column Right: Case Study Specifications */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#C67C4E] dark:text-dark-accent font-sans">
                {selectedProject.type}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-950 dark:text-white font-medium leading-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Quick Specs blocks */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-warm-border dark:border-zinc-800 font-sans">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 dark:text-zinc-500 font-bold block">LOCATION</span>
                <div className="flex items-center text-xs font-bold text-gray-800 dark:text-zinc-200">
                  <MapPin className="w-3.5 h-3.5 text-terracotta dark:text-dark-accent mr-1 shrink-0" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 dark:text-zinc-500 font-bold block">TIMELINE</span>
                <div className="flex items-center text-xs font-bold text-gray-800 dark:text-zinc-200">
                  <Calendar className="w-3.5 h-3.5 text-terracotta dark:text-dark-accent mr-1 shrink-0" />
                  <span>{selectedProject.timeline}</span>
                </div>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 dark:text-zinc-500 font-bold block">ARTISANS</span>
                <div className="flex items-center text-xs font-bold text-gray-800 dark:text-zinc-200">
                  <Hammer className="w-3.5 h-3.5 text-terracotta dark:text-dark-accent mr-1 shrink-0" />
                  <span>SJ Crew</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
              {selectedProject.description}
            </p>

            {/* Project scope list */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center">
                <SwatchBook className="w-4 h-4 mr-2 text-terracotta dark:text-dark-accent" />
                Work Scope Breakdown
              </h4>
              <ul className="space-y-2">
                {selectedProject.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-neutral-400">
                    <span className="font-mono text-terracotta dark:text-dark-accent font-bold mr-2.5">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => {
                  const form = document.getElementById('estimate');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center py-3 border border-[#C67C4E] hover:bg-[#C67C4E] hover:text-white text-[#C16D3C] dark:text-amber-500 dark:border-amber-600/40 dark:hover:bg-amber-600 dark:hover:text-white font-semibold transition-all duration-300 text-xs uppercase tracking-widest"
              >
                Inquire About Similar Build
              </button>
            </div>
          </div>

        </div>

        {/* Gallery Grid Picker Selection (masonry styling) */}
        <div className="space-y-6 text-left">
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Explore Other Work Case Studies
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => {
              const worksCurrent = proj.id === selectedProject.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => {
                    setSelectedProject(proj);
                    setSliderPosition(50); // reset slider to center on swap
                  }}
                  className={`group relative overflow-hidden cursor-pointer transition-all duration-300 border p-3 bg-white dark:bg-zinc-900/60 ${
                    worksCurrent
                      ? 'border-[#C67C4E] dark:border-dark-accent ring-2 ring-terracotta/20'
                      : 'border-warm-border dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                    <img
                      src={proj.afterImage}
                      alt={proj.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="mt-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-[#C67C4E] dark:text-dark-accent font-bold">
                        {proj.type}
                      </span>
                      <span className="text-[9px] text-[#A39D90] font-mono">
                        {proj.location}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {proj.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
