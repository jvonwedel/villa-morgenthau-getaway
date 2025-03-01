
import { createClient } from 'contentful';

// Contentful client setup (use environment variables in production)
export const contentfulClient = createClient({
  space: 'jm1ls9z6d70u', // Contentful Space ID
  accessToken: 'dRleEb0_fedUbelD6nH1kAaBLJqgk4nDxmnXuTtAvVs', // Content Delivery API access token
});

// Type definitions for Contentful content models
export interface GalleryImage {
  title: string;
  description?: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  tags?: string[]; // Changed from category to tags
}

// Helper function to fetch gallery images
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'galleryImage', // This will be the content type ID you create in Contentful
      order: ['-sys.createdAt'], // Fixed: Wrap in array as required by the type
    });
    
    return entries.items.map(item => item.fields as unknown as GalleryImage);
  } catch (error) {
    console.error('Error fetching images from Contentful:', error);
    return [];
  }
};

// Helper function to fetch images by tag
export const fetchGalleryImagesByTag = async (tag: string): Promise<GalleryImage[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'galleryImage',
      'metadata.tags.sys.id[in]': [tag], // Fix: Wrapping the tag in an array to satisfy the type requirement
    });
    
    return entries.items.map(item => item.fields as unknown as GalleryImage);
  } catch (error) {
    console.error('Error fetching tagged images from Contentful:', error);
    return [];
  }
};
