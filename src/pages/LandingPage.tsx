import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DiscoverSection from '../components/DiscoverSection';
import InfoStrip from '../components/InfoStrip';
import HeroCarousel from '../components/HeroCarousel';
import ValuePropPanel from '../components/ValuePropPanel';
import HowItWorks from '../components/HowItWorks';
import FeaturedDesigners from '../components/FeaturedDesigners';
import FeaturedProjects from '../components/FeaturedProjects';
import TrustSection from '../components/TrustSection';
import StatementSection from '../components/StatementSection';
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
        
        <HeroCarousel />
        
        <ValuePropPanel 
          audience="Manufacturers"
          headline="Your next collection shouldn't start with a hiring process."
          ctaText="Find a Designer"
          imageFirst={true}
        />
        
        <HowItWorks />
        
        <FeaturedDesigners />
        
        <ValuePropPanel 
          audience="Designers"
          headline="Put your work in front of the people building what's next."
          ctaText="Showcase Your Work"
          imageFirst={false}
        />
        
        <FeaturedProjects />
        
        <TrustSection />
        
        <StatementSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
