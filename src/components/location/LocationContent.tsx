
import SectionTitle from '../ui/SectionTitle';
const LocationContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ENTDECKE DIE UMGEBUNG">
              Der ideale Ausgangspunkt für Erkundungen
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">Die Villa Morgenthau liegt in einer der malerischsten Regionen Deutschlands und bietet eine perfekte Mischung aus "Natur pur" und kulturellem Reichtum. Die Lage der Villa Morgenthau ermöglicht Ruhesuchenden die Abgeschiedenheit und Weite, die es braucht, um wirklich runterzufahren, aber auch zahlreiche Sehenswürdigkeiten und Aktivitäten sind unweit der Villa Morgenthau gelegen, so dass wirklich für jeden etwas dabei ist. </p>
            
            <p className="text-gray-700 mb-6">In kurzer Fahrzeit finden Sie charmante Dörfer mit lokalen Hofläden, Restaurants, die authentische Küche servieren, zahlreiche Wassersportmöglichkeiten, aber auch kulturelle Stätten wie das Wikingermuseum Haithabu, die die Geschichte dieser historischen Region erzählen. Naturliebhaber werden darüberhinaus die Nähe zu (Kanu-)Wanderwegen, dem Wattenmeer und dem geschützten Gebietverband Natura2000 zu schätzen wissen.</p>
            
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
    </section>
  );
};
export default LocationContent;
