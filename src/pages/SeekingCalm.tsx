
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const SeekingCalm = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Seeking Calm at Villa Morgenthau" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Seeking Calm
            </h1>
            <p className="text-lg text-white max-w-xl">
              Experience true tranquility and rejuvenation in our peaceful sanctuary.
            </p>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle subtitle="TRANQUILITY">
                A Place of Peace
              </SectionTitle>
              <p className="text-gray-700 mb-6">
                In today's fast-paced world, finding true calm can be a challenge. Villa Morgenthau offers a sanctuary where you can disconnect from the noise and reconnect with yourself and nature. Our peaceful setting provides the perfect environment for relaxation and rejuvenation.
              </p>
              <p className="text-gray-700">
                Whether you're seeking solitude in our gardens, practicing meditation in a quiet corner, or simply enjoying the serene atmosphere of the villa, you'll find countless ways to nurture your wellbeing during your stay.
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Peaceful setting at Villa Morgenthau" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-villa-muted">
        <div className="container-custom">
          <SectionTitle subtitle="FEATURES" centered>
            Elements of Calm
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Meditation Spaces',
                desc: 'Designated areas throughout the property perfect for meditation and mindfulness practices.'
              },
              {
                title: 'Natural Surroundings',
                desc: 'Immerse yourself in the healing power of nature with our gardens and nearby natural landscapes.'
              },
              {
                title: 'Quiet Retreats',
                desc: 'Cozy nooks and comfortable spaces designed for reading, reflection, and relaxation.'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <img 
                  src="/placeholder.svg" 
                  alt={feature.title} 
                  className="w-full h-48 object-cover mb-4 rounded-sm"
                />
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wellness Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="WELLNESS" centered>
            Nurture Your Wellbeing
          </SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/placeholder.svg" 
                alt="Wellness at Villa Morgenthau" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-2xl mb-4">Holistic Approach</h3>
              <p className="text-gray-700 mb-6">
                At Villa Morgenthau, we believe in a holistic approach to wellbeing. Our environment naturally promotes rest and rejuvenation, while our amenities support physical and mental wellness.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Available Upon Request:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Private yoga sessions in the garden or comfort of the villa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Massage therapy by certified local practitioners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Guided meditation sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Customized wellness packages for extended stays</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                Please inquire at the time of booking about current wellness offerings and any special requests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeekingCalm;
