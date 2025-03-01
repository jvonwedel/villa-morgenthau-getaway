
import { createClient } from '@sanity/client';

// Sanity client setup (use environment variables in production)
export const sanityClient = createClient({
  projectId: 'your-project-id', // Your Sanity project ID - replace with your actual ID
  dataset: 'production', // The dataset you want to use (usually "production")
  apiVersion: '2023-05-03', // Use today's date or any date after 2023-03-20
  useCdn: true, // Use the Sanity CDN for faster image responses
});

// Type definitions for Sanity content models
export interface GalleryImage {
  _id: string;
  title: string;
  description?: string;
  image: {
    asset: {
      url: string;
    };
  };
  tags?: string[]; // For categories like Interior, Exterior, etc.
}

// Helper function to fetch all gallery images
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const query = `*[_type == "galleryImage"] | order(publishedAt desc) {
      _id,
      title,
      description,
      image {
        asset-> {
          url
        }
      },
      tags
    }`;
    
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching images from Sanity:', error);
    return [];
  }
};

// Helper function to fetch images by tag
export const fetchGalleryImagesByTag = async (tag: string): Promise<GalleryImage[]> => {
  try {
    const query = `*[_type == "galleryImage" && $tag in tags] | order(publishedAt desc) {
      _id,
      title,
      description,
      image {
        asset-> {
          url
        }
      },
      tags
    }`;
    
    // Fix: Pass the tag as an object with key 'tag'
    return await sanityClient.fetch(query, { tag });
  } catch (error) {
    console.error('Error fetching tagged images from Sanity:', error);
    return [];
  }
};
