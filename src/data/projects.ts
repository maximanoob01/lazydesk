import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'SS24 Sustainable Sneaker Line',
    category: 'Footwear',
    type: 'Collection',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    description: 'Looking for an experienced footwear designer to lead the development of our SS24 sustainable sneaker collection using recycled materials.',
    lookingFor: 'Lead Footwear Designer'
  },
  {
    id: 'p2',
    title: 'Minimalist Leather Tote Redesign',
    category: 'Accessories',
    type: 'Contract',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
    description: 'We need to redesign our best-selling leather tote to improve structural integrity and reduce weight without compromising the minimalist aesthetic.',
    lookingFor: 'Leather Goods Specialist'
  },
  {
    id: 'p3',
    title: 'Athleisure Tech-Knit Slip-ons',
    category: 'Footwear',
    type: 'Full Project',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800',
    description: 'Seeking a 3D designer and pattern maker for a new tech-knit slip-on shoe targeted at the urban commuter.',
    lookingFor: 'Technical Footwear Designer'
  }
];
