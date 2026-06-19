import { motion } from 'motion/react';
import { Compass, FileText, ShieldAlert, Hammer, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Structural Architecture & Design Discovery',
      lead: 'Directed by Clara James, Spatial Designer',
      description: 'We sit down in your home for a comprehensive dialogue mapping out your visual preferences, daily workflows, and materials. We draft high-resolution space layout outlines, select custom stone patterns, and map out integrated electrical/fixtures blueprints.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=700'
    },
    {
      number: '02',
      title: 'The Transparent Itemized Cost Blueprint',
      lead: 'No vague, unexpected contractor surcharges',
      description: 'Sergei James calculates an absolute construction blueprint detailing all material costs, specialty plumbing hours, bespoke millwork manufacturing, and expected site management timelines. You authorize exactly what is built and approve every budget ceiling beforehand.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=700'
    },
    {
      number: '03',
      title: 'Precision Extraction & Envelope Prep',
      lead: 'Waterproofing & structural leveling',
      description: 'We treat demolition as a precise surgery, isolating active dust zones with heavy negative-pressure zip-walls. We level non-true floors using state-of-the-art self-leveling mortar and install world-class German Schluter waterproofing inside bathrooms for bulletproof moisture defense.',
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=700'
    },
    {
      number: '04',
      title: 'Artisanal Carpentry & Premium Installation',
      lead: 'Done by our dedicated, in-house team',
      description: 'Our master craftsmen cut, shape, and install your rift-sawn timbers, custom bookcases, and premium tile layouts with absolute precision down to decimal millimeters. We do not use hasty, sub-contracted general labor; Sergei inspects joints and levels daily.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&q=80&w=700'
    },
    {
      number: '05',
      title: 'The Seamless Turnkey Handoff',
      lead: 'Complete site cleaning & workmanship warranty',
      description: 'We perform a full HEPA deep-clean of the workspace, completely restoring your home to a pristine, liveable state. Together, we conduct an extensive final walkthrough, hand you a physical care guide for your woods/stones, and provide our verified warranty card.',
      icon: Key,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=700'
    }
  ];

  return (
    <section id="process" className="py-24 bg-warm-ivory dark:bg-dark-bg overflow-hidden relative">
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-warm-border/60 dark:bg-zinc-800/60 hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title segment */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
            Our Method
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
            The Remodeling Architecture Journey
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
            A step-by-step commitment to extreme transparency, premium timbercraft, and clean client collaboration.
          </p>
        </div>

        {/* Steps Timeline block */}
        <div className="space-y-16 lg:space-y-28">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Timeline node dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-warm-ivory dark:bg-dark-bg border border-warm-border dark:border-zinc-800 text-terracotta dark:text-dark-accent z-25 pointer-events-none">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left side column: Text Narrative on Even steps, Image on Odd */}
                <div
                  className={`lg:col-span-5 ${
                    isLeft ? 'lg:text-right lg:order-1' : 'lg:order-2 lg:col-start-8'
                  } space-y-4`}
                >
                  <div className={`flex items-center space-x-3 ${isLeft ? 'lg:justify-end' : 'justify-start'}`}>
                    <span className="font-mono text-xs tracking-widest text-terracotta dark:text-dark-accent font-bold">
                      STEP {step.number}
                    </span>
                    <span className="h-[1px] w-8 bg-warm-border dark:bg-zinc-800" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    {step.lead}
                  </p>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                    {step.description}
                  </p>
                </div>

                {/* Right side column: Image on Even, Text on Odd */}
                <div
                  className={`lg:col-span-5 relative ${
                    isLeft ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden aspect-16/10 border border-warm-border/50 dark:border-zinc-800 shadow-lg group relative"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
