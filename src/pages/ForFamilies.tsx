
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const ForFamilies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Family Experiences at Villa Morgenthau" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              For Families
            </h1>
            <p className="text-lg text-white max-w-xl">
              Create lasting memories with your loved ones at Villa Morgenthau.
            </p>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle subtitle="FAMILY FRIENDLY">
                A Place for Everyone
              </SectionTitle>
              <p className="text-gray-700 mb-6">
                Villa Morgenthau welcomes families of all sizes and ages, offering spaces and amenities designed to ensure everyone enjoys their stay. Our spacious property provides room for children to play and explore while adults relax and unwind.
              </p>
              <p className="text-gray-700">
                We understand that traveling with family requires a balance of togetherness and individual space, shared experiences, and practical considerations. Villa Morgenthau has been thoughtfully arranged to meet these needs, making your family vacation as seamless and enjoyable as possible.
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Family at Villa Morgenthau" 
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
            Family-Friendly Amenities
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safe Outdoor Spaces',
                desc: 'Enclosed garden areas where children can play freely while remaining in sight of relaxing adults.'
              },
              {
                title: 'Family-Sized Kitchen',
                desc: 'Spacious, well-equipped kitchen for preparing family meals, with child-friendly dinnerware available.'
              },
              {
                title: 'Entertainment Options',
                desc: 'Board games, books, and outdoor activities suitable for various ages to keep everyone engaged.'
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
      
      {/* Activities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="ACTIVITIES" centered>
            Fun for All Ages
          </SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4">At the Villa</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Garden Exploration:</span>
                    <p className="text-gray-700">Children can discover the flora and fauna in our safe garden environment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Game Nights:</span>
                    <p className="text-gray-700">Our collection of board games and cards encourages family bonding in the evenings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Movie Time:</span>
                    <p className="text-gray-700">A selection of family-friendly films can be enjoyed on our smart TV.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Outdoor Dining:</span>
                    <p className="text-gray-700">Barbecue and alfresco dining areas perfect for memorable family meals.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-4">In the Area</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Family-Friendly Attractions:</span>
                    <p className="text-gray-700">Several nearby attractions cater specifically to families with children of all ages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Easy Hikes:</span>
                    <p className="text-gray-700">Several gentle walking trails suitable for children provide an introduction to nature.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Swimming Spots:</span>
                    <p className="text-gray-700">Safe swimming areas at nearby lakes during summer months.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Cultural Experiences:</span>
                    <p className="text-gray-700">Age-appropriate cultural activities and workshops throughout the year.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img 
              src="/placeholder.svg" 
              alt="Family Activities 1" 
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
            <img 
              src="/placeholder.svg" 
              alt="Family Activities 2" 
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Practical Info Section */}
      <section className="section-padding bg-villa-muted">
        <div className="container-custom">
          <SectionTitle subtitle="PRACTICAL INFORMATION" centered>
            Making It Easy
          </SectionTitle>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h3 className="font-serif text-2xl mb-6 text-center">Family-Friendly Services</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Available Upon Request:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">High chairs and baby cots</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Babysitting services with trusted local childcare professionals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Children's welcome packs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-villa-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Information on local medical facilities</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700">
                  Please let us know in advance if you require any special arrangements for your family's stay, and we'll do our best to accommodate your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForFamilies;
