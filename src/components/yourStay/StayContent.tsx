
import SectionTitle from '../ui/SectionTitle';

const StayContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="IHR ERLEBNIS">
              Außergewöhnliche Unterkünfte
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Villa Morgenthau bietet eine perfekte Mischung aus historischem Charme und modernem Komfort. Unser sorgfältig restauriertes Anwesen bewahrt seinen ursprünglichen Charakter und bietet gleichzeitig alle modernen Annehmlichkeiten, die Sie für einen entspannten und luxuriösen Aufenthalt benötigen.
            </p>
            
            <p className="text-gray-700 mb-6">
              Jeder Raum in der Villa wurde durchdacht gestaltet, um eine warme, einladende Atmosphäre zu schaffen, die sich sowohl elegant als auch komfortabel anfühlt. Hochwertige Möbel, erstklassige Bettwäsche und schöne Dekoration sorgen dafür, dass Sie sich vom ersten Moment an wie zu Hause fühlen.
            </p>
            
            <p className="text-gray-700 mb-8">
              Ob Sie eine Gourmetmahlzeit in unserer voll ausgestatteten Küche zubereiten, ein Buch am Kamin genießen oder einfach die Aussicht von unserer Terrasse aus betrachten - jeder Aspekt der Villa Morgenthau wurde mit Ihrem Komfort und Genuss im Sinn gestaltet.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Innenbereich" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayContent;
