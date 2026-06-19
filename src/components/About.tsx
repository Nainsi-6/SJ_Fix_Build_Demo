import { motion } from 'motion/react';
import { Mail, Phone, Award, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-warm-ivory dark:bg-dark-bg overflow-hidden text-left">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Asymmetrical Introduction block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Column Left: Visual narrative */}
          <div className="lg:col-span-6 space-y-4 lg:space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent">
              Our Story
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-[1.15] sm:leading-[1.12]">
              Inherited Craftsmanship Preserving Architectural Heritage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-zinc-300">
              Founded to deliver premium residential renovations across your local area. <span className="hidden sm:inline">Homes in our local communities possess distinct historic architectural bones — whether a classic brick loft downtown or a majestic cedar estate in the suburbs.</span>
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-zinc-400 hidden sm:block">
              We focus on building envelopes resilient to robust regional weather conditions, structural floor deflection calculations, and clean joinery that handles seasonal timber expansion flawlessly. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-terracotta dark:text-dark-accent" />
                <span className="text-xs font-semibold text-gray-800 dark:text-zinc-200">Local Area Design Studio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-terracotta dark:text-dark-accent" />
                <span className="text-xs font-semibold text-gray-800 dark:text-zinc-200">Certified Schluter Wet-Pack Artisans</span>
              </div>
            </div>
          </div>

          {/* Column Right: Secondary custom imagery (large scale craftsmanship photo) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-16/10 sm:aspect-4/3 overflow-hidden border border-warm-border dark:border-zinc-800 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&q=80&w=1100"
                alt="Finishing custom woodwork on-site"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
            </motion.div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-terracotta/20 dark:border-dark-accent/20 z-0 pointer-events-none" />
          </div>

        </div>

        {/* Meet the Artisans sub-grid */}
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs tracking-widest font-mono text-gray-400 uppercase">// THE BRAINS &amp; THE HANDS</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Meet the Principals</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 p-6 bg-white dark:bg-zinc-900 border border-warm-border/60 dark:border-zinc-800/80 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-none object-cover border border-warm-border dark:border-zinc-880 group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="space-y-2.5">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900 dark:text-white">{member.name}</h4>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#C67C4E] dark:text-dark-accent font-sans">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-zinc-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
