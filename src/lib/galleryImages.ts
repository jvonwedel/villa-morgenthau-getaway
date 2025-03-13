
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
    imageUrl: '/lovable-uploads/8b9bd91c-9180-4a04-a2d7-0d7802bf82eb.png',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '2',
    title: 'Wintergarten',
    description: 'Lichtdurchfluteter Wintergarten mit Blick auf die Natur',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop',
    tags: ['Interior', 'Entspannung']
  },
  {
    id: '3',
    title: 'Kaminbereich',
    description: 'Gemütlicher Kaminbereich mit bequemer Sitzgelegenheit',
    imageUrl: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop',
    tags: ['Interior', 'Wohnbereich']
  },
  {
    id: '4',
    title: 'Küche',
    description: 'Moderne Küche mit eleganter Marmorarbeitsplatte',
    imageUrl: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&auto=format&fit=crop',
    tags: ['Interior', 'Küche']
  },
  {
    id: '5',
    title: 'Badezimmer',
    description: 'Elegantes Badezimmer mit begehbarer Dusche und Doppelwaschbecken',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop',
    tags: ['Interior', 'Badezimmer']
  },
  {
    id: '6',
    title: 'Schlafzimmer',
    description: 'Helles Schlafzimmer mit modernem Himmelbett',
    imageUrl: 'https://images.unsplash.com/photo-1617325247661-675ab4b64b72?w=800&auto=format&fit=crop',
    tags: ['Interior', 'Schlafzimmer']
  },
  {
    id: '7',
    title: 'Villa Exterior',
    description: 'Außenansicht der Villa umgeben von Natur',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
    tags: ['Exterior']
  },
  {
    id: '8',
    title: 'Garten',
    description: 'Weitläufiger Garten mit Sitzmöglichkeiten',
    imageUrl: 'https://images.unsplash.com/photo-1551410224-699683e15636?w=800&auto=format&fit=crop',
    tags: ['Exterior', 'Garten']
  },
  {
    id: '9',
    title: 'Umgebung',
    description: 'Naturbelassene Umgebung rund um die Villa',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
    tags: ['Surroundings']
  },
  {
    id: '10',
    title: 'Terrassenblick',
    description: 'Ausblick von der Terrasse auf die umliegende Landschaft',
    imageUrl: 'https://images.unsplash.com/photo-1617653695386-522282c9041e?w=800&auto=format&fit=crop',
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
