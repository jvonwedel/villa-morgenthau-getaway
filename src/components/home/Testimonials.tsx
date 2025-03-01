
import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Emma & Sebastian',
    location: 'Munich, Germany',
    text: 'Villa Morgenthau exceeded all our expectations. The attention to detail, the beautiful surroundings, and the warm hospitality made our stay unforgettable. We will definitely be coming back!',
    image: '/placeholder.svg'
  },
  {
    name: 'The Johnson Family',
    location: 'London, UK',
    text: 'Perfect family getaway! Our children loved exploring the grounds, and we appreciated the thoughtfully designed spaces. It\'s rare to find a place that caters so well to both adults and kids.',
    image: '/placeholder.svg'
  },
  {
    name: 'Marie & Pierre',
    location: 'Paris, France',
    text: 'A true gem! The villa\'s historic charm combined with modern amenities created the perfect romantic retreat. The location is ideal for both relaxation and adventure.',
    image: '/placeholder.svg'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-padding bg-villa-dark text-white">
      <div className="container-custom">
        <SectionTitle subtitle="HAPPY GUESTS" centered light>
          What Our Guests Say
        </SectionTitle>
        
        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-1000 flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 object-cover rounded-full border-2 border-villa-accent"
                    />
                  </div>
                  <p className="text-lg md:text-xl italic mb-6 text-villa-muted">
                    "{testimonial.text}"
                  </p>
                  <p className="font-serif text-lg">{testimonial.name}</p>
                  <p className="text-sm text-villa-muted">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === index ? 'bg-villa-accent' : 'bg-gray-700'
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
