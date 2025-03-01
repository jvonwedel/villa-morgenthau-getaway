
import SectionTitle from '../ui/SectionTitle';

const LocationContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ERKUNDEN SIE DIE UMGEBUNG">
              Ein idealer Ausgangspunkt für Erkundungen
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Villa Morgenthau liegt in einer der malerischsten Regionen und bietet eine perfekte Mischung aus natürlicher Schönheit und kulturellem Reichtum. Die Lage der Villa ermöglicht einfachen Zugang zu zahlreichen Attraktionen und bewahrt gleichzeitig die Ruhe und Privatsphäre, die unsere Gäste schätzen.
            </p>
            
            <p className="text-gray-700 mb-6">
              In kurzer Fahrzeit finden Sie charmante Dörfer mit lokalen Märkten, Restaurants, die authentische Küche servieren, und kulturelle Stätten, die die Geschichte dieser historischen Region erzählen. Naturliebhaber werden die Nähe zu Wanderwegen, Seen und geschützten Naturgebieten zu schätzen wissen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Sehenswürdigkeiten in der Nähe</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Historisches Dorf (15 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Lokale Weingüter (20 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Bergwanderwege (10 Min.)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Entfernungen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Flughafen (45 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Nächste Stadt (10 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Strand (30 Min.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Umgebung" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
