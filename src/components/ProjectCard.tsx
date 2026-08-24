import type { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-hairline p-2 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden rounded-[16px] bg-slate/10">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-ink">
          {project.category}
        </div>
        <div className="absolute top-3 right-3 bg-ink/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-paper">
          {project.type}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-medium text-ink mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-sm text-slate mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mt-auto pt-4 border-t border-hairline flex flex-col gap-1 group-hover:border-brass/30 transition-colors">
          <span className="text-xs text-slate">Looking for</span>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-ink">{project.lookingFor}</span>
            <span className="text-brass transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
