import { motion } from 'framer-motion';
import { galleryItems } from '../data/galleryItems';

export default function MasonryGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-ink mb-4">Discover what's being designed.</h2>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`relative group overflow-hidden rounded-[24px] bg-slate/10 break-inside-avoid ${
              item.aspectRatio === 'tall' ? 'aspect-[3/4]' : 
              item.aspectRatio === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
            }`}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src={item.image} 
              alt={item.category || "Design"} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-paper/80 text-sm font-medium mb-1">{item.category}</p>
                <h3 className="text-paper font-serif text-xl font-medium mb-3">{item.designerName}</h3>
                <span className="inline-block text-xs font-medium bg-paper/20 backdrop-blur-md text-paper px-4 py-2 rounded-full border border-paper/30 hover:bg-paper/30 transition-colors">
                  View profile
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
