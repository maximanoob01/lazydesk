import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero2 from '../assets/hero2.png';
import girl1 from '../assets/girl.png';
import girl2 from '../assets/girl2.png';
import boy1 from '../assets/boy1.png';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    /* Full-viewport hero — sits behind the transparent navbar */
    <section className="relative w-full overflow-hidden h-[100vh]">

      {/* ── True full-bleed background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero2}
          alt="Hero background"
          className="w-full h-full object-cover object-top brightness-[0.85]"
        />

        {/* Very subtle dark vignette — bottom only, so image reads clearly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(23,24,26,0.55) 0%, rgba(23,24,26,0.0) 40%)',
          }}
        />
      </div>

      {/* ── girl images — centred, slides up once, then crossfades ── */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{
          y: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.6, delay: 0.1 },
        }}
      >
        <AnimatePresence>
          <motion.img
            key={activeIndex}
            src={activeIndex === 1 ? girl1 : activeIndex === 2 ? girl2 : boy1}
            alt="Featured designer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className={`absolute left-1/2 -translate-x-1/2 w-auto object-contain object-bottom select-none brightness-75 transition-all duration-[800ms] ${activeIndex === 3 ? '-ml-6' : ''} ${
              activeIndex === 1 
                ? '-bottom-4 h-[88%] max-h-[680px]' 
                : activeIndex === 2
                  ? '-bottom-6 h-[80%] max-h-[600px]'
                  : '-bottom-3 h-[68%] max-h-[500px]' // further reduced size for boy1
            }`}
            style={{
              /* Fade feet into the floor */
              maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
              /* Subtle drop shadow for depth */
              filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.4))',
            }}
          />
        </AnimatePresence>

        {/* ── Overlay Text strictly over girl.png ── */}
        <AnimatePresence>
          {activeIndex === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <h2 className="text-white flex flex-col items-center leading-[0.5] mt-56 drop-shadow-2xl">
                <span className="font-sans font-black tracking-tighter text-5xl sm:text-6xl md:text-[5rem] z-10">On</span>
                <span 
                  className="font-light italic lowercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] -mt-2 sm:-mt-3 ml-4 sm:ml-10 z-20" 
                  style={{ fontFamily: 'var(--font-elegant)', fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
                >
                  demand
                </span>
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Sliding Text (Left side) ── */}
      <div className="absolute left-6 sm:left-12 top-[120px] sm:top-[160px] z-20 max-w-[260px] sm:max-w-[340px] pointer-events-none">
        <AnimatePresence>
          {activeIndex === 1 && (
            <motion.div
              key="text1"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute', top: 0, left: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl font-bold text-white/90 leading-snug tracking-wide uppercase">
                New ranges, every season. <br/>
                <span className="text-white/60 mt-1 block">No designer on payroll.</span>
              </p>
            </motion.div>
          )}
          {activeIndex === 2 && (
            <motion.div
              key="text2"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute', top: 0, left: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl font-bold text-white/90 leading-snug tracking-wide uppercase">
                For manufacturers, brands, <br/>
                <span className="text-white/60 mt-1 block">and designers building what's next.</span>
              </p>
            </motion.div>
          )}
          {activeIndex === 3 && (
            <motion.div
              key="text3"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute', top: 0, left: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl font-bold text-white/90 leading-snug tracking-wide uppercase">
                Seamless collaboration. <br/>
                <span className="text-white/60 mt-1 block">Limitless creative potential.</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
