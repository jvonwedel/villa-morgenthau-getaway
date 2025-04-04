
import SectionTitle from '../ui/SectionTitle';
import { Link, useLocation } from 'react-router-dom';

const features = [
  {
    title: 'Erholung & Natur',
    description: 'Entfliehe dem Lärm des Alltags. Die Villa Morgenthau ist super ruhig gelegen in einem Dorf mit nur wenigen Häusern, umgeben von nichts als Wäldern, Feldern, Wiesen und Moor. Stress? Fehlanzeige. Hier sagen sich Fuchs und Pfauen Gute Nacht.',
    link: '/location#erholung'
  },
  {
    title: 'Spaß, Sport & Action',
    description: 'Abenteuer wartet an jeder Ecke. Erkunde die Kanuwanderwege, das Wilde Moor, das Wattenmeer oder die Schlei. Es ist für jeden was dabei. Kiten, Segeln oder Radfahren, alles nur einen Steinwurf von der Villa Morgenthau entfernt.',
    link: '/for-actives'
  },
  {
    title: 'Family & Friends',
    description: 'Stockbrot über dem Lagerfeuer, ein Tischtennisturnier oder im Wattenmeer im Matsch waten. So viele Möglichkeiten. Und bei schlechtem Wetter lädt die große Küche zu Kochspaß, die Tafel zu Mensch-ärger-dich-nicht und der Kachelofen zum Träumen ein.',
    link: '/for-families'
  }
];

const Features = () => {
  const location = useLocation();

  const handleFeatureLinkClick = (e, path) => {
    // If we're already on the location page and clicking a hash link
    if (location.pathname === '/location' && path.startsWith('/location#')) {
      e.preventDefault();
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section-padding pb-8 bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="ERLEBNISSE" centered>
          Dein perfekter Aufenthalt
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="text-villa-dark font-medium inline-flex items-center group-hover:text-villa-accent transition-colors"
                onClick={(e) => handleFeatureLinkClick(e, feature.link)}
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
