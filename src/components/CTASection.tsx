export default function CTASection() {
  return (
    <section className="py-0 flex flex-col md:flex-row min-h-[50vh]">
      <div className="flex-1 bg-ink text-paper p-12 md:p-24 flex flex-col justify-center items-center text-center">
        <span className="text-paper/60 text-sm font-medium uppercase tracking-widest mb-4 block">For Manufacturers</span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">Find the right talent <br/>for your next project.</h2>
        <button className="px-8 py-4 bg-paper text-ink rounded-full font-medium hover:bg-paper/90 transition-all active:scale-95 shadow-lg">
          Browse Designers
        </button>
      </div>
      
      <div className="flex-1 bg-brass text-ink p-12 md:p-24 flex flex-col justify-center items-center text-center">
        <span className="text-ink/60 text-sm font-medium uppercase tracking-widest mb-4 block">For Designers</span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">Showcase your work <br/>to the right people.</h2>
        <button className="px-8 py-4 bg-ink text-paper rounded-full font-medium hover:bg-ink/90 transition-all active:scale-95 shadow-lg">
          Join the Network
        </button>
      </div>
    </section>
  );
}
