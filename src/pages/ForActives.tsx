
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const ForActives = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Active Adventures at Villa Morgenthau" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              For Actives
            </h1>
            <p className="text-lg text-white max-w-xl">
              Experience adventure and exploration during your stay at Villa Morgenthau.
            </p>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle subtitle="ADVENTURE AWAITS">
                Active Experiences
              </SectionTitle>
              <p className="text-gray-700 mb-6">
                Villa Morgenthau is ideally situated for guests who seek adventure and physical activity during their vacation. The surrounding area offers numerous opportunities for outdoor pursuits in every season, from water sports on nearby lakes to hiking through pristine forests.
              </p>
              <p className="text-gray-700">
                Whether you're an avid sportsperson or simply enjoy staying active while on vacation, you'll find plenty of options to keep you engaged and energized throughout your stay.
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Outdoor activities near Villa Morgenthau" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities Section */}
      <section className="section-padding bg-villa-muted">
        <div className="container-custom">
          <SectionTitle subtitle="ACTIVITIES" centered>
            Outdoor Pursuits
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Hiking & Walking',
                desc: 'Explore a network of trails ranging from easy walks to challenging hikes with rewarding panoramic views.'
              },
              {
                title: 'Cycling & Mountain Biking',
                desc: 'Discover the region on two wheels with routes suitable for casual riders and experienced cyclists alike.'
              },
              {
                title: 'Water Sports',
                desc: 'Enjoy swimming, kayaking, paddleboarding, and more on the pristine lakes just minutes from the villa.'
              },
              {
                title: 'Winter Activities',
                desc: 'Experience cross-country skiing, snowshoeing, and winter hiking when the landscape transforms with snow.'
              },
              {
                title: 'Tennis & Golf',
                desc: 'Access nearby courts and courses for a friendly match or a full day on the greens.'
              },
              {
                title: 'Running & Fitness',
                desc: 'Maintain your fitness routine with scenic running routes and outdoor exercise opportunities.'
              }
            ].map((activity, index) => (
              <div key={index} className="feature-card">
                <img 
                  src="/placeholder.svg" 
                  alt={activity.title} 
                  className="w-full h-40 object-cover mb-4 rounded-sm"
                />
                <h3 className="font-serif text-xl mb-3">{activity.title}</h3>
                <p className="text-gray-700">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="EQUIPMENT & RESOURCES" centered>
            Everything You Need
          </SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Equipment available at Villa Morgenthau" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-4">Ready for Adventure</h3>
              <p className="text-gray-700 mb-6">
                To enhance your active experience, Villa Morgenthau provides a selection of equipment and resources for guests. Our goal is to make it easy for you to enjoy the outdoor activities available in the area.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Available at the Villa:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">High-quality hiking maps and trail guides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Basic hiking gear including walking poles and backpacks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Adult and children's bicycles with helmets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Picnic equipment for day trips</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                Additionally, we can arrange rentals for specialized equipment and connect you with local guides and instructors for a variety of activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForActives;
