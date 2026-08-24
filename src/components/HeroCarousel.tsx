import { CoverflowCarousel } from './ui/coverflow-carousel';
import type { CoverflowSlide } from './ui/coverflow-carousel';

// Uses the same high-quality Unsplash images already referenced in the project data
const DesignerBadge = ({ name, flag, code }: { name: string; flag: string; code: string }) => (
  <span className="inline-flex items-center gap-2">
    <span>{name}</span>
    <span className="inline-flex items-center gap-1 px-1.5 py-[2px] bg-ink/10 border border-ink/20 rounded-md font-bold text-[10px] tracking-widest text-ink/80 uppercase shadow-sm">
      <span>{flag}</span>
      <span>{code}</span>
    </span>
  </span>
);

const SLIDES: CoverflowSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Red Nike sneaker — bold athletic footwear design',
    title: '“I’m drawn to designs that feel effortless, but never ordinary.”',
    subtitle: <DesignerBadge name="Aarav Mehta" flag="🇮🇳" code="IN" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Close-up of luxury leather bag — structured and minimal',
    title: '“Every collection starts with a detail worth noticing.”',
    subtitle: <DesignerBadge name="Mira Kapoor" flag="🇮🇳" code="IN" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'High fashion pump on a reflective surface',
    title: '“I like turning everyday ideas into pieces people want to keep.”',
    subtitle: <DesignerBadge name="Rohan Malhotra" flag="🇮🇳" code="IN" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1628149462198-508e332899dd?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Folded leather wallet with clean stitching',
    title: '“For me, good design is where function meets emotion.”',
    subtitle: <DesignerBadge name="Ananya Rao" flag="🇮🇳" code="IN" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Colourful lifestyle sneakers laid flat',
    title: '“I design with the belief that simplicity can still make a statement.”',
    subtitle: <DesignerBadge name="Luca Bianchi" flag="🇮🇹" code="IT" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'White sustainable sneaker concept on clean background',
    title: '“Materials have a language of their own. I let them speak first.”',
    subtitle: <DesignerBadge name="Giulia Romano" flag="🇮🇹" code="IT" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Brass eyelet hardware detail on a leather accessory',
    title: '“A great product begins with a strong idea and a sharper eye.”',
    subtitle: <DesignerBadge name="Matteo Ferraro" flag="🇮🇹" code="IT" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Structured leather handbag resting on a surface',
    title: '“I’m interested in creating pieces that feel timeless, not temporary.”',
    subtitle: <DesignerBadge name="Sofia Conti" flag="🇮🇹" code="IT" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Black athletic shoes on a textured surface',
    title: '“The smallest detail can change the entire character of a collection.”',
    subtitle: <DesignerBadge name="Elena Rossi" flag="🇮🇹" code="IT" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Minimalist white sneaker side profile',
    title: '“I love finding the balance between what feels familiar and what feels new.”',
    subtitle: <DesignerBadge name="Oliver Bennett" flag="🇬🇧" code="UK" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Leather crossbody bag with contrast stitching',
    title: '“My best ideas usually begin with a question: what could this become?”',
    subtitle: <DesignerBadge name="Amelia Carter" flag="🇺🇸" code="US" />,
    meta: [],
  },
  {
    src: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=640&h=640',
    alt: 'Collection of leather goods and accessories flat-lay',
    title: '“Design is about giving an idea a form people can experience.”',
    subtitle: <DesignerBadge name="Noah Laurent" flag="🇫🇷" code="FR" />,
    meta: [],
  },
];

export default function HeroCarousel() {
  return (
    <section className="py-6 pb-16 bg-[#4a1b15] text-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#fdfaf6] mb-3">
          Discover the collection
        </h2>
        <p className="text-[#fdfaf6]/70 text-base md:text-lg font-medium max-w-2xl mx-auto">
          Explore the minds shaping the future of design.
        </p>
      </div>
      <CoverflowCarousel
        slides={SLIDES}
        showCaption
        showNavigation
        showPagination
        autoPlay={3000}
        cardWidth="clamp(160px, 24vw, 280px)"
        rotate={44}
        depth={0.55}
        label="Designer portfolio showcase"
        className="pb-4"
      />
    </section>
  );
}
