import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value }: { value: string }) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, numValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function InfoStrip() {
  const items = [
    { title: '25+', desc: 'Curated Designers' },
    { title: '50+', desc: 'Industry Connections' },
    { title: '15+', desc: 'Projects Posted' },
    { title: '10+', desc: 'Collections Being Built' }
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
              <AnimatedCounter value={item.title} />
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
