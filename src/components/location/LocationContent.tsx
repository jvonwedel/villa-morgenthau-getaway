
import SectionTitle from '../ui/SectionTitle';
const LocationContent = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ENTDECKE DIE UMGEBUNG">
              Einmalige Lage
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">Die Villa Morgenthau liegt in einer der malerischsten Regionen Deutschlands und bietet eine perfekte Mischung aus "Natur pur" und ganz viel Abwechslung für die Action Junkies unter euch. Die Lage der Villa Morgenthau ermöglicht es, wirklich runterzufahren aber durch die ganzen Sehenswürdigkeiten und Aktivitäten rundum muss keine Langeweile aufkommen. So ist für jeden was dabei.
          </p>
            
            <p className="text-gray-700 mb-6">In kurzer Fahrzeit finden sich charmante Dörfer mit lokalen Hofläden, Restaurants, die nordische Küche servieren, ganz viele Wassersportmöglichkeiten, aber auch kulturelle Stätten wie das Wikingermuseum Haithabu, die die Geschichte dieser historischen Region erzählen. Naturliebhaber werden darüberhinaus die Nähe zu (Kanu-)Wanderwegen, dem Wattenmeer und dem geschützten Gebietverband Natura 2000 zu schätzen wissen.</p>

            <p className="text-gray-700 mb-6">Sylt ist mit dem Zug von Husum in einer Stunde erreichbar, Sankt Peter Ording ist auch immer einen Ausflug wert und auch Tønder und Rømø bieten sich für einen (Tages-)Ausflug an.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Sehenswürdigkeiten in der Nähe</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Husum (15 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Wattenmeer (20 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Friedrichstadt (20 Min.)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Entfernungen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Nächster Supermarkt/Bäcker (5 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Nächster Bahnhof (15 Min.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Flughafen Hamburg (70 Min.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationContent;
