import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, UploadCloud, Link as LinkIcon, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import login1 from '../assets/login1.png';

// Type definitions for our form state
interface FormData {
  location: string;
  languages: string[];
  category: 'Footwear' | 'Accessories' | 'Both' | '';
  footwearSpecialties: string[];
  accessorySpecialties: string[];
  experience: string;
  currentRole: string;
  workedWithBrands: string;
  brandsList: string;
  software: string[];
  techPacks: string;
  education: string;
  portfolioUrl: string;
  portfolioDetails: string;
  seasons: string[];
  concurrentProjects: string;
  turnaroundTime: string;
  bookingPreference: string;
  bio: string;
  excitedProjects: string;
  agreements: {
    originalWork: boolean;
    nda: boolean;
    interview: boolean;
    tos: boolean;
  };
}

const INITIAL_DATA: FormData = {
  location: '',
  languages: [],
  category: '',
  footwearSpecialties: [],
  accessorySpecialties: [],
  experience: '',
  currentRole: '',
  workedWithBrands: '',
  brandsList: '',
  software: [],
  techPacks: '',
  education: '',
  portfolioUrl: '',
  portfolioDetails: '',
  seasons: [],
  concurrentProjects: '',
  turnaroundTime: '',
  bookingPreference: '',
  bio: '',
  excitedProjects: '',
  agreements: { originalWork: false, nda: false, interview: false, tos: false }
};

const STEPS = [
  { id: 1, title: 'Professional Background' },
  { id: 2, title: 'Experience & Expertise' },
  { id: 3, title: 'Portfolio & Work' },
  { id: 4, title: 'Availability' },
  { id: 5, title: 'Final Details' },
];

export default function DesignerOnboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('designer_onboarding_draft');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved draft", e);
      }
    }
  }, []);

  // Autosave
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('designer_onboarding_draft', JSON.stringify(formData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const toggleArrayItem = (arrayName: keyof FormData, item: string) => {
    setFormData(prev => {
      const arr = prev[arrayName] as string[];
      if (arr.includes(item)) {
        return { ...prev, [arrayName]: arr.filter(i => i !== item) };
      }
      return { ...prev, [arrayName]: [...arr, item] };
    });
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = () => {
    console.log("Submitting form data...", formData);
    localStorage.removeItem('designer_onboarding_draft');
    // Simulated success redirect
    alert("Application submitted successfully! Our curators will review your profile.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex flex-col md:flex-row font-sans text-ink">
      
      {/* ── Left Sidebar (Progress Tracker) ── */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-ink text-white p-8 md:p-12 flex flex-col relative overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <img src={login1} className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90 z-0" />
        
        <div className="relative z-10 flex flex-col h-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-16 text-sm font-semibold">
            <ArrowLeft size={16} /> Save & Exit
          </Link>

          <h2 className="text-3xl font-serif mb-12">Designer<br/><span className="text-paper italic">Application</span></h2>

          <div className="space-y-8 flex-1">
            {STEPS.map((s) => {
              const isActive = s.id === step;
              const isPast = s.id < step;
              return (
                <div key={s.id} className={`flex items-start gap-4 transition-opacity duration-300 ${isActive ? 'opacity-100' : isPast ? 'opacity-50' : 'opacity-30'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 font-bold text-sm transition-colors ${isActive ? 'bg-paper border-paper text-ink' : isPast ? 'bg-transparent border-paper text-paper' : 'border-white/20 text-white/50'}`}>
                    {isPast ? <Check size={14} /> : s.id}
                  </div>
                  <div className="pt-1">
                    <p className={`font-bold ${isActive ? 'text-paper' : 'text-white'}`}>{s.title}</p>
                    {isActive && <p className="text-white/60 text-xs mt-1">Step {s.id} of 5</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-xs text-white/40">
            <p>Your progress is auto-saved.</p>
          </div>
        </div>
      </div>

      {/* ── Right Content Area (Form) ── */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col relative h-screen overflow-y-auto">
        <div className="flex-1 w-full max-w-3xl mx-auto p-8 md:p-12 lg:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="pb-24"
            >
              
              {/* === STEP 1: Professional Background === */}
              {step === 1 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">Professional Background</h3>
                    <p className="text-ink/60">Let's start with the basics of your practice.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">1. Where are you based?</label>
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={e => updateFields({ location: e.target.value })}
                        className="w-full bg-white border border-ink/10 rounded-xl py-4 px-5 text-ink focus:ring-2 focus:ring-ink/20 shadow-sm"
                        placeholder="City, Country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">2. Primary Design Category</label>
                      <div className="flex gap-4">
                        {['Footwear', 'Accessories', 'Both'].map(cat => (
                          <button
                            key={cat}
                            onClick={() => updateFields({ category: cat as any })}
                            className={`flex-1 py-4 rounded-xl border font-bold transition-all ${formData.category === cat ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 text-ink/70 hover:border-ink/30'}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <AnimatePresence>
                      {(formData.category === 'Footwear' || formData.category === 'Both') && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3 mt-8">Footwear Specialties (Select all that apply)</label>
                          <div className="flex flex-wrap gap-3">
                            {['Sneakers / Athletic', 'Formal / Dress Shoes', 'Casual / Lifestyle', 'Sandals / Slippers', 'Boots'].map(spec => {
                              const active = formData.footwearSpecialties.includes(spec);
                              return (
                                <button key={spec} onClick={() => toggleArrayItem('footwearSpecialties', spec)} className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${active ? 'bg-ink border-ink text-white' : 'bg-white border-ink/10 text-ink/70 hover:border-ink/30'}`}>
                                  {spec}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {(formData.category === 'Accessories' || formData.category === 'Both') && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3 mt-8">Accessory Specialties (Select all that apply)</label>
                          <div className="flex flex-wrap gap-3">
                            {['Bags / Handbags', 'Belts', 'Wallets / Small Leather Goods', 'Jewelry', 'Other'].map(spec => {
                              const active = formData.accessorySpecialties.includes(spec);
                              return (
                                <button key={spec} onClick={() => toggleArrayItem('accessorySpecialties', spec)} className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${active ? 'bg-ink border-ink text-white' : 'bg-white border-ink/10 text-ink/70 hover:border-ink/30'}`}>
                                  {spec}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* === STEP 2: Experience === */}
              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">Experience & Expertise</h3>
                    <p className="text-ink/60">Tell us about your professional journey.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Years of Experience</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { label: 'Fresher', sub: '0-2 years', val: 'fresher', tier: 'Tier 1 ($50 - $150 / concept)' },
                          { label: 'Junior/Mid', sub: '2-5 years', val: 'mid', tier: 'Tier 2 ($150 - $400 / concept)' },
                          { label: 'Senior', sub: '5+ years', val: 'senior', tier: 'Tier 3 ($400+ / concept)' }
                        ].map(exp => {
                          const active = formData.experience === exp.val;
                          return (
                            <button key={exp.val} onClick={() => updateFields({ experience: exp.val })} className={`relative p-5 rounded-xl border text-left transition-all ${active ? 'bg-ink border-ink text-white shadow-lg scale-[1.02]' : 'bg-white border-ink/10 hover:border-ink/30'}`}>
                              <p className={`font-bold text-lg ${active ? 'text-white' : 'text-ink'}`}>{exp.label}</p>
                              <p className={`text-sm mt-1 mb-4 ${active ? 'text-white/70' : 'text-ink/50'}`}>{exp.sub}</p>
                              
                              <div className={`mt-auto pt-4 border-t ${active ? 'border-white/20' : 'border-ink/10'}`}>
                                <p className="text-xs uppercase tracking-wider font-bold opacity-60 mb-1">Expected Rate</p>
                                <p className="text-sm font-semibold flex items-center gap-1"><DollarSign size={14}/> {exp.tier.split('(')[1].replace(')', '')}</p>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Software Proficiency</label>
                      <div className="flex flex-wrap gap-3">
                        {['Adobe Illustrator', 'Adobe Photoshop', 'CLO 3D / Browzwear', 'Rhino / 3D CAD', 'Procreate', 'Hand-sketching'].map(software => {
                          const active = formData.software.includes(software);
                          return (
                            <button key={software} onClick={() => toggleArrayItem('software', software)} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${active ? 'bg-ink border-ink text-white' : 'bg-white border-ink/10 text-ink/70 hover:border-ink/30'}`}>
                              {software}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Do you create Tech Packs?</label>
                      <div className="flex gap-4">
                        {['Yes', 'No', 'Some experience'].map(opt => (
                          <button key={opt} onClick={() => updateFields({ techPacks: opt })} className={`flex-1 py-3 rounded-xl border font-bold transition-all ${formData.techPacks === opt ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 text-ink/70'}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === STEP 3: Portfolio === */}
              {step === 3 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">Portfolio & Work</h3>
                    <p className="text-ink/60">Upload your best work for curator review.</p>
                  </div>

                  <div className="space-y-8">
                    {/* UI-Only File Dropzone */}
                    <div className="border-2 border-dashed border-ink/20 bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-ink/5 flex items-center justify-center mb-4 text-ink">
                        <UploadCloud size={32} />
                      </div>
                      <p className="font-bold text-lg mb-1">Click to upload or drag & drop</p>
                      <p className="text-ink/50 text-sm max-w-xs mx-auto">PDF, JPG, or PNG. Minimum 3 pieces required. Max 20MB per file.</p>
                      <button className="mt-6 bg-white border border-ink/20 px-6 py-2.5 rounded-full font-bold text-sm hover:border-ink/50 transition-colors">
                        Select Files
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-px bg-ink/10 flex-1"></div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/40">OR</p>
                      <div className="h-px bg-ink/10 flex-1"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Link your portfolio</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-ink/40">
                          <LinkIcon size={18} />
                        </div>
                        <input 
                          type="url" 
                          value={formData.portfolioUrl}
                          onChange={e => updateFields({ portfolioUrl: e.target.value })}
                          className="w-full bg-white border border-ink/10 rounded-xl py-4 pl-12 pr-4 text-ink focus:ring-2 focus:ring-ink/20 shadow-sm"
                          placeholder="Behance, Instagram, or Personal Website"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === STEP 4: Availability === */}
              {step === 4 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">Availability & Style</h3>
                    <p className="text-ink/60">How do you prefer to work with manufacturers?</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Seasons Available</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['Season 1 (Spring/Summer)', 'Season 2 (Pre-Fall)', 'Season 3 (Autumn/Winter)', 'Season 4 (Holiday/Resort)'].map(season => {
                          const active = formData.seasons.includes(season);
                          return (
                            <button key={season} onClick={() => toggleArrayItem('seasons', season)} className={`p-4 rounded-xl border text-left font-bold transition-all ${active ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 hover:border-ink/30'}`}>
                              {season.split('(')[0].trim()}
                              <span className={`block text-xs font-normal mt-1 ${active ? 'text-white/70' : 'text-ink/50'}`}>({season.split('(')[1]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Booking Preferences</label>
                      <div className="flex flex-col gap-3">
                        {['Direct bookings only', 'Project bidding only', 'Open to both'].map(opt => (
                          <label key={opt} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${formData.bookingPreference === opt ? 'border-ink bg-white shadow-sm' : 'border-ink/10 bg-transparent hover:border-ink/30'}`}>
                            <input 
                              type="radio" 
                              name="booking" 
                              checked={formData.bookingPreference === opt}
                              onChange={() => updateFields({ bookingPreference: opt })}
                              className="w-5 h-5 accent-ink cursor-pointer"
                            />
                            <span className="font-semibold">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === STEP 5: Final Details === */}
              {step === 5 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">Final Details</h3>
                    <p className="text-ink/60">Wrap up your application.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-ink/70 mb-3">Professional Bio</label>
                      <textarea 
                        value={formData.bio}
                        onChange={e => updateFields({ bio: e.target.value })}
                        rows={4}
                        className="w-full bg-white border border-ink/10 rounded-xl py-4 px-5 text-ink focus:ring-2 focus:ring-ink/20 shadow-sm resize-none"
                        placeholder="Write a short 2-4 sentence bio for your public profile..."
                      />
                    </div>

                    <div className="space-y-4 pt-4 border-t border-ink/10">
                      {[
                        { key: 'originalWork', label: 'I confirm the portfolio provided is my own original work.' },
                        { key: 'nda', label: 'I agree to The Range Room\'s Platform NDA.' },
                        { key: 'interview', label: 'I understand my profile will be reviewed and I may be contacted for an interview.' },
                        { key: 'tos', label: 'I agree to the Terms of Service and Privacy Policy.' },
                      ].map(agr => (
                        <label key={agr.key} className="flex items-start gap-4 cursor-pointer group">
                          <div className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center border shrink-0 transition-colors ${formData.agreements[agr.key as keyof typeof formData.agreements] ? 'bg-ink border-ink text-white' : 'border-ink/30 bg-white group-hover:border-ink/60'}`}>
                            {formData.agreements[agr.key as keyof typeof formData.agreements] && <Check size={16} />}
                          </div>
                          <span className="text-sm font-medium text-ink/80 leading-relaxed select-none">{agr.label}</span>
                          <input 
                            type="checkbox" 
                            className="hidden"
                            checked={formData.agreements[agr.key as keyof typeof formData.agreements]}
                            onChange={e => updateFields({ 
                              agreements: { ...formData.agreements, [agr.key]: e.target.checked }
                            })}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sticky Footer Navigation */}
        <div className="sticky bottom-0 left-0 right-0 bg-[#fdfaf6]/90 backdrop-blur-md border-t border-ink/10 p-6 md:px-12 lg:px-16 flex items-center justify-between z-20">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`font-bold px-6 py-3 rounded-full transition-colors ${step === 1 ? 'text-ink/20 cursor-not-allowed' : 'text-ink hover:bg-ink/5'}`}
          >
            Back
          </button>
          
          {step < 5 ? (
            <button 
              onClick={nextStep}
              className="bg-ink text-white font-bold px-10 py-3.5 rounded-full hover:bg-ink/90 active:scale-[0.98] transition-all shadow-lg flex items-center gap-2"
            >
              Continue
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="bg-[#d84a3c] text-white font-bold px-10 py-3.5 rounded-full hover:bg-[#c23f33] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
