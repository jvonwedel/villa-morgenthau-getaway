
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Location from '../components/home/Location';
import Booking from '../components/home/Booking';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Location />
      <Testimonials />
      <Gallery />
      <Booking />
    </Layout>
  );
};

export default Index;
