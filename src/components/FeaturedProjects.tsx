import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-paper">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-ink mb-6">Ideas looking for the right hands.</h2>
          <p className="text-lg text-slate">Open project briefs from leading manufacturers.</p>
        </div>
        <button className="flex items-center gap-2 text-ink font-medium hover:text-brass transition-colors pb-2 border-b border-ink hover:border-brass">
          View all projects <span>→</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={i % 2 === 1 ? 'lg:mt-8' : ''} // Subtle staggering
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
