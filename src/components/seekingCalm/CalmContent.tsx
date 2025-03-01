
import SectionTitle from '../ui/SectionTitle';

const CalmContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ENTSPANNUNG & WOHLBEFINDEN">
              Ein Zufluchtsort für Erholung
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              In unserer hektischen Welt ist es wichtig, Momente der Ruhe zu finden, die essenziell für unser Wohlbefinden sind. Villa Morgenthau wurde als Rückzugsort konzipiert, an dem Sie sich vom Alltagsstress lösen und wieder mit sich selbst und der Natur verbinden können.
            </p>
            
            <p className="text-gray-700 mb-6">
              Die friedliche Lage der Villa, umgeben von natürlicher Schönheit, schafft die perfekte Umgebung für Entspannung. Von den sanften Naturgeräuschen bis zur frischen, klaren Luft trägt jedes Element zu einem Gefühl von Ruhe und Erneuerung bei.
            </p>
            
            <p className="text-gray-700 mb-8">
              Ob Sie in unserem Garten meditieren, ein Buch am Kamin genießen oder einfach die Panoramaaussicht bewundern - Villa Morgenthau bietet zahlreiche Gelegenheiten, inneren Frieden zu finden und erfrischt und verjüngt nach Hause zurückzukehren.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Friedliche Umgebung der Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalmContent;
