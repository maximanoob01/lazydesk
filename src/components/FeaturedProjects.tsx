import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "SS24 Sustainable Sneaker Line",
    category: "Footwear",
    type: "Collection",
    desc: "Looking for an experienced footwear designer to lead the development of our SS24 sustainable sneaker collection using recycled materials.",
    lookingFor: "Lead Footwear Designer",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Minimalist Leather Tote Redesign",
    category: "Accessories",
    type: "Contract",
    desc: "We need to redesign our best-selling leather tote to improve structural integrity and reduce weight without compromising the minimalist aesthetic.",
    lookingFor: "Leather Goods Specialist",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Athleisure Tech-Knit Slip-ons",
    category: "Footwear",
    type: "Full Project",
    desc: "Seeking a 3D designer and pattern maker for a new tech-knit slip-on shoe targeted at the urban commuter.",
    lookingFor: "Technical Footwear Designer",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-16 lg:mb-24">
          <div className="max-w-3xl flex flex-col items-start gap-4">
            <span className="text-[#D35400] font-bold text-sm sm:text-base uppercase tracking-widest">
              Ideas looking for the right hands.
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05]">
              Open project briefs from leading manufacturers.
            </h2>
          </div>
          
          <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide text-sm hover:bg-gray-200 transition-all duration-300 shadow-xl shrink-0">
            View all projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.9] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#0A0A0A] opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                    {project.type}
                  </span>
                </div>
                
                {/* Bottom Info */}
                <div className="flex flex-col gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-[1.1] text-white group-hover:text-[#D35400] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-5 flex items-center justify-between group-hover:border-white/40 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">
                        Looking for
                      </span>
                      <span className="text-sm font-bold text-white">
                        {project.lookingFor}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:bg-[#D35400] group-hover:text-white transition-colors duration-300 shadow-lg">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
