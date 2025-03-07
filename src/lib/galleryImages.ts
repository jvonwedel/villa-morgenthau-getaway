
// Type definitions for gallery images
export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags: string[];
}

// Collection of placeholder images
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Villa Exterior',
    description: 'Beautiful view of the villa surrounded by nature',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior']
  },
  {
    id: '2',
    title: 'Spacious Living Room',
    description: 'Elegant and comfortable living space for relaxation',
    imageUrl: '/placeholder.svg',
    tags: ['Interior']
  },
  {
    id: '3',
    title: 'Mountain View',
    description: 'Breathtaking view from the villa terrace',
    imageUrl: '/placeholder.svg',
    tags: ['Surroundings']
  },
  {
    id: '4',
    title: 'Villa Gardens',
    description: 'Lush gardens surrounding the property',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior', 'Surroundings']
  },
  {
    id: '5',
    title: 'Dining Space',
    description: 'Perfect area for family meals',
    imageUrl: '/placeholder.svg',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '6',
    title: 'Cozy Bedroom',
    description: 'Comfortable bedroom with natural light',
    imageUrl: '/placeholder.svg',
    tags: ['Interior']
  },
  {
    id: '7',
    title: 'Modern Kitchen',
    description: 'Fully equipped kitchen for culinary adventures',
    imageUrl: '/placeholder.svg',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '8',
    title: 'Swimming Pool',
    description: 'Relaxing pool area for hot summer days',
    imageUrl: '/placeholder.svg',
    tags: ['Exterior', 'Amenities']
  },
  {
    id: '9',
    title: 'Bathroom',
    description: 'Luxurious bathroom with premium fixtures',
    imageUrl: '/placeholder.svg',
    tags: ['Interior', 'Amenities']
  },
  {
    id: '10',
    title: 'Terrace View',
    description: 'Perfect spot for morning coffee',
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
