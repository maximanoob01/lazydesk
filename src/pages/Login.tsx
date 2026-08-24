import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthSwitch } from '../components/ui/auth-switch';
import login1 from '../assets/login1.png';
import img1 from '../assets/1.png';

type AuthMode = 'login' | 'signup';
type UserRole = 'designer' | 'manufacturer';

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('signup');
  const [role, setRole] = useState<UserRole>('designer');
  const [otpSent, setOtpSent] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  const handleVerify = () => {
    if (role === 'designer' && mode === 'signup') {
      navigate('/onboarding/designer');
    } else {
      // Temporary fallback for manufacturer or regular login
      navigate('/'); 
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center p-4 sm:p-8 font-sans text-ink relative overflow-hidden">
      
      {/* ── Dynamic Ambient Background ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${role}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img 
            src={role === 'designer' ? login1 : img1}
            alt="Ambient Background"
            className="w-full h-full object-cover opacity-50 blur-xl scale-105"
          />
          {/* Fades to solid white/light on the right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fdfaf6]/70 to-[#fdfaf6]" />
        </motion.div>
      </AnimatePresence>

      {/* ── Floating Main Card ── */}
      <div className="w-full max-w-[900px] h-[640px] max-h-[95vh] bg-paper rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden relative z-10">
        
        {/* Back Button Overlay */}
        <div className="absolute top-6 left-6 z-50">
          <Link to="/" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg">
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* ── Left Side: Dynamic Image Panel (Hidden on Mobile) ── */}
        <div className="hidden lg:block lg:w-[55%] relative bg-ink overflow-hidden rounded-l-[2.5rem]">
          <AnimatePresence mode="wait">
            <motion.img
              key={role}
              src={role === 'designer' ? login1 : img1}
              alt="Editorial background"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Dimming Overlay */}
          <div className="absolute inset-0 bg-ink/60 z-0" />
          
          {/* Subtle gradient overlay to match reference dark vibes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0" />
          
          {/* Top Text Overlay */}
          <div className="absolute top-12 left-0 right-0 flex flex-col items-center justify-start text-white z-10 px-8 text-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`top-text-${role}`}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-black mb-1">
                  Hi {role === 'designer' ? 'Designer' : 'Manufacturer'}
                </h2>
                <p className="text-white/70 text-sm font-medium">
                  Welcome to the Room
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Centered Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-8 text-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`center-text-${mode}-${otpSent}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 drop-shadow-xl whitespace-nowrap">
                  {otpSent 
                    ? 'Check your inbox'
                    : mode === 'login' 
                      ? 'Welcome back' 
                      : 'Create your account'}
                </h1>
                <p className="text-white/80 text-sm sm:text-base font-medium drop-shadow-md max-w-sm">
                  {otpSent 
                    ? 'We sent a temporary login code to verify your identity.' 
                    : 'Enter your details to access the exclusive community and get started.'}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer on Image */}
          <div className="absolute bottom-10 left-10 flex items-center gap-4 z-10">
             <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/20 backdrop-blur-md">
                {/* Dummy avatar placeholder mimicking reference */}
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
             </div>
             <div className="text-white">
                <p className="font-bold text-sm leading-tight">L'Équipe</p>
                <p className="text-white/60 text-xs">Platform & Curation</p>
             </div>
          </div>
        </div>

        {/* ── Right Side: Form Container ── */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-10 py-6 relative bg-[#fdfaf6] overflow-hidden">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >

            {/* Role Switch (Only in Signup Mode and before OTP) */}
            <AnimatePresence mode="wait">
              {mode === 'signup' && !otpSent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 overflow-hidden"
                >
                  <AuthSwitch role={role} onChange={setRole} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Form */}
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOtpSent(true); }}>
              
              <AnimatePresence mode="wait">
                {!otpSent ? (
                  <motion.div
                    key="auth-fields"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    {mode === 'signup' && (
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white border border-ink/10 rounded-xl py-3 px-4 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink/20 transition-all placeholder:text-ink/40 font-medium shadow-sm"
                        placeholder={role === 'designer' ? 'Full Name' : 'Company Name'}
                      />
                    )}

                    <input 
                      type="email" 
                      required
                      className="w-full bg-white border border-ink/10 rounded-xl py-3 px-4 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink/20 transition-all placeholder:text-ink/40 font-medium shadow-sm"
                      placeholder="Email address"
                    />

                    <input 
                      type="tel" 
                      required
                      className="w-full bg-white border border-ink/10 rounded-xl py-3 px-4 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink/20 transition-all placeholder:text-ink/40 font-medium shadow-sm"
                      placeholder="Phone number"
                    />

                    {/* Keep me signed in Checkbox */}
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => setKeepSignedIn(!keepSignedIn)}
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${keepSignedIn ? 'bg-ink border-ink text-white' : 'border-ink/20 bg-white'}`}
                      >
                        {keepSignedIn && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        )}
                      </button>
                      <span className="text-sm font-medium text-ink/70 cursor-pointer" onClick={() => setKeepSignedIn(!keepSignedIn)}>
                        Keep me signed in
                      </span>
                    </div>

                    {/* Separator */}
                    <div className="relative py-4 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="w-full border-t border-ink/10"></div>
                      </div>
                      <div className="relative bg-[#fdfaf6] px-4 text-xs font-semibold text-ink/40 uppercase tracking-widest">
                        or
                      </div>
                    </div>

                    {/* Google Button */}
                    <button 
                      type="button"
                      className="w-full bg-white border border-ink/10 text-ink font-semibold py-3.5 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-sm"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Continue with Google
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="otp-fields"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 pb-8"
                  >
                    <div className="text-center mb-6">
                      <p className="text-sm font-medium text-ink/70">
                        Enter the 6-digit code sent to your email or phone.
                      </p>
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-10 h-12 sm:w-12 sm:h-14 bg-white border border-ink/10 rounded-xl text-center text-xl font-bold text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 shadow-sm"
                        />
                      ))}
                    </div>
                    <div className="text-center mt-6">
                      <button type="button" className="text-xs font-bold text-ink/50 hover:text-ink transition-colors">
                        Resend Code
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Primary Button */}
              <button 
                type={otpSent ? "button" : "submit"}
                onClick={otpSent ? handleVerify : undefined}
                className="w-full bg-ink text-white font-bold py-3.5 rounded-xl hover:bg-ink/90 active:scale-[0.98] transition-all flex items-center justify-center shadow-lg mt-2"
              >
                {otpSent ? 'Verify & Continue' : mode === 'login' ? 'Send OTP Code' : 'Send OTP Code'}
              </button>
            </form>

            {/* Toggle Mode Text (Hidden during OTP) */}
            {!otpSent && (
              <div className="mt-8 text-center">
                <p className="text-ink/60 font-medium text-sm">
                  {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button 
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className="text-[#d84a3c] font-bold hover:underline underline-offset-4"
                  >
                    {mode === 'login' ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            )}

            {/* Social Icons Footer */}
            <div className="mt-8 flex items-center justify-center gap-6 text-ink/40">
              <a href="#" className="hover:text-ink transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-ink transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-ink transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-ink transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
