
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
    tags: ['Interior']
  },
  {
    id: '2',
    title: 'Wintergarten',
    description: 'Lichtdurchfluteter Wintergarten mit Blick auf die Natur',
    imageUrl: 'https://i.imgur.com/GwoECRY.png',
    tags: ['Interior']
  },
  {
    id: '3',
    title: 'Kaminbereich',
    description: 'Gemütlicher Kaminbereich mit bequemer Sitzgelegenheit',
    imageUrl: 'https://i.imgur.com/BN3r98z.png',
    tags: ['Interior']
  },
  {
    id: '4',
    title: 'Küche',
    description: 'Moderne Küche mit eleganter Marmorarbeitsplatte',
    imageUrl: 'https://i.imgur.com/2bBTwzC.png',
    tags: ['Interior']
  },
  {
    id: '5',
    title: 'Badezimmer',
    description: 'Elegantes Badezimmer mit begehbarer Dusche und Doppelwaschbecken',
    imageUrl: 'https://i.imgur.com/vWCk5m4.png',
    tags: ['Interior']
  },
  {
    id: '6',
    title: 'Schlafzimmer',
    description: 'Helles Schlafzimmer mit modernem Himmelbett',
    imageUrl: 'https://i.imgur.com/6JzS2YQ.png',
    tags: ['Interior']
  },
  {
    id: '7',
    title: 'Garten',
    description: 'Blühender Garten mit verschiedenen Pflanzen und Sitzgelegenheiten',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    tags: ['Outdoor']
  },
  {
    id: '8',
    title: 'Terrasse',
    description: 'Gemütliche Terrasse mit Blick auf den Garten',
    imageUrl: '/placeholder.svg',
    tags: ['Outdoor']
  },
  {
    id: '9',
    title: 'Seeblick',
    description: 'Atemberaubender Blick auf den nahegelegenen See',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    tags: ['Umgebung']
  },
  {
    id: '10',
    title: 'Waldweg',
    description: 'Idyllischer Waldweg in der Nähe der Villa',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    tags: ['Umgebung']
  },
  {
    id: '11',
    title: 'Tierwelt',
    description: 'Die lokale Tierwelt in ihrer natürlichen Umgebung',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    tags: ['Umgebung']
  },
  {
    id: '12',
    title: 'Frühling',
    description: 'Villa Morgenthau umgeben von Frühlingsblumen',
    imageUrl: '/placeholder.svg',
    tags: ['Jahreszeiten']
  },
  {
    id: '13',
    title: 'Sommer',
    description: 'Sonnige Sommertage in der Villa Morgenthau',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    tags: ['Jahreszeiten']
  },
  {
    id: '14',
    title: 'Herbst',
    description: 'Die Villa im goldenen Herbstlicht',
    imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    tags: ['Jahreszeiten']
  },
  {
    id: '15',
    title: 'Winter',
    description: 'Verschneite Winterlandschaft rund um die Villa',
    imageUrl: '/placeholder.svg',
    tags: ['Jahreszeiten']
  }
];

// Helper function to fetch all gallery images
export const fetchGalleryImages = (): GalleryImage[] => {
  return galleryImages;
};

// Helper function to fetch images by tag
export const fetchGalleryImagesByTag = (tag: string): GalleryImage[] => {
  return galleryImages.filter(image => image.tags.includes(tag));
};
