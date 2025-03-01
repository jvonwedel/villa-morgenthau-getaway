
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Villa Morgenthau Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              About Villa Morgenthau
            </h1>
            <p className="text-lg text-white max-w-xl">
              Discover the rich history and timeless elegance of our historic vacation home.
            </p>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle subtitle="OUR STORY">
                A Rich History Since 1867
              </SectionTitle>
              <p className="text-gray-700 mb-6">
                Villa Morgenthau was built in 1867 by the Morgenthau family as their summer residence. The villa's architecture reflects the elegant style of the era, with meticulous attention to detail and craftsmanship that has stood the test of time.
              </p>
              <p className="text-gray-700 mb-6">
                Throughout its history, the villa has been a witness to significant events and has hosted notable figures. The property has been carefully preserved and restored over the years, maintaining its historic charm while incorporating modern comforts.
              </p>
              <p className="text-gray-700">
                Today, Villa Morgenthau stands as a testament to timeless elegance and offers guests the opportunity to experience a piece of history while enjoying luxury accommodations in a breathtaking setting.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Villa Morgenthau Historic Photo" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="section-padding bg-villa-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Villa Detail 1" 
                  className="w-full h-auto rounded-sm shadow-lg"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Villa Detail 2" 
                  className="w-full h-auto rounded-sm shadow-lg mt-8"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Villa Detail 3" 
                  className="w-full h-auto rounded-sm shadow-lg mt-8"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Villa Detail 4" 
                  className="w-full h-auto rounded-sm shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle subtitle="OUR PHILOSOPHY">
                Elegance Meets Comfort
              </SectionTitle>
              <p className="text-gray-700 mb-6">
                At Villa Morgenthau, we believe in preserving the past while embracing the present. Our philosophy centers around creating a space where history, luxury, and comfort coexist in perfect harmony.
              </p>
              <p className="text-gray-700 mb-6">
                Every aspect of the villa has been thoughtfully designed to honor its historic roots while providing all the modern amenities that discerning travelers expect. From the carefully restored architectural details to the contemporary furnishings, each element contributes to a unique experience.
              </p>
              <p className="text-gray-700">
                We are committed to offering our guests not just accommodation, but an immersive experience that captures the essence of refined living in a historic setting. Villa Morgenthau is more than a vacation home – it's a destination where memories are created and cherished.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="THE PEOPLE" centered>
            Meet Our Team
          </SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Villa Morgenthau is maintained and managed by a dedicated team committed to ensuring your stay is perfect in every detail. From the moment you inquire to the day you depart, our team is here to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Owner', 'Manager', 'Housekeeper'].map((role, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative w-48 h-48 mx-auto">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${index + 1}`} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Team Member Name</h3>
                <p className="text-villa-accent mb-3">{role}</p>
                <p className="text-gray-700">
                  Dedicated to ensuring your experience at Villa Morgenthau is exceptional in every way.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
