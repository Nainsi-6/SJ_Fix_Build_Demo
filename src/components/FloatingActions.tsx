import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState<'none' | 'chat'>('none');
  const [userMsg, setUserMsg] = useState('');
  const [chatSubmitted, setChatSubmitted] = useState(false);

  useEffect(() => {
    // Show a subtle attention bubble after 3 seconds to prompt the demo user
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      userMsg || "Hello, I would love to request a premium renovation blueprint!"
    );
    window.open(`https://wa.me/18005550192?text=${encodedMsg}`, '_blank');
    setChatSubmitted(true);
    setTimeout(() => {
      setActiveTab('none');
      setChatSubmitted(false);
      setUserMsg('');
    }, 2000);
  };

  return (
    <div id="floating-actions-bar" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      
      {/* Interactive Tooltip Call-Out */}
      <AnimatePresence>
        {showTooltip && activeTab === 'none' && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-neutral-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2.5 shadow-xl border border-neutral-800 dark:border-neutral-200 text-xs font-medium tracking-wide flex items-center space-x-3 rounded-none max-w-xs text-left"
          >
            <span>💬 Need immediate woodwork & pricing advice? Tap below!</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-black cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Box Popup (Simulating WhatsApp pre-chat) */}
      <AnimatePresence>
        {activeTab === 'chat' && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            className="w-80 bg-white dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 shadow-2xl p-4 text-left rounded-none mb-1"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-warm-border/60 dark:border-zinc-800/60 pb-3 mb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    WhatsApp Estimator
                  </h4>
                  <span className="text-[10px] text-gray-500 dark:text-zinc-400">Online & responsive</span>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('none')}
                className="text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {chatSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Redirecting to WhatsApp...</p>
                <p className="text-[11px] text-gray-500 dark:text-zinc-400">We appreciate your project query!</p>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppRedirect} className="space-y-3">
                <p className="text-xs text-gray-600 dark:text-zinc-300">
                  Transmit an instant text direct to Sergei. Perfect for quick material questions or photo uploads!
                </p>
                <textarea
                  required
                  rows={2}
                  maxLength={180}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Hi! I'd like a free quote for custom cabinetry/bath remodel..."
                  className="w-full text-xs bg-warm-ivory dark:bg-zinc-900 border border-warm-border dark:border-zinc-800 p-2.5 text-gray-900 dark:text-white focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-none resize-none font-sans"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[10px] uppercase tracking-widest flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Action Buttons Group */}
      <div className="flex flex-col space-y-3 items-end">
        
        {/* WhatsApp Button */}
        <div className="relative group flex items-center">
          <span className="mr-3 bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-bold font-sans py-1.5 px-3 rounded-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-emerald-600">
            WhatsApp Sergei
          </span>
          <button
            onClick={() => {
              setActiveTab(activeTab === 'chat' ? 'none' : 'chat');
              setShowTooltip(false);
            }}
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all duration-300 relative border border-emerald-400/20 cursor-pointer"
          >
            {/* Soft background pulse */}
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 -z-10" />
            <MessageCircle className="w-5.5 h-5.5" />
          </button>
        </div>

        {/* Direct Call Mobile-Friendly Action */}
        <div className="relative group flex items-center">
          <span className="mr-3 bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-bold font-sans py-1.5 px-3 rounded-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-terracotta">
            Direct Office Call
          </span>
          <a
            href="tel:+18005550192"
            aria-label="Call Office Directly"
            className="w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-white flex items-center justify-center shadow-lg hover:shadow-terracotta/20 active:scale-95 transition-all duration-300 relative border border-terracotta/20 cursor-pointer"
          >
            {/* Soft background pulse */}
            <span className="absolute inset-0 rounded-full bg-terracotta animate-pulse opacity-40 -z-10" />
            <Phone className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}
