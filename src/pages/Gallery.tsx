
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  useEffect(() => {
    // Scroll to top when the Gallery component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;
