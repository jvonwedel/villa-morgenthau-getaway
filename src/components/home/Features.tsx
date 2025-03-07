
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Heart, Activity, Users } from 'lucide-react';

const features = [
  {
    title: 'Erholung & Natur',
    description: 'Entfliehe dem Lärm des Alltags. Die Villa Morgenthau ist super ruhig gelegen in einem Dorf mit nur wenigen Häusern, umgeben von nichts als Wäldern, Feldern, Wiesen und Moor. Hier sagen sich Fuchs und Pfauen Gute Nacht.',
    icon: Heart,
    link: '/seeking-calm'
  },
  {
    title: 'Spaß, Sport & Action',
    description: 'Abenteuer wartet an jeder Ecke. Erkunde die Kanuwanderwege, das Wattenmeer oder die Schlei und mehr. Wassersport, im Sand buddeln oder Radfahren, alles nur einen Steinwurf von der Villa Morgenthau entfernt.',
    icon: Activity,
    link: '/for-actives'
  },
  {
    title: 'Für Familien',
    description: 'Abenteuer wartet an jeder Ecke. Erkunde Kanuwanderwege, das Wattenmeer oder die Schlei, alles nur einen Steinwurf von der Villa Morgenthau entfernt.',
    icon: Users,
    link: '/for-families'
  }
];

const Features = () => {
  return (
    <section className="section-padding pb-8 bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="ERLEBNISSE" centered>
          Dein perfekter Aufenthalt
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
                Mehr entdecken
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
