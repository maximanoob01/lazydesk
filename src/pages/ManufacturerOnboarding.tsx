import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, UploadCloud, Link as LinkIcon, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import login1 from '../assets/login1.png'; // Reusing the same image or a different one

// Type definitions for our form state
interface FormData {
  companyName: string;
  businessType: string;
  country: string;
  hiringFor: string;
  findingPreference: string;
  website: string;
  yearsOperating: string;
  teamSize: string;
  agreements: {
    accurateInfo: boolean;
    paymentsPlatform: boolean;
    nda: boolean;
    tos: boolean;
  };
}

const INITIAL_DATA: FormData = {
  companyName: '',
  businessType: '',
  country: '',
  hiringFor: '',
  findingPreference: '',
  website: '',
  yearsOperating: '',
  teamSize: '',
  agreements: { accurateInfo: false, paymentsPlatform: false, nda: false, tos: false }
};

const STEPS = [
  { id: 1, title: 'Company Details' },
  { id: 2, title: 'Agreement' },
];

export default function ManufacturerOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('manufacturer_onboarding_draft');
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
      localStorage.setItem('manufacturer_onboarding_draft', JSON.stringify(formData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 2));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const [loadingPhase, setLoadingPhase] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setLoadingPhase(1);
    
    // Simulate loading "Activating your account..."
    setTimeout(() => {
      setLoadingPhase(0);
      setIsSubmitted(true);
      localStorage.removeItem('manufacturer_onboarding_draft');
    }, 2500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center p-6 text-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={login1} className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50 pointer-events-none z-0" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 max-w-xl w-full bg-paper p-10 md:p-14 rounded-[2.5rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} strokeWidth={3} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-ink">
            Account Created Successfully
          </h1>
          
          <p className="text-base text-ink/70 font-medium mb-10 leading-relaxed max-w-md mx-auto">
            Your manufacturer account is now active. You can start exploring portfolios or post your first project brief to the network.
          </p>
          
          <Link 
            to="/"
            className="inline-flex w-full items-center justify-center bg-ink text-white font-bold px-8 py-4 rounded-xl hover:bg-ink/90 active:scale-[0.98] transition-all shadow-lg"
          >
            Go to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

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

          <h2 className="text-3xl font-serif mb-12">Manufacturer<br/><span className="text-paper italic">Onboarding</span></h2>

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
                    {isActive && <p className="text-white/60 text-xs mt-1">Step {s.id} of 2</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-white/40 text-xs leading-relaxed max-w-[200px]">
            Your information is secure and only shared with designers you explicitly match with.
          </div>
        </div>
      </div>

      {/* ── Right Content Area ── */}
      <div className="flex-1 flex flex-col max-h-screen overflow-y-auto">
        <div className="flex-1 p-8 md:p-16 lg:p-24 max-w-3xl w-full mx-auto relative">
          
          <AnimatePresence mode="wait">
            {loadingPhase === 1 ? (
              <motion.div
                key="loading-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center h-full space-y-6 pt-32"
              >
                <div className="w-12 h-12 border-4 border-ink/20 border-t-ink rounded-full animate-spin" />
                <p className="font-bold text-ink/70 text-lg">Activating your account...</p>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* ── STEP 1: About Your Company ── */}
                {step === 1 && (
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Step 1 — Company Details</h3>
                      <p className="text-ink/60 font-medium">Tell us about your business to get matched with the right talent.</p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-8">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">Company / Business Name</label>
                        <input 
                          type="text" 
                          value={formData.companyName}
                          onChange={e => updateFields({ companyName: e.target.value })}
                          className="w-full bg-white border border-ink/10 rounded-xl py-4 px-4 text-ink focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all shadow-sm"
                          placeholder="e.g. Acme Footwear"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">What type of business are you?</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {['Manufacturer (domestic)', 'Exporter', 'Brand / Label', 'Sourcing Agency', 'Other'].map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => updateFields({ businessType: type })}
                              className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all text-left ${formData.businessType === type ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 hover:border-ink/30 text-ink/70'}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">Country of Operation</label>
                          <input 
                            type="text" 
                            value={formData.country}
                            onChange={e => updateFields({ country: e.target.value })}
                            className="w-full bg-white border border-ink/10 rounded-xl py-4 px-4 text-ink focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all shadow-sm"
                            placeholder="e.g. Italy"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">Website <span className="text-ink/40 font-normal normal-case">(optional)</span></label>
                          <input 
                            type="url" 
                            value={formData.website}
                            onChange={e => updateFields({ website: e.target.value })}
                            className="w-full bg-white border border-ink/10 rounded-xl py-4 px-4 text-ink focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all shadow-sm"
                            placeholder="https://"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">Years Operating</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Less than 1 year', '1–5 years', '5–15 years', '15+ years'].map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => updateFields({ yearsOperating: type })}
                              className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all text-center ${formData.yearsOperating === type ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 hover:border-ink/30 text-ink/70'}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase tracking-widest text-ink/70 mb-3">Team Size</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Just me / small founding team', '10–50 people', '50–200 people', '200+ people'].map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => updateFields({ teamSize: type })}
                              className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all text-center ${formData.teamSize === type ? 'bg-ink border-ink text-white shadow-md' : 'bg-white border-ink/10 hover:border-ink/30 text-ink/70'}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Agreement ── */}
                {step === 2 && (
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Step 2 — Agreement</h3>
                      <p className="text-ink/60 font-medium">Please review and agree to our platform standards.</p>
                    </div>

                    <div className="bg-white border border-ink/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                      <h4 className="font-bold text-lg border-b border-ink/10 pb-4">Platform Commitments</h4>
                      
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="pt-0.5">
                          <button 
                            type="button"
                            onClick={() => updateFields({ agreements: { ...formData.agreements, accurateInfo: !formData.agreements.accurateInfo }})}
                            className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${formData.agreements.accurateInfo ? 'bg-ink border-ink text-white' : 'border-ink/20 group-hover:border-ink/50'}`}
                          >
                            {formData.agreements.accurateInfo && <Check size={16} strokeWidth={3} />}
                          </button>
                        </div>
                        <span className="text-ink/80 font-medium leading-relaxed">
                          I confirm the information provided is accurate
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="pt-0.5">
                          <button 
                            type="button"
                            onClick={() => updateFields({ agreements: { ...formData.agreements, paymentsPlatform: !formData.agreements.paymentsPlatform }})}
                            className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${formData.agreements.paymentsPlatform ? 'bg-ink border-ink text-white' : 'border-ink/20 group-hover:border-ink/50'}`}
                          >
                            {formData.agreements.paymentsPlatform && <Check size={16} strokeWidth={3} />}
                          </button>
                        </div>
                        <span className="text-ink/80 font-medium leading-relaxed">
                          I understand that all payments must be made through the platform, and that bypassing platform payment may result in account suspension
                        </span>
                      </label>

                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="pt-0.5">
                          <button 
                            type="button"
                            onClick={() => updateFields({ agreements: { ...formData.agreements, nda: !formData.agreements.nda }})}
                            className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${formData.agreements.nda ? 'bg-ink border-ink text-white' : 'border-ink/20 group-hover:border-ink/50'}`}
                          >
                            {formData.agreements.nda && <Check size={16} strokeWidth={3} />}
                          </button>
                        </div>
                        <span className="text-ink/80 font-medium leading-relaxed">
                          I acknowledge The Range Room's platform NDA applies to designers I work with, and I'm encouraged to have my own additional NDA signed for sensitive projects
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="pt-0.5">
                          <button 
                            type="button"
                            onClick={() => updateFields({ agreements: { ...formData.agreements, tos: !formData.agreements.tos }})}
                            className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${formData.agreements.tos ? 'bg-ink border-ink text-white' : 'border-ink/20 group-hover:border-ink/50'}`}
                          >
                            {formData.agreements.tos && <Check size={16} strokeWidth={3} />}
                          </button>
                        </div>
                        <span className="text-ink/80 font-medium leading-relaxed">
                          I agree to the Terms of Service and Privacy Policy
                        </span>
                      </label>

                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom Navigation Bar ── */}
        <div className="bg-white border-t border-ink/10 p-6 px-8 md:px-16 flex items-center justify-between sticky bottom-0 z-20">
          <button 
            onClick={prevStep}
            disabled={step === 1 || loadingPhase > 0}
            className="font-bold text-ink/50 hover:text-ink disabled:opacity-0 transition-all px-4 py-2"
          >
            Back
          </button>
          
          {step < 2 ? (
            <button 
              onClick={nextStep}
              disabled={loadingPhase > 0}
              className="bg-ink text-white font-bold px-10 py-3.5 rounded-full hover:bg-ink/90 active:scale-[0.98] transition-all shadow-lg flex items-center gap-2"
            >
              Continue
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={loadingPhase > 0}
              className="bg-[#d84a3c] text-white font-bold px-10 py-3.5 rounded-full hover:bg-[#c23f33] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2 disabled:opacity-70"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
