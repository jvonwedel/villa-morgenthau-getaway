
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  useEffect(() => {
    // Force scroll to top when the Gallery component mounts
    window.scrollTo({
      top: 0,
      behavior: 'auto'  // Immediate scrolling
    });
  }, []);

  return (
    <Layout>
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;
