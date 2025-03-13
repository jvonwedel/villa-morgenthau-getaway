
import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Familie Lindenthal',
    location: 'München, Deutschland',
    text: 'Die Villa Morgenthau hat alle unsere Erwartungen übertroffen. Die Liebe zum Detail, die wunderschöne Umgebung und die herzliche Gastfreundschaft machten unseren Aufenthalt unvergesslich. Wir werden definitiv wiederkommen!'
  },
  {
    name: 'Familie Haselbeck',
    location: 'Düsseldorf, Deutschland',
    text: 'Perfekter Familienurlaub! Die Kinder liebten es, das Grundstück zu erkunden und wir hatten die wunderschönste Zeit. Es ist selten, einen Ort zu finden, der sowohl für Erwachsene als auch für Kinder so gut geeignet ist.'
  },
  {
    name: 'Celine, Lena & Friedi',
    location: 'Berlin, Deutschland',
    text: 'Ein wahres Juwel! Der historische Charme der Villa in Kombination mit dem modernen Interior ist einfach einzigartig. Wir lieben den Wintergarten. Perfekte Lage für Entspannung und Abenteuer zugleich.'
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
                    <div className="w-20 h-20 rounded-full border-2 border-villa-accent bg-villa-accent/20 flex items-center justify-center">
                      <span>{testimonial.name.charAt(0)}</span>
                    </div>
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
