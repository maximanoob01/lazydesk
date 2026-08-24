import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DiscoverSection from '../components/DiscoverSection';
import InfoStrip from '../components/InfoStrip';
import ForManufacturers from '../components/ForManufacturers';
import HeroCarousel from '../components/HeroCarousel';
import HowItWorks from '../components/HowItWorks';
import FeaturedDesigners from '../components/FeaturedDesigners';
import FeaturedProjects from '../components/FeaturedProjects';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-brass selection:text-ink">
      <Navbar />
      
      <main>
        <Hero />
        
        <DiscoverSection />
        
        <InfoStrip />

        <ForManufacturers />
        
        <HeroCarousel />
        

        <HowItWorks />
        
        <FeaturedDesigners />
        

        <FeaturedProjects />
        
        <TrustSection />

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
