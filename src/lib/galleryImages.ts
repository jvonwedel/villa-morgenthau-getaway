
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
    imageUrl: 'https://i.imgur.com/ZeCXciN.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '2',
    title: 'Wintergarten',
    description: 'Lichtdurchfluteter Wintergarten mit Blick auf die Natur',
    imageUrl: 'https://i.imgur.com/GwoECRY.png',
    tags: ['Interior', 'Entspannung']
  },
  {
    id: '3',
    title: 'Kaminbereich',
    description: 'Gemütlicher Kaminbereich mit bequemer Sitzgelegenheit',
    imageUrl: 'https://i.imgur.com/BN3r98z.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '4',
    title: 'Küche',
    description: 'Moderne Küche mit eleganter Marmorarbeitsplatte',
    imageUrl: 'https://i.imgur.com/2bBTwzC.png',
    tags: ['Interior', 'Küche']
  },
  {
    id: '5',
    title: 'Badezimmer',
    description: 'Elegantes Badezimmer mit begehbarer Dusche und Doppelwaschbecken',
    imageUrl: 'https://i.imgur.com/vWCk5m4.png',
    tags: ['Interior', 'Badezimmer']
  },
  {
    id: '6',
    title: 'Schlafzimmer',
    description: 'Helles Schlafzimmer mit modernem Himmelbett',
    imageUrl: 'https://i.imgur.com/6JzS2YQ.png',
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
