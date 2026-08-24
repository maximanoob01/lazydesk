export default function Footer() {
  return (
    <footer className="bg-[#4a1b15] text-[#fdfaf6] pt-16 pb-6 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#b59a76] selection:text-[#4a1b15]">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-between min-h-[500px]">
        
        {/* Top Section: Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/90">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Discover</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/90">Manufacturers</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Post a Project</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Designers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturer FAQ</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/90">Designers</h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Join the Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Designer FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:pl-8">
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white/90">Join The Club</h4>
            <p className="text-sm text-white/70 mb-4 max-w-sm leading-relaxed">
              Receive exclusive tips and industry insights from The Range Room. It's free!
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm outline-none focus:border-white/50 text-white placeholder:text-white/40 flex-1 min-w-0"
              />
              <button 
                type="submit" 
                className="bg-[#c2f277] text-[#4a1b15] font-black uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-[#aee063] transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
            <p className="text-[10px] text-white/50 mb-6">
              By signing up, you agree to our privacy policy.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Massive Title & Legal */}
        <div className="w-full flex flex-col items-center justify-end mt-auto">
          {/* Massive Text filling container width */}
          <div className="w-full overflow-hidden flex justify-center mb-6">
            <h1 className="text-[14vw] sm:text-[13vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-white whitespace-nowrap select-none">
              The Range Room
            </h1>
          </div>

          {/* Copyright & Legal */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-xs font-medium text-white/50 pt-6 border-t border-white/10">
            <div className="max-w-xl">
              <p className="mb-2">© {new Date().getFullYear()} The Range Room. All rights reserved.</p>
              <p className="text-[10px] leading-relaxed">
                The Range Room is a platform designed to connect footwear and accessory designers with manufacturers. 
                Registered under the Global Design Talent Registry. All showcased portfolios remain the intellectual property of their respective creators.
              </p>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 shrink-0">
              <a href="#" className="hover:text-white transition-colors">Legal notices</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
