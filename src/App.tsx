import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentTransformations from './components/RecentTransformations';
import TrustBuilders from './components/TrustBuilders';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import EstimateForm from './components/EstimateForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-dark-bg text-gray-900 dark:text-zinc-100 transition-colors duration-500 font-sans selection:bg-terracotta/20 selection:text-terracotta">
      {/* Absolute Sticky blurred glass Header Navbar */}
      <Navbar />

      {/* Main content flow */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero />

        {/* RECENT TRANSFORMATIONS SECTION (3 high-fidelity demonstration cards) */}
        <RecentTransformations />

        {/* TRUST BUILDERS (Licensed & Insured, Estimates, local pride) */}
        <TrustBuilders />

        {/* SERVICES SECTION (asymmetrical blocks with custom specifications) */}
        <Services />

        {/* PORTFOLIO PROJECTS SECTION (Interactive before-after comparative slider) */}
        <Projects />

        {/* COMPANY RE-MODEL PROCESS STEPS */}
        <Process />

        {/* TESTIMONIAL CAROUSEL */}
        <Testimonials />

        {/* ABOUT SERGEI & CLARA ARCHITECTURE */}
        <About />

        {/* FREE ESTIMATE CALCULATION LEAD FORM */}
        <EstimateForm />

        {/* FLOATING ACTION UTILITIES (WhatsApp popup + One-touch Dial) */}
        <FloatingActions />

      </main>

      {/* FOOTER COORDINATES GROUP */}
      <Footer />
    </div>
  );
}

