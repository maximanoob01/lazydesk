import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Browse portfolios from vetted designers specializing in footwear and leather goods. Filter by expertise, aesthetic, and project availability.'
    },
    {
      num: '02',
      title: 'Connect',
      desc: 'Reach out with your project brief directly. Discuss timelines, deliverables, and expectations before committing.'
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Collaborate seamlessly. From initial sketches to final tech packs, bring your next collection to life with the right talent.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-paper">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-ink mb-6">From idea to collaboration.</h2>
        <p className="text-lg text-slate max-w-2xl mx-auto">A streamlined process designed specifically for the pace and needs of the fashion industry.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 lg:gap-20 relative">
        {/* Subtle connecting line */}
        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-hairline"></div>

        {steps.map((step, i) => (
          <motion.div 
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 mb-8 bg-white rounded-full flex items-center justify-center border border-hairline shadow-sm">
              <span className="font-serif text-5xl font-light text-brass">{step.num}</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-ink mb-4">{step.title}</h3>
            <p className="text-slate leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
