import { motion } from 'framer-motion';

interface ValuePropPanelProps {
  audience: 'Manufacturers' | 'Designers';
  headline: string;
  ctaText: string;
  imageFirst?: boolean;
}

export default function ValuePropPanel({ audience, headline, ctaText, imageFirst = false }: ValuePropPanelProps) {
  const isManufacturers = audience === 'Manufacturers';
  
  const content = (
    <div className={`flex-1 p-10 md:p-16 flex flex-col justify-center ${isManufacturers ? 'bg-ink text-paper' : 'bg-brass/10 text-ink'}`}>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 w-fit ${isManufacturers ? 'bg-paper/10 text-paper' : 'bg-brass/20 text-ink'}`}>
        For {audience}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] mb-8">
        {headline}
      </h2>
      <button className={`flex items-center gap-2 w-fit px-6 py-3 rounded-full font-medium transition-all hover:gap-4 ${isManufacturers ? 'bg-paper text-ink hover:bg-paper/90' : 'bg-ink text-paper hover:bg-ink/90'}`}>
        {ctaText} <span>→</span>
      </button>
    </div>
  );

  const image = (
    <div className="flex-1 min-h-[400px] md:min-h-full relative overflow-hidden">
      <img 
        src={isManufacturers 
          ? "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1200" 
          : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"} 
        alt={audience} 
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row rounded-[40px] overflow-hidden min-h-[500px]"
      >
        {imageFirst ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </motion.div>
    </section>
  );
}
