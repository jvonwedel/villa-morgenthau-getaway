
import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Familie Lindenthal',
    location: 'München, Deutschland',
    text: 'Villa Morgenthau hat alle unsere Erwartungen übertroffen. Die Liebe zum Detail, die wunderschöne Umgebung und die herzliche Gastfreundschaft machten unseren Aufenthalt unvergesslich. Wir werden definitiv wiederkommen!',
    image: '/placeholder.svg'
  },
  {
    name: 'Familie Haselbeck',
    location: 'Düsseldorf, Deutschland',
    text: 'Perfekter Familienurlaub! Unsere Kinder liebten es, das Grundstück zu erkunden, und wir schätzten die durchdacht gestalteten Räume. Es ist selten, einen Ort zu finden, der sowohl für Erwachsene als auch für Kinder so gut geeignet ist.',
    image: '/placeholder.svg'
  },
  {
    name: 'Celine, Lena & Friedi',
    location: 'Berlin, Deutschland',
    text: 'Ein wahres Juwel! Der historische Charme der Villa in Kombination mit modernen Annehmlichkeiten schuf den perfekten romantischen Rückzugsort. Die Lage ist ideal für Entspannung und Abenteuer zugleich.',
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
        <SectionTitle subtitle="BEGEISTERTE GÄSTE" centered light>
          Was unsere Gäste sagen
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
              aria-label={`Zum Testimonial ${index + 1} gehen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
