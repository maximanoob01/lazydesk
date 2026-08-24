import hero1 from '../assets/image.png';
import hero2 from '../assets/hero2.png';

export default function CTASection() {
  return (
    <section className="py-0 flex flex-col md:flex-row min-h-[50vh]">
      <div className="relative flex-1 bg-[#2a2a2a] p-12 md:p-24 flex flex-col justify-center items-center text-center overflow-hidden group">
        <img 
          src={hero1} 
          alt="Manufacturers" 
          className="absolute inset-0 w-full h-full object-contain object-center scale-[1.15] grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.20]"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block drop-shadow-md">For Manufacturers</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight text-white drop-shadow-lg">Find the right talent <br/>for your next project.</h2>
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 shadow-xl">
            Browse Designers
          </button>
        </div>
      </div>
      
      <div className="relative flex-1 bg-[#2a2a2a] p-12 md:p-24 flex flex-col justify-center items-center text-center overflow-hidden group">
        <img 
          src={hero2} 
          alt="Designers" 
          className="absolute inset-0 w-full h-full object-contain object-center scale-[1.05] grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.10]"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block drop-shadow-md">For Designers</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight text-white drop-shadow-lg">Showcase your work <br/>to the right people.</h2>
          <button className="px-8 py-4 bg-[#D35400] text-white rounded-full font-bold hover:bg-[#b04500] transition-all active:scale-95 shadow-xl border border-white/20">
            Join the Network
          </button>
        </div>
      </div>
    </section>
  );
}
