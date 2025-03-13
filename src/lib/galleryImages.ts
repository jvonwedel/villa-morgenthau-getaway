
// Type definitions for gallery images
export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags: string[];
}

// Collection of gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Essbereich',
    description: 'Heller Essbereich mit Designerlampen und großem Esstisch aus Massivholz',
    imageUrl: '/lovable-uploads/3c957d9d-f72f-417e-a5b4-cfd00574909d.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '2',
    title: 'Wintergarten',
    description: 'Lichtdurchfluteter Wintergarten mit Blick auf die Natur',
    imageUrl: '/lovable-uploads/5075dc92-2d80-4397-9783-ef683a9b4b1b.png',
    tags: ['Interior', 'Entspannung']
  },
  {
    id: '3',
    title: 'Kaminbereich',
    description: 'Gemütlicher Kaminbereich mit bequemer Sitzgelegenheit',
    imageUrl: '/lovable-uploads/62695490-bf30-44c0-8597-9f167833fab9.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '4',
    title: 'Küche',
    description: 'Moderne Küche mit eleganter Marmorarbeitsplatte',
    imageUrl: '/lovable-uploads/71dbca85-9bcc-455e-a5f0-d3f2805eec03.png',
    tags: ['Interior', 'Küche']
  },
  {
    id: '5',
    title: 'Badezimmer',
    description: 'Elegantes Badezimmer mit begehbarer Dusche und Doppelwaschbecken',
    imageUrl: '/lovable-uploads/13f904f9-f40c-4e0f-a509-815c2d2221ce.png',
    tags: ['Interior', 'Badezimmer']
  },
  {
    id: '6',
    title: 'Schlafzimmer',
    description: 'Helles Schlafzimmer mit modernem Himmelbett',
    imageUrl: '/lovable-uploads/b738799a-4fa8-4d26-abda-46f6d01759b0.jpg',
    tags: ['Interior', 'Schlafzimmer']
  },
  {
    id: '7',
    title: 'Villa Exterior',
    description: 'Außenansicht der Villa umgeben von Natur',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior']
  },
  {
    id: '8',
    title: 'Garten',
    description: 'Weitläufiger Garten mit Sitzmöglichkeiten',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior', 'Garten']
  },
  {
    id: '9',
    title: 'Umgebung',
    description: 'Naturbelassene Umgebung rund um die Villa',
    imageUrl: '/placeholder.svg',
    tags: ['Surroundings']
  },
  {
    id: '10',
    title: 'Terrassenblick',
    description: 'Ausblick von der Terrasse auf die umliegende Landschaft',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior', 'Surroundings']
  },
];

// Helper function to fetch all gallery images
export const fetchGalleryImages = (): GalleryImage[] => {
  return galleryImages;
};

// Helper function to fetch images by tag
export const fetchGalleryImagesByTag = (tag: string): GalleryImage[] => {
  return galleryImages.filter(image => image.tags.includes(tag));
};
