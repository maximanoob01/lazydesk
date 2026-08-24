import { motion } from 'framer-motion';

export default function StatementSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2000" 
          alt="Craftsmanship" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-paper/80 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brass font-medium tracking-widest uppercase text-sm mb-8 block">Our Philosophy</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-ink leading-[1.1]">
            Good products start <br className="hidden md:block"/> with good design.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
