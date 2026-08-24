import { motion } from 'framer-motion';
import { designers } from '../data/designers';

export default function FeaturedDesigners() {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 w-full bg-[#fdfaf6] text-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section matching reference layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Meet the people<br />behind the work.
            </h2>
          </div>
          <div className="md:w-1/3 flex flex-col items-start md:items-end md:text-right">
            <p className="text-lg md:text-xl font-medium text-ink/70 mb-4 max-w-sm leading-relaxed">
              Curated independent designers ready for your next project.
            </p>
            <button className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-b-2 border-ink pb-1 hover:text-ink/60 hover:border-ink/60 transition-colors">
              View all designers <span>→</span>
            </button>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designers.map((designer, i) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col group relative"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-ink/5 mb-4 shadow-sm">
                <img 
                  src={designer.image} 
                  alt={designer.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* White Info Card (overlapping the image slightly, or just below it like the reference) */}
              <div className="bg-white rounded-2xl p-6 shadow-xl relative -mt-16 mx-4 z-10 flex flex-col items-center text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-ink/50 mb-1">
                  {designer.specialty}
                </p>
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  {designer.name}
                </h3>
                
                <p className="text-xs font-semibold text-ink/70 mb-2">
                  {designer.location} {designer.experience && <span className="mx-1.5 opacity-50">•</span>} {designer.experience}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-ink/40 mb-6">
                  {designer.tags.join(' | ')}
                </p>

                {/* Floating Action Button */}
                <button className="absolute -bottom-4 bg-ink text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-ink/80 transition-colors flex items-center gap-2 group-hover:bg-[#d84a3c]">
                  View profile <span className="text-[10px]">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
