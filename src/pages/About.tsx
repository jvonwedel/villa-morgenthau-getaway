
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">About Villa Morgenthau</h1>
            
            <div className="mb-10">
              <img 
                src="/placeholder.svg" 
                alt="Villa Morgenthau Historical Photo" 
                className="w-full h-auto rounded-sm shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 italic text-center">Villa Morgenthau circa 1867</p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-2xl mb-4">Our History</h2>
              <p className="mb-6">
                Villa Morgenthau stands as a testament to timeless elegance and historical significance. Built in 1867 by the renowned architect Friedrich Morgenthau, the villa originally served as a summer residence for the Morgenthau family, prominent merchants and patrons of the arts.
              </p>
              
              <p className="mb-6">
                Through generations, the villa has witnessed the changing tides of history while maintaining its architectural integrity and cultural importance. After an extensive restoration in 2015, Villa Morgenthau opened its doors as an exclusive vacation property, offering guests a unique opportunity to experience living history with modern comforts.
              </p>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Architecture & Restoration</h2>
              <p className="mb-6">
                The villa exemplifies the neo-classical style popular in the mid-19th century, featuring elegant proportions, distinctive columns, and intricate moldings. The recent restoration efforts focused on preserving these historical elements while sensitively introducing modern amenities.
              </p>
              
              <p className="mb-6">
                Each room has been carefully curated to reflect its original purpose while providing the comfort expected by today's discerning travelers. Original wooden floors have been restored, historical color schemes researched and replicated, and period-appropriate furnishings sourced to create an authentic yet luxurious atmosphere.
              </p>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Our Philosophy</h2>
              <p className="mb-6">
                At Villa Morgenthau, we believe in preserving not just a building, but a way of life. We strive to create an environment where guests can disconnect from the hectic pace of modern life and reconnect with a more contemplative, elegant era.
              </p>
              
              <p className="mb-12">
                Sustainability is at the heart of our operations. From our organic garden that supplies fresh produce for guests to our energy-efficient systems hidden discreetly within the historical structure, we are committed to ensuring Villa Morgenthau stands for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
