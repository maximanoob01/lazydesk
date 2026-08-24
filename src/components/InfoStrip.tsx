import { motion } from 'framer-motion';

export default function InfoStrip() {
  const items = [
    { title: 'Designers', desc: 'Showcase your work' },
    { title: 'Manufacturers', desc: 'Find the right talent' },
    { title: 'Projects', desc: 'Hire for specific needs' },
    { title: 'Collections', desc: 'Turn ideas into products' }
  ];

  return (
    <section className="w-full bg-[#e3d1be] border-y border-[#d4bb9f] py-12 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex-1 min-w-[200px] text-center md:text-left flex flex-col items-center md:items-start text-[#7a1f1f]"
          >
            <h4 className="text-xl md:text-3xl font-black uppercase tracking-widest mb-2">
              {item.title}
            </h4>
            <p className="text-base md:text-lg font-bold opacity-90">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
