export interface Designer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  image: string;
  tags: string[];
  experience?: string;
  portfolioPreview?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Contract' | 'Full Project' | 'Collection';
  image: string;
  description: string;
  lookingFor: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  aspectRatio: 'tall' | 'square' | 'wide';
  designerName?: string;
  category?: string;
}
