import { motion } from 'framer-motion';
import login1 from '../assets/login1.png';
import img1 from '../assets/1.png';
import boy2 from '../assets/boy2.png';

export default function DiscoverSection() {
  return (
    <section className="w-full bg-[#fdfaf6] py-16 px-4 sm:px-8 lg:px-16 text-ink overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto leading-tight"
          >
            Discover the people behind the next collection.
          </motion.h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-stretch">
          
          {/* Left Column (For Designers) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col group"
          >
            <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden mb-5">
              <img 
                src={login1} 
                alt="For Designers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-2">For Designers</h3>
              <p className="text-ink/70 text-base sm:text-lg font-medium leading-relaxed">
                Showcase your work. Get discovered. Find projects.
              </p>
            </div>
          </motion.div>

          {/* Center Column (General / Explore) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-end w-full h-[300px] sm:h-[360px] md:h-auto rounded-3xl overflow-hidden group shadow-xl"
          >
            <img 
              src={img1} 
              alt="Explore curated designers" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-6 md:p-8 text-white">
              <p className="text-xl sm:text-2xl font-serif leading-tight">
                Browse curated designers.<br />
                <span className="italic text-paper font-light">Explore their work.</span><br />
                Find the right creative partner.
              </p>
            </div>
          </motion.div>

          {/* Right Column (For Manufacturers) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col group"
          >
            <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden mb-5">
              <img 
                src={boy2} 
                alt="For Manufacturers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-2">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-2">For Manufacturers</h3>
              <p className="text-ink/70 text-base sm:text-lg font-medium leading-relaxed">
                Discover talent. Post a brief. Build your next collection.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
