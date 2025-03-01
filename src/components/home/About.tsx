
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
const About = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="SINCE 1867">
              Über die Villa Morgenthau
            </SectionTitle>
            <p className="text-gray-700 mb-6">Die Villa Morgenthau ist ein historisches Anwesen aus dem Jahr 1867, das sorgfältig restauriert wurde, um seinen ursprünglichen Charme zu bewahren und gleichzeitig modernen Luxus zu bieten. In atemberaubender, unberührter Natur gelegen, bietet die Villa Morgenthau den perfekten Rückzugsort für alle, die Ruhe und Komfort suchen. Aber auch unvergessliche Erlebnisse sind jederzeit möglich, denn die perfekte Lage zwischen den Meeren ermöglich unzählige Ausflüge, wenn der Sinn nach Abenteuer steht.</p>
            <p className="text-gray-700 mb-8">Mit geräumigen Zimmern und Einrichtung mit Liebe zum Detail schafft die Villa Morgenthau eine harmonische Mischung aus Geschichte und zeitgenössischem Komfort. Jede Ecke des Anwesens erzählt eine Geschichte und lädt Sie ein, Teil ihres fortlaufenden Erbes zu werden.</p>
            <div className="text-center">
              <Link to="/about" className="btn-secondary">ENTDECKEN SIE DIE GESCHICHTE</Link>
            </div>
          </div>
          
          <div className="relative">
            <img alt="Villa Morgenthau Exterior" className="w-full h-auto rounded-sm shadow-lg" src="/lovable-uploads/b738799a-4fa8-4d26-abda-46f6d01759b0.jpg" />
            <div className="absolute -bottom-6 -left-6 bg-villa-accent p-6 rounded-sm shadow-lg hidden md:block">
              <p className="font-serif text-xl text-white">Über 150 Jahre Geschichte</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
