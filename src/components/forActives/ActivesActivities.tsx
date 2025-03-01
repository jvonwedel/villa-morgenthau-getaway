
import { Mountain, Bike, Map, Waves } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const seasonalActivities = [{
  season: "Frühling",
  activities: ["Mountainbiken", "Wandern zwischen Wildblumen", "Vogelbeobachtung", "Klettern"]
}, {
  season: "Sommer",
  activities: ["Schwimmen in Seen", "Kajak & Kanu fahren", "Angeln", "Trailrunning"]
}, {
  season: "Herbst",
  activities: ["Waldwanderungen", "Fototouren", "Mountainbiken", "Pilze sammeln"]
}, {
  season: "Winter",
  activities: ["Langlauf", "Schneeschuhwandern", "Winterfotografie", "Tierspuren folgen"]
}];

const featuredActivities = [{
  icon: <Mountain className="h-8 w-8 text-villa-accent" />,
  title: "Wandern",
  description: "Erkundet malerische Wanderwege von leichten Spaziergängen bis zu anspruchsvollen Touren, alle in kurzer Fahrzeit von der Villa erreichbar.",
  distance: "5-25 Min. Fahrt"
}, {
  icon: <Bike className="h-8 w-8 text-villa-accent" />,
  title: "Radwege",
  description: "Entdeckt die Landschaft auf ausgewiesenen Radwegen, die sowohl für Gelegenheitsfahrer als auch für erfahrene Radfahrer geeignet sind.",
  distance: "Direkt von der Villa"
}, {
  icon: <Waves className="h-8 w-8 text-villa-accent" />,
  title: "Wasseraktivitäten",
  description: "Genießt Schwimmen, Kajakfahren und Paddeln an nahegelegenen Seen und Flüssen während der wärmeren Monate.",
  distance: "15-30 Min. Fahrt"
}, {
  icon: <Map className="h-8 w-8 text-villa-accent" />,
  title: "Abenteuertouren",
  description: "Nehmt an geführten Ausflügen zum Klettern, Canyoning oder Paragliding mit erfahrenen lokalen Guides teil.",
  distance: "30-45 Min. Fahrt"
}];

const ActivesActivities = () => {
  return <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="OUTDOOR-ABENTEUER" centered>
          Aktivitäten für jede Jahreszeit
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">Egal, wann - zu jeder Jahreszeit gibt es gute Gründe, Urlaub in der Villa Morgenthau zu planen und zahlreiche Outdoor-Aktivitäten, die euch die die natürliche Schönheit der Region näherbringen.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {seasonalActivities.map((season, index) => <div key={index} className="bg-white p-6 rounded-sm shadow-md">
              <h3 className="font-serif text-xl mb-4 text-center">{season.season}</h3>
              <ul className="space-y-2">
                {season.activities.map((activity, actIndex) => <li key={actIndex} className="flex items-center text-gray-700">
                    <span className="text-villa-accent mr-2">•</span>
                    {activity}
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <SectionTitle subtitle="BELIEBTE ERLEBNISSE" centered>
          Beliebte Aktivitäten in der Nähe
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {featuredActivities.map((activity, index) => <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="text-xs font-medium text-villa-accent mt-auto">
                {activity.distance}
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl mb-4">Ausrüstung & Empfehlungen</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Wir geben gerne Empfehlungen für lokale Guides, Ausrüstungsverleih und die besten Zeiten, um bestimmte Aktivitäten zu genießen. Einige Grundausrüstungen stehen den Gästen in der Villa zur Verfügung, darunter:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">In der Villa verfügbar</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Mountainbikes (2 Erwachsene)</li>
                <li>Wanderstöcke</li>
                <li>Tagesrucksäcke</li>
                <li>Karten & Reiseführer</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Verleih in der Nähe</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Kajaks & Paddleboards</li>
                <li>Spezielle Fahrradausrüstung</li>
                <li>Kletterausrüstung</li>
                <li>Wintersportausrüstung</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Geführte Erlebnisse</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Wald-Sammeltouren</li>
                <li>Wildtier-Fotografie</li>
                <li>Kletterkurse</li>
                <li>Mountainbike-Guides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ActivesActivities;
