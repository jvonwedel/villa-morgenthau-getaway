
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryHeader from '../components/gallery/GalleryHeader';

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
      <GalleryHeader />
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;
