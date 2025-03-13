
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
    title: 'Esstisch',
    description: 'Esstisch mit schönen Hängelampen und Blick in den Garten',
    imageUrl: '/lovable-uploads/77f5b381-22b3-40ec-ab8d-809a786c7d36.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '2',
    title: 'Wintergarten',
    description: 'Lichtdurchfluteter Wintergarten mit Blick auf die Natur',
    imageUrl: '/lovable-uploads/c4ea1cb4-5b7d-426a-8dbe-7fbc14333d6d.png',
    tags: ['Interior', 'Entspannung']
  },
  {
    id: '3',
    title: 'Kaminbereich',
    description: 'Gemütlicher Kaminbereich mit bequemer Sitzgelegenheit',
    imageUrl: '/lovable-uploads/6f373559-6d2a-4374-bdb7-9b2c9ea7e6c7.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '4',
    title: 'Küche',
    description: 'Moderne Küche mit eleganter Marmorarbeitsplatte',
    imageUrl: '/lovable-uploads/d1f7c258-f4ad-438a-9b7a-0ed3d0e66d71.png',
    tags: ['Interior', 'Küche']
  },
  {
    id: '5',
    title: 'Badezimmer',
    description: 'Elegantes Badezimmer mit begehbarer Dusche und Doppelwaschbecken',
    imageUrl: '/lovable-uploads/22698746-7971-4d47-98e0-418cfc76c6ad.png',
    tags: ['Interior', 'Badezimmer']
  },
  {
    id: '6',
    title: 'Schlafzimmer',
    description: 'Helles Schlafzimmer mit modernem Himmelbett',
    imageUrl: '/lovable-uploads/a8fc63bd-81c0-4687-8fe2-26951d84fb54.png',
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
