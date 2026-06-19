import { motion } from 'motion/react';
import { Shield, FileText, MapPin, Sparkles, Clock, Compass } from 'lucide-react';

export default function TrustBuilders() {
  const values = [
    {
      id: 'licensed-insured',
      icon: Shield,
      title: 'Full General Liability & Insurance',
      subtitle: 'Complete peace of mind for every square inch.',
      description: 'Fully licensed with comprehensive active general construction and liability insurance. Every artisan on our team is meticulously covered, ensuring absolute legal and financial safety throughout your renovation.'
    },
    {
      id: 'free-estimates',
      icon: FileText,
      title: 'Transparent Project Estimations',
      subtitle: 'Honest pricing with no hidden surprises.',
      description: 'We do not believe in vague high-ball or low-ball numbers. You receive a fully itemized, professionally structured cost blueprint detail including specific labor hours and materials matching your financial boundary.'
    },
    {
      id: 'local-contractor',
      icon: MapPin,
      title: 'Deeply Rooted Local Team',
      subtitle: 'We build for our neighbours and friends.',
      description: 'We live, sleep, and breathe premium home improvement. Our knowledge of local weather dynamics, historic timbers, and timeless architecture ensures that our renovations stand strong for generations.'
    },
    {
      id: 'satisfaction-guarantee',
      icon: Sparkles,
      title: 'Standard Workmanship Guarantee',
      subtitle: 'Our craftsmanship endures long after completion.',
      description: 'We stand by every joint, miter, tile grout-line, and deck footer. Our company offers a comprehensive structural warranty to correct any alignment settling or finish details. If you are not fully satisfied, we make it perfect.'
    },
    {
      id: 'fast-response',
      icon: Clock,
      title: 'Committed Communication Loop',
      subtitle: 'Daily status updates with active responses.',
      description: 'No unreturned messages or endless contractor ghosting. We maintain an open, proactive channel of communication. You get a dedicated timeline manager who responds to calls or text queries within an hour or less.'
    }
  ];

  return (
    <section
      id="trust-section"
      className="py-16 sm:py-24 bg-warm-beige dark:bg-zinc-900/30 border-y border-warm-border/50 dark:border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Elegant Text Narrative */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-6 lg:sticky lg:top-32">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
              Our Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-gray-900 dark:text-white leading-tight">
              An Architectural Approach Built on Absolute Trust
            </h2>
            <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed">
              We understand the anxiety of remodeling. A premium outcome is not just measured in finished carpentry, but in the respect, peace, and transparency maintained inside your home.
            </p>
            
            <div className="pt-4 flex items-center space-x-3 text-gray-500 dark:text-zinc-400">
              <Compass className="w-8 h-8 text-neutral-400 dark:text-neutral-600" />
              <p className="text-xs font-mono">
                Est. Local Studio • Fully Licensed &amp; Insured
              </p>
            </div>
          </div>

          {/* Right Side: Elegant, Custom Grid (No Boring Boxes) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-col space-y-4 group"
                  >
                    {/* Index marker & Icon alignment */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-none bg-white dark:bg-zinc-800 text-terracotta dark:text-dark-accent border border-warm-border dark:border-zinc-700/60 shadow-xs group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 tracking-widest font-semibold">
                        0{idx + 1} // STANDARDS
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-terracotta dark:group-hover:text-dark-accent transition-colors duration-300">
                        {val.title}
                      </h3>
                      <p className="text-xs font-semibold text-terracotta dark:text-dark-accent font-sans">
                        {val.subtitle}
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-gray-500 dark:text-zinc-400">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
