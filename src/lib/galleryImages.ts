
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
  // Interior Category
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
  
  // Garten & Umgebung Category
  {
    id: '7',
    title: 'Landschaft mit See',
    description: 'Malerische Landschaft mit See und Bergen',
    imageUrl: 'https://imgur.com/cJnKknJ.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '8',
    title: 'Wasserfall',
    description: 'Wasserfall in der Nähe der Villa',
    imageUrl: 'https://imgur.com/uxyoic3.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '9',
    title: 'Ozean',
    description: 'Ozeanwelle am Strand',
    imageUrl: 'https://imgur.com/cQPT9Oe.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '10',
    title: 'Kiefernwälder',
    description: 'Kiefernwälder in der Umgebung',
    imageUrl: 'https://imgur.com/hEPDWAw.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '11',
    title: 'Berge im Sonnenlicht',
    description: 'Landschaftsfotografie von Bergen im Sonnenlicht',
    imageUrl: 'https://imgur.com/GC8P4Cs.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '12',
    title: 'Nebliger Berggipfel',
    description: 'Nebliger Berggipfel zum Entspannen',
    imageUrl: 'https://imgur.com/v0ReBG3.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '13',
    title: 'Wald im Sonnenlicht',
    description: 'Wald im Sonnenlicht',
    imageUrl: 'https://imgur.com/MYH921i.jpg',
    tags: ['Garten & Umgebung']
  },
  {
    id: '14',
    title: 'Sonnenstrahlen im Wald',
    description: 'Gelbes Licht zwischen Bäumen',
    imageUrl: 'https://imgur.com/SQ5ymrP.jpg',
    tags: ['Garten & Umgebung']
  },
  
  // Aktivitäten Category
  {
    id: '15',
    title: 'Wanderweg',
    description: 'Wanderweg durch den Wald mit Felsen',
    imageUrl: 'https://imgur.com/vKf0AhZ.jpg',
    tags: ['Aktivitäten']
  },
  {
    id: '16',
    title: 'Fluss mit Felsformationen',
    description: 'Fluss umgeben von Felsformationen',
    imageUrl: 'https://imgur.com/tWAJwzF.jpg',
    tags: ['Aktivitäten']
  },
  {
    id: '17',
    title: 'Berglandschaft',
    description: 'Fluss zwischen Bergen unter weißem Himmel',
    imageUrl: 'https://imgur.com/HJfsdjk.jpg',
    tags: ['Aktivitäten']
  },
  {
    id: '18',
    title: 'Alpenlandschaft',
    description: 'Berglandschaft der Alpen',
    imageUrl: 'https://imgur.com/fWB8nPL.jpg',
    tags: ['Aktivitäten']
  },
  
  // Jahreszeiten Category
  {
    id: '19',
    title: 'Wildtiere',
    description: 'Wildtiere auf einer Wiese',
    imageUrl: 'https://imgur.com/Ra7t2Jm.jpg',
    tags: ['Jahreszeiten']
  },
  {
    id: '20',
    title: 'Schafherde',
    description: 'Eine Schafherde auf der Weide',
    imageUrl: 'https://imgur.com/q3e67S1.jpg',
    tags: ['Jahreszeiten']
  },
  {
    id: '21',
    title: 'Rehe im Wald',
    description: 'Rehe im Wald',
    imageUrl: 'https://imgur.com/tJ12hM9.jpg',
    tags: ['Jahreszeiten']
  },
  {
    id: '22',
    title: 'Familie am Strand',
    description: 'Familie am Strand',
    imageUrl: 'https://imgur.com/MLLScuV.jpg',
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
