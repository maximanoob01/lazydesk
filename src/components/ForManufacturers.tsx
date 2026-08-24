import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import manufacturerImg from '../assets/designer/dd.png';

export default function ForManufacturers() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));

  const renderBlock0 = () => (
    <motion.div
      key="block-0"
      layoutId="block-0"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full flex flex-col items-start pt-4 lg:pt-12"
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.1em] text-[#7a1f1f] mb-6 whitespace-nowrap">
        For Manufacturers
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-ink mb-8">
        Find the right designer for your next collection.
      </h2>
      <p className="text-lg md:text-xl font-medium text-ink/75 leading-relaxed max-w-xl mb-12">
        Building a full-time design team for every collection doesn’t always make sense. The Range Room connects you with vetted footwear and accessories designers who are ready to work on your project.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 w-full">
        <Link 
          to="/login"
          className="group flex items-center justify-center gap-3 bg-[#4a1b15] text-[#fdfaf6] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#7a1f1f] transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Find a Designer
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </motion.div>
  );

  const renderBlock1 = () => (
    <motion.div
      key="block-1"
      layoutId="block-1"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full flex flex-col items-start pt-4 lg:pt-12"
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.1em] text-[#7a1f1f] mb-6 whitespace-nowrap">
        For Manufacturers
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-ink mb-8">
        Why manufacturers choose The Range Room
      </h2>
      <div className="flex flex-col gap-6 mb-12">
        {[
          {
            title: "Curated designers, not endless profiles",
            desc: "Every designer on The Range Room is reviewed and interviewed before joining. Spend less time searching and more time finding someone who fits your project."
          },
          {
            title: "Hire for the project, not the year",
            desc: "Whether you need a designer for one product, a seasonal collection, or a complete range, hire for exactly what you need — without committing to a full-time team."
          },
          {
            title: "Pay as the work comes together",
            desc: "Projects are broken into clear stages, from booking and sketches to tech packs and final delivery. You stay in control as the work progresses."
          }
        ].map((feat, i) => (
          <div key={i} className="flex flex-col">
            <h4 className="text-lg font-black text-[#7a1f1f] mb-1">{feat.title}</h4>
            <p className="text-base font-medium text-ink/70 leading-relaxed max-w-xl">{feat.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderBlock2 = () => (
    <motion.div
      key="block-2"
      layoutId="block-2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full flex flex-col items-start pt-4 lg:pt-12"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-ink mb-8">
        Smart ways to discover
      </h2>
      <p className="text-lg md:text-xl font-medium text-ink/75 leading-relaxed max-w-xl mb-12">
        Get matched with relevant designers or post your project and let designers come to you.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 w-full">
        <Link 
          to="/login"
          className="group flex items-center justify-center gap-3 bg-[#4a1b15] text-[#fdfaf6] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#7a1f1f] transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Find a Designer today
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
      <p className="text-sm font-bold text-ink/50 uppercase tracking-widest max-w-sm border-t border-hairline/50 pt-6">
        Curated talent · Project-based hiring · Built for footwear & accessories
      </p>
    </motion.div>
  );

  const renderImage = () => (
    <motion.div
      key="image-block"
      layoutId="image-block"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full flex justify-center items-center"
    >
      <div className="relative w-full max-w-2xl lg:scale-110">
        <img 
          src={manufacturerImg} 
          alt="Manufacturer" 
          className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-[1.03]"
        />
      </div>
    </motion.div>
  );

  // Use a flat grid to allow Framer Motion layoutId to dynamically position components across columns
  const currentBlocks = () => {
    if (activeSlide === 0) return [renderBlock0(), renderImage()];
    if (activeSlide === 1) return [renderImage(), renderBlock1()];
    if (activeSlide === 2) return [renderBlock1(), renderBlock2()];
    return [];
  };

  return (
    <section id="manufacturers" className="w-full bg-[#fdfaf6] py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-hairline relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative pt-16 lg:pt-0">
        
        {/* Carousel Controls - Top Right */}
        <div className="absolute top-0 right-4 sm:right-8 lg:right-12 flex items-center justify-between w-[160px] border border-hairline/30 rounded-full p-1.5 bg-white/50 shadow-sm backdrop-blur-sm z-20">
          <button onClick={prevSlide} className="p-2 rounded-full hover:bg-paper/40 transition-colors text-ink">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSlide === idx ? 'w-6 bg-[#4a1b15]' : 'bg-ink/20 hover:bg-ink/40'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full hover:bg-paper/40 transition-colors text-ink">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {currentBlocks()}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
