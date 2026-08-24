export default function TrustSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-ink text-paper">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-20 max-w-4xl mx-auto leading-tight">
          We don't list everyone. <br className="hidden md:block"/>
          <span className="text-brass italic">We select the right people.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-hairline/20">
          <div className="pt-8 md:pt-0 md:px-8 first:pl-0 flex flex-col items-center">
            <h3 className="font-serif text-2xl mb-4 text-paper">Curated Talent</h3>
            <p className="text-slate max-w-xs text-center">Every designer is vetted for technical skill, industry experience, and portfolio quality.</p>
          </div>
          
          <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center">
            <h3 className="font-serif text-2xl mb-4 text-paper">Industry Focused</h3>
            <p className="text-slate max-w-xs text-center">Built exclusively for footwear, leather goods, and accessories. We speak your language.</p>
          </div>
          
          <div className="pt-8 md:pt-0 md:px-8 last:pr-0 flex flex-col items-center">
            <h3 className="font-serif text-2xl mb-4 text-paper">Project Ready</h3>
            <p className="text-slate max-w-xs text-center">Clear availability, transparent processes, and professionals ready to start creating.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
