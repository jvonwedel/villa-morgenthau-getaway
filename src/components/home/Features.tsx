
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Heart, Activity, Users } from 'lucide-react';

const features = [
  {
    title: 'Seeking Calm',
    description: 'Escape the noise of everyday life. Our villa offers peaceful surroundings, meditation spots, and natural beauty for true relaxation.',
    icon: Heart,
    link: '/seeking-calm'
  },
  {
    title: 'For Actives',
    description: 'Adventure awaits around every corner. Explore hiking trails, water sports, cycling routes, and more within minutes of the villa.',
    icon: Activity,
    link: '/for-actives'
  },
  {
    title: 'For Families',
    description: 'Create lasting memories with your loved ones. Kid-friendly amenities, games, and nearby attractions for all ages.',
    icon: Users,
    link: '/for-families'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="EXPERIENCES" centered>
          Find Your Perfect Stay
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-6">
                <feature.icon className="w-10 h-10 text-villa-accent" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="text-villa-dark font-medium inline-flex items-center group-hover:text-villa-accent transition-colors"
              >
                Explore More
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
