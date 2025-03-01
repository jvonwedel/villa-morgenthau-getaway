
import SectionTitle from '../ui/SectionTitle';

const FamiliesContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="FAMILIENURLAUB">
              Ein Ort für Jeden
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Die Villa Morgenthau begrüßt Familien aller Größen und Altersgruppen und bietet geräumige Unterkünfte und Annehmlichkeiten, die für alle konzipiert sind. Unsere Villa bietet den perfekten Rahmen für gemeinsame Familienzeit, während sichergestellt wird, dass jedes Mitglied seinen eigenen Raum zum Entspannen und Genießen finden kann.
            </p>
            
            <p className="text-gray-700 mb-6">
              Der großzügige Grundriss der Villa bedeutet, dass Kinder Platz zum Spielen haben, während Erwachsene in Komfort entspannen können. Unser Garten und die Außenbereiche bieten sichere Flächen zum Erkunden und für Aktivitäten, und unsere Lage bietet einfachen Zugang zu familienfreundlichen Attraktionen und Naturwundern.
            </p>
            
            <p className="text-gray-700 mb-8">
              Von Gesellschaftsspielen und Büchern für Regentage bis hin zu Outdoor-Ausrüstung für sonnige Abenteuer - wir haben an alles gedacht, um Ihren Familienaufenthalt komfortabel, bequem und unvergesslich zu gestalten.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Familienzeit in der Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliesContent;
