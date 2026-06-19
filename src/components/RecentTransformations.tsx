import { motion } from 'motion/react';
import { Sparkles, Calendar, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface TransformationItem {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
  timeline: string;
  investmentValue: string;
  valueAdded: string;
  image: string;
}

const transformations: TransformationItem[] = [
  {
    id: 't-1',
    title: "Mid-Century Multi-Room Culinary Oasis",
    category: "Full Kitchen & Structural Overhaul",
    before: "Two dark, closed traditional rooms with 1970s dark-oak cabinetry.",
    after: "Harmonious open-concept layout with white oak custom built-ins, 12ft quartzite island, and professional wolf/subzero suite integration.",
    timeline: "8 Weeks",
    investmentValue: "$85k Est.",
    valueAdded: "+22% Home Equity",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 't-2',
    title: "Organic Modern Sanctuary Bath Suite",
    category: "Master Bathroom Spa Remodel",
    before: "Fragmented 1980s layout, fiberglass shower stall, and poor architectural lighting.",
    after: "Curb-less basalt steam wet-room, floating solid-walnut double vanities, heated slate floors, and intelligent ambient lighting controls.",
    timeline: "5 Weeks",
    investmentValue: "$48k Est.",
    valueAdded: "+15% Home Equity",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 't-3',
    title: "Multi-Tier Riverview Vista Deck",
    category: "Luxury Architectural Outdoor Space",
    before: "Unstable, weathered redwood platform with unsafe railing structures.",
    after: "Dual-level heavy timber deck built with TimberTech boards, concealed fasteners, frameless ultra-clear safety glass panels, and ambient post lights.",
    timeline: "4 Weeks",
    investmentValue: "$37k Est.",
    valueAdded: "+11% Home Equity",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function RecentTransformations() {
  const handleScrollToEstimate = () => {
    const element = document.getElementById('estimate');
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
      id="recent-transformations" 
      className="py-16 sm:py-24 bg-white/70 dark:bg-zinc-950/40 border-y border-warm-border/60 dark:border-zinc-800/40 text-left relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent inline-flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Contractor Demo Feature
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 dark:text-white tracking-tight leading-tight">
              Recent Transformations
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-2xl">
              Real-world visual representations of our latest major transformations. See how we turn outdated layouts into high-equity, award-winning architectural gems.
            </p>
          </div>
          
          <button
            onClick={handleScrollToEstimate}
            className="group shrink-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-terracotta hover:text-terracotta-hover dark:text-dark-accent dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Quote Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-warm-ivory/40 dark:bg-zinc-900/40 border border-warm-border/50 dark:border-zinc-800/50 hover:border-terracotta/40 dark:hover:border-dark-accent/40 rounded-none overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Visual Area */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-1">
                    {item.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-terracotta dark:group-hover:text-dark-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Before & After Comparison */}
                  <div className="space-y-3.5 border-y border-warm-border/60 dark:border-zinc-800/40 py-4 font-sans text-xs">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-3 font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 font-mono">
                        Before:
                      </div>
                      <div className="col-span-9 text-gray-500 dark:text-zinc-400">
                        {item.before}
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-3 font-semibold uppercase tracking-wider text-green-600 dark:text-emerald-400 font-mono">
                        After:
                      </div>
                      <div className="col-span-9 text-gray-800 dark:text-zinc-200 font-medium">
                        {item.after}
                      </div>
                    </div>
                  </div>

                  {/* Operational Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                    <div className="bg-warm-beige/30 dark:bg-zinc-950/40 py-2.5 px-1.5 border border-warm-border/30 dark:border-zinc-800/30">
                      <div className="flex items-center justify-center space-x-1 text-gray-400 dark:text-zinc-500 mb-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[9px] uppercase tracking-wider font-mono">Timeline</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-zinc-200">
                        {item.timeline}
                      </p>
                    </div>

                    <div className="bg-warm-beige/30 dark:bg-zinc-950/40 py-2.5 px-1.5 border border-warm-border/30 dark:border-zinc-800/30">
                      <div className="flex items-center justify-center space-x-1 text-gray-400 dark:text-zinc-500 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[9px] uppercase tracking-wider font-mono">Yield</span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {item.valueAdded}
                      </p>
                    </div>

                    <div className="bg-warm-beige/30 dark:bg-zinc-950/40 py-2.5 px-1.5 border border-warm-border/30 dark:border-zinc-800/30">
                      <div className="flex items-center justify-center space-x-1 text-gray-400 dark:text-zinc-500 mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[9px] uppercase tracking-wider font-mono font-sans">Scope</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-zinc-200">
                        {item.investmentValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Footer Interactive Indicator */}
              <div className="px-6 pb-6 pt-1 text-right">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 group-hover:text-terracotta dark:group-hover:text-dark-accent transition-colors uppercase">
                  Contractor Verified • Active Case
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
