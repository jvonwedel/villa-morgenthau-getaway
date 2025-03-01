
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="SEIT 1867">
              Über Villa Morgenthau
            </SectionTitle>
            <p className="text-gray-700 mb-6">
              Villa Morgenthau ist ein historisches Anwesen aus dem Jahr 1867, das sorgfältig restauriert wurde, um seinen ursprünglichen Charme zu bewahren und gleichzeitig modernen Luxus zu bieten. In einer atemberaubenden natürlichen Umgebung gelegen, bietet unsere Villa den perfekten Rückzugsort für alle, die Ruhe und Komfort suchen.
            </p>
            <p className="text-gray-700 mb-8">
              Mit geräumigen Zimmern, eleganter Einrichtung und Liebe zum Detail schafft Villa Morgenthau eine harmonische Mischung aus Geschichte und zeitgenössischem Komfort. Jede Ecke unseres Anwesens erzählt eine Geschichte und lädt Sie ein, Teil ihres fortlaufenden Erbes zu werden.
            </p>
            <Link to="/about" className="btn-secondary">
              Entdecken Sie unsere Geschichte
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Außenansicht" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-villa-accent p-6 rounded-sm shadow-lg hidden md:block">
              <p className="font-serif text-xl text-white">Über 150 Jahre Geschichte und Eleganz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
