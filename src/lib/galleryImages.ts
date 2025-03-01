
// Type definitions for gallery images
export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags: string[];
}

// Collection of pre-defined images from Unsplash
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Villa Exterior',
    description: 'Beautiful view of the villa surrounded by nature',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    tags: ['Exterior']
  },
  {
    id: '2',
    title: 'Spacious Living Room',
    description: 'Elegant and comfortable living space for relaxation',
    imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098',
    tags: ['Interior']
  },
  {
    id: '3',
    title: 'Mountain View',
    description: 'Breathtaking view from the villa terrace',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    tags: ['Surroundings']
  },
  {
    id: '4',
    title: 'Villa Gardens',
    description: 'Lush gardens surrounding the property',
    imageUrl: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
    tags: ['Exterior', 'Surroundings']
  },
  {
    id: '5',
    title: 'Dining Space',
    description: 'Perfect area for family meals',
    imageUrl: 'https://images.unsplash.com/photo-1501254667263-b4867b4f73bf',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '6',
    title: 'Cozy Bedroom',
    description: 'Comfortable bedroom with natural light',
    imageUrl: 'https://images.unsplash.com/photo-1600607687126-8a3414349a51',
    tags: ['Interior']
  },
  {
    id: '7',
    title: 'Modern Kitchen',
    description: 'Fully equipped kitchen for culinary adventures',
    imageUrl: 'https://images.unsplash.com/photo-1582913130063-8318983e1708',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '8',
    title: 'Swimming Pool',
    description: 'Relaxing pool area for hot summer days',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    tags: ['Exterior', 'Amenities']
  },
  {
    id: '9',
    title: 'Bathroom',
    description: 'Luxurious bathroom with premium fixtures',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '10',
    title: 'Terrace View',
    description: 'Perfect spot for morning coffee',
    imageUrl: 'https://images.unsplash.com/photo-1517465958106-06dc5ca5f8b4',
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
