import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, UploadCloud, CheckCircle2, Calculator, Info, Key, Hammer, RefreshCw } from 'lucide-react';
import { EstimateRequest } from '../types';

export default function EstimateForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<EstimateRequest>({
    fullName: '',
    email: '',
    phone: '',
    location: 'Rothesay, NB',
    projectType: 'Kitchen Renovation',
    budgetRange: '$25,000 - $50,000',
    timeline: 'Within 1-3 Months',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Simulating drag & drop files
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const names: string[] = [];
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        names.push(e.dataTransfer.files[i].name);
      }
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names: string[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        names.push(e.target.files[i].name);
      }
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API storage / local save
    const currentSubmissions = JSON.parse(localStorage.getItem('sj-estimates') || '[]');
    currentSubmissions.push({
      ...formData,
      uploadedFiles,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('sj-estimates', JSON.stringify(currentSubmissions));
    setFormSubmitted(true);
  };

  // Interactive Live Calculation Blueprint Generator
  const getEstimationBlueprint = () => {
    const { projectType, budgetRange } = formData;
    let materialLevel = 'Premium Custom-sourced';
    let scopeEstimate = 'Standard structural adjustments included.';
    let timelineEstimate = 'Approx. 4-6 weeks construction period.';

    if (budgetRange === 'Under $15,000') {
      materialLevel = 'High-end Standard Stock';
      scopeEstimate = 'Cosmetic updates, detailed paint, trim alignments & hardware retrofits.';
      timelineEstimate = 'Approx. 1-2 weeks physical build.';
    } else if (budgetRange === '$15,000 - $25,000') {
      materialLevel = 'Boutique Contemporary Finishes';
      scopeEstimate = 'Cabinet updates, tile floor installations, custom backsplash and premium fixtures.';
      timelineEstimate = 'Approx. 2-3 weeks physical build.';
    } else if (budgetRange === '$25,000 - $50,000') {
      materialLevel = 'Bespoke Solid Hardwood & Natural Stones';
      scopeEstimate = 'Complete spatial layout remodel, load barrier beams, custom built-ins & premium quartzites.';
      timelineEstimate = 'Approx. 4-6 weeks physical build.';
    } else if (budgetRange === '$50,000+') {
      materialLevel = 'Architectural Masterpiece Heritage-grade';
      scopeEstimate = 'Total stud-out transformation, Schluter moisture system, sub-floor floor heating, Custom White Oak panels.';
      timelineEstimate = 'Approx. 6-10 weeks physical build.';
    }

    return { materialLevel, scopeEstimate, timelineEstimate };
  };

  const blueprint = getEstimationBlueprint();

  return (
    <section id="estimate" className="py-16 sm:py-24 bg-warm-ivory dark:bg-dark-bg overflow-hidden relative">
      
      {/* Background completed project as subtle aesthetic overlay backdrop (low opacity to prevent neon look) */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-5 pointer-events-none mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1500"
          alt="Completed kitchen background blueprint"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Column Left: Visual pricing / trust guidelines */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8 text-left">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-terracotta dark:text-dark-accent block">
                Lead Generation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
                Let&rsquo;s Cost &amp; Design Your Project
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
                Submit details about your residential structure. Within 24 hours, Sergei James will evaluate your scope guidelines and schedule a brief personal phone consultation.
              </p>
            </div>

            {/* Interactive Dynamic estimation preview widget */}
            <div className="bg-white dark:bg-zinc-900 border border-warm-border/80 dark:border-zinc-800 p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-terracotta dark:text-dark-accent">
                <Calculator className="w-5 h-5" />
                <h4 className="font-serif font-bold text-base text-gray-950 dark:text-white">Estimate Projection Blueprint</h4>
              </div>
              
              <div className="space-y-3 pt-2 text-xs border-t border-warm-border dark:border-zinc-800">
                <div className="flex justify-between items-center bg-warm-beige/30 dark:bg-zinc-800/40 p-2 leading-relaxed">
                  <span className="text-gray-500 font-medium">Project Class:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formData.projectType}</span>
                </div>
                <div className="flex justify-between items-center bg-warm-beige/30 dark:bg-zinc-800/40 p-2 leading-relaxed">
                  <span className="text-gray-500 font-medium">Investment Allocation:</span>
                  <span className="font-bold text-terracotta dark:text-dark-accent">{formData.budgetRange}</span>
                </div>

                <div className="space-y-2 pt-2 text-gray-600 dark:text-zinc-300">
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-terracotta dark:bg-dark-accent rounded-none mr-2 shrink-0 mt-1" />
                    <span><strong>Grade Materials:</strong> {blueprint.materialLevel}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-terracotta dark:bg-dark-accent rounded-none mr-2 shrink-0 mt-1" />
                    <span><strong>Project Scope:</strong> {blueprint.scopeEstimate}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-terracotta dark:bg-dark-accent rounded-none mr-2 shrink-0 mt-1" />
                    <span><strong>Time Allocation:</strong> {blueprint.timelineEstimate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2 bg-warm-beige dark:bg-zinc-800 p-2.5 rounded-none text-[10px] text-gray-500 dark:text-zinc-400">
                <Info className="w-4 h-4 shrink-0 text-terracotta dark:text-dark-accent" />
                <span>Pre-assessment criteria only. Exact quotes are rendered after visual measurements of studs/beams.</span>
              </div>
            </div>

            {/* Quick contact numbers */}
            <div className="space-y-3.5 pt-4 text-xs font-medium text-gray-700 dark:text-zinc-300">
              <p className="flex items-center">
                <span className="font-bold uppercase tracking-wider text-[10px] text-gray-400 dark:text-zinc-500 mr-2.5">DIRECT CALL:</span>
                <span>+1 (506) 555-0192</span>
              </p>
              <p className="flex items-center">
                <span className="font-bold uppercase tracking-wider text-[10px] text-gray-400 dark:text-zinc-500 mr-2.5">OFFICE HOURS:</span>
                <span>Mon - Fri • 7:30 AM - 5:30 PM AT</span>
              </p>
            </div>
          </div>

          {/* Column Right: Elegant Form Layout */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 border border-warm-border dark:border-zinc-800 p-8 sm:p-12 shadow-xl text-left">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="estimate-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name field */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                          placeholder="Eleanor Vance"
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                          placeholder="eleanor@rothesay.com"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                          placeholder="+1 (506) 555-0123"
                        />
                      </div>

                      {/* Location selector */}
                      <div className="space-y-1.5">
                        <label htmlFor="location" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Renovation Location *
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                        >
                          <option value="Rothesay, NB">Rothesay, NB</option>
                          <option value="Uptown Saint John, NB">Uptown Saint John, NB</option>
                          <option value="Millidgeville, NB">Millidgeville, NB</option>
                          <option value="Quispamsis, NB">Quispamsis, NB</option>
                          <option value="West Saint John, NB">West Saint John, NB</option>
                          <option value="Fredericton, NB">Fredericton, NB</option>
                          <option value="Charlotte County / Surrounding">Other NB Communities</option>
                        </select>
                      </div>

                      {/* Project Type selector */}
                      <div className="space-y-1.5">
                        <label htmlFor="projectType" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Bespoke Project Class
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                        >
                          <option value="Kitchen Renovation">Kitchen Renovation</option>
                          <option value="Bathroom Remodeling">Bathroom Remodeling Spa</option>
                          <option value="Accent Carpentry Bookcases">Accent Carpentry / Builtins</option>
                          <option value="Outdoor Deck Structural">Structural Wood Deck</option>
                          <option value="Whole House Expansion">Whole House Addition</option>
                        </select>
                      </div>

                      {/* Budget Selector */}
                      <div className="space-y-1.5">
                        <label htmlFor="budgetRange" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                          Target Investment Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleInputChange}
                          className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none"
                        >
                          <option value="Under $15,000">Under $15,000 (Cosmetic)</option>
                          <option value="$15,000 - $25,000">$15,000 - $25,000 (Standard)</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000 (Bespoke Kitchen/Bath)</option>
                          <option value="$50,000+">$50,000+ (Whole Custom / Additions)</option>
                        </select>
                      </div>

                    </div>

                    {/* Timeline Radio selector */}
                    <div className="space-y-2">
                      <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300 block">
                        Desired Launch Timeline
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {['Immediate', 'Within 1-3 Months', 'Within 3-6 Months', 'Planning Phase'].map((opt) => (
                          <label
                            key={opt}
                            className={`flex flex-col items-center justify-center p-3 border cursor-pointer select-none text-center transition-all duration-200 ${
                              formData.timeline === opt
                                ? 'bg-warm-beige dark:bg-zinc-800 border-terracotta dark:border-dark-accent text-gray-900 dark:text-white'
                                : 'border-warm-border dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-700 text-gray-600 dark:text-zinc-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={opt}
                              checked={formData.timeline === opt}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="text-xs font-semibold">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Description field */}
                    <div className="space-y-1.5">
                      <label htmlFor="description" className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300">
                        Project Scope Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full bg-warm-ivory dark:bg-zinc-950 border border-warm-border dark:border-zinc-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:border-terracotta dark:focus:border-dark-accent rounded-none resize-none"
                        placeholder="Please detail key layout desires, existing structural materials, and any cabinetry preferences..."
                      />
                    </div>

                    {/* Usability Guidelines: drag & drop or select files uploader */}
                    <div className="space-y-2">
                      <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-gray-700 dark:text-zinc-300 block">
                        Inspire Us (Attach Floor Plans, sketches or current photos)
                      </span>
                      
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-none p-6 text-center transition-all duration-200 cursor-pointer ${
                          isDragging
                            ? 'border-terracotta dark:border-dark-accent bg-warm-beige/60 dark:bg-zinc-800'
                            : 'border-warm-border dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-750 bg-warm-ivory/50 dark:bg-zinc-950/45'
                        }`}
                      >
                        <input
                          type="file"
                          id="project-files"
                          multiple
                          onChange={handleFileChange}
                          className="sr-only"
                          accept="image/*,application/pdf"
                        />
                        <label htmlFor="project-files" className="cursor-pointer space-y-2.5 flex flex-col items-center justify-center">
                          <UploadCloud className="w-8 h-8 text-neutral-400 dark:text-neutral-500" />
                          <div className="text-xs text-gray-600 dark:text-zinc-400">
                            <span className="font-bold text-terracotta dark:text-dark-accent underline">Click to upload files</span> or drag and drop items here
                          </div>
                          <span className="text-[10px] text-gray-400 dark:text-zinc-500">
                            Supports JPEGs, PNGs, and PDFs up to 50MB total.
                          </span>
                        </label>
                      </div>

                      {/* Render uploaded files */}
                      {uploadedFiles.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {uploadedFiles.map((fn, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center space-x-1.5 bg-warm-beige dark:bg-zinc-800 border border-warm-border dark:border-zinc-700 text-xs px-2.5 py-1 text-gray-800 dark:text-zinc-200"
                            >
                              <span className="max-w-[150px] truncate">{fn}</span>
                              <button
                                type="button"
                                onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))}
                                className="text-terracotta hover:text-black dark:text-dark-accent hover:dark:text-white font-bold ml-1 text-[10px]"
                              >
                                &times;
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* submit CTA button */}
                    <button
                      type="submit"
                      className="w-full py-4.5 bg-terracotta dark:bg-dark-accent select-none text-white hover:bg-terracotta-hover dark:hover:bg-amber-600 font-semibold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <span>Transmit Request to Sergei</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                        Blueprint Request Transmitted Successfully
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-md mx-auto">
                        Thank you for coordinating with SJ Fix &amp; Build, <strong>{formData.fullName}</strong>. Clarissa will review your stone/wood inspirations, and Sergei will reach out to <strong>{formData.phone}</strong> inside 24 business hours.
                      </p>
                    </div>

                    <div className="border border-warm-border dark:border-zinc-800 bg-warm-beige/35 dark:bg-zinc-900 p-4 max-w-sm mx-auto text-left text-xs space-y-2 font-medium">
                      <p className="text-neutral-400 uppercase tracking-widest text-[9px] font-bold">TRANSMISSION SUMMARY:</p>
                      <p><strong>Class:</strong> {formData.projectType}</p>
                      <p><strong>Region:</strong> {formData.location}</p>
                      <p><strong>Timeline:</strong> {formData.timeline}</p>
                      {uploadedFiles.length > 0 && <p><strong>Files:</strong> {uploadedFiles.length} item(s) attached.</p>}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setUploadedFiles([]);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          location: 'Rothesay, NB',
                          projectType: 'Kitchen Renovation',
                          budgetRange: '$25,000 - $50,000',
                          timeline: 'Within 1-3 Months',
                          description: ''
                        });
                      }}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C67C4E] dark:text-dark-accent font-bold hover:underline"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit New Consultation</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
