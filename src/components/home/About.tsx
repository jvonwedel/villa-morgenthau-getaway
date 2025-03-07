import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
const About = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="SEIT 1867">
              Über die Villa Morgenthau
            </SectionTitle>
            <p className="text-gray-700 mb-8">Die Villa Morgenthau ist ein historisches Anwesen aus dem Jahr 1867, das mit Liebe restauriert und modernisiert wurde, ohne seinen ursprünglichen Charme zu verlieren. In unberührter Natur gelegen, bietet die Villa Morgenthau den perfekten Rückzugsort für alle, die Ruhe und eine Auszeit vom trubeligen Alltag suchen. Und wenn der Sinn dann wieder nach Abenteuer steht, erlaubt die perfekte Lage zwischen den Meeren unzählige unvergessliche Erlebnisse.</p>
            <div className="text-center">
              <Link to="/about" className="btn-secondary">ENTDECKE DIE VILLA MORGENTHAU</Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-auto aspect-[4/3] rounded-sm shadow-lg bg-villa-dark flex items-center justify-center text-white">
              <span>Villa Morgenthau Exterior</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-villa-accent p-6 rounded-sm shadow-lg hidden md:block">
              <p className="font-serif text-xl text-white">Über 150 Jahre Geschichte</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;