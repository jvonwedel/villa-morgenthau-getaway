
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  useEffect(() => {
    // Scroll to top when the Gallery component mounts - using immediate execution
    window.scrollTo({
      top: 0,
      behavior: 'auto'  // Changed from 'smooth' to ensure it happens immediately
    });
  }, []);

  return (
    <Layout>
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;
