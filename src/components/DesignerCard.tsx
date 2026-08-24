import type { Designer } from '../types';
import { motion } from 'framer-motion';

interface DesignerCardProps {
  designer: Designer;
}

export default function DesignerCard({ designer }: DesignerCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-hairline shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-slate/10">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={designer.image} 
          alt={designer.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-ink">
          {designer.location}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium text-ink mb-1">{designer.name}</h3>
        <p className="text-sm text-slate mb-4">{designer.specialty}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {designer.tags.map(tag => (
            <span key={tag} className="text-xs font-medium bg-paper text-ink px-3 py-1 rounded-full border border-hairline">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-hairline flex justify-between items-center group-hover:border-brass/30 transition-colors">
          <span className="text-sm font-medium text-ink">View profile</span>
          <span className="text-brass transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
}
