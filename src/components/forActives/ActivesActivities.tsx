
import { Mountain, Bike, Map, Waves } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const seasonalActivities = [
  {
    season: "Frühling",
    activities: [
      "Mountainbiken",
      "Wildblumen-Wanderungen",
      "Vogelbeobachtung",
      "Klettern"
    ]
  },
  {
    season: "Sommer",
    activities: [
      "Schwimmen in Seen",
      "Kajak & Kanufahren",
      "Angeln",
      "Trailrunning"
    ]
  },
  {
    season: "Herbst",
    activities: [
      "Waldwanderungen",
      "Fototouren",
      "Mountainbiken",
      "Pilze sammeln"
    ]
  },
  {
    season: "Winter",
    activities: [
      "Langlaufen",
      "Schneeschuhwandern",
      "Winterfotografie",
      "Tierspuren verfolgen"
    ]
  }
];

const featuredActivities = [
  {
    icon: <Mountain className="h-8 w-8 text-villa-accent" />,
    title: "Bergwandern",
    description: "Erkunden Sie malerische Wege von leichten Spaziergängen bis zu anspruchsvollen Anstiegen, alle nur eine kurze Fahrt von der Villa entfernt.",
    distance: "5-25 Min. Fahrt"
  },
  {
    icon: <Bike className="h-8 w-8 text-villa-accent" />,
    title: "Radwege",
    description: "Entdecken Sie die Landschaft auf ausgewiesenen Radwegen, die sowohl für Gelegenheitsfahrer als auch für erfahrene Radfahrer geeignet sind.",
    distance: "Direkt ab Villa"
  },
  {
    icon: <Waves className="h-8 w-8 text-villa-accent" />,
    title: "Wasseraktivitäten",
    description: "Genießen Sie Schwimmen, Kajakfahren und Stand-up-Paddling an nahegelegenen Seen und Flüssen während der wärmeren Monate.",
    distance: "15-30 Min. Fahrt"
  },
  {
    icon: <Map className="h-8 w-8 text-villa-accent" />,
    title: "Abenteuertouren",
    description: "Nehmen Sie an geführten Ausflügen zum Klettern, Canyoning oder Paragliding mit erfahrenen lokalen Führern teil.",
    distance: "30-45 Min. Fahrt"
  }
];

const ActivesActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="OUTDOOR-ABENTEUER" centered>
          Aktivitäten für jede Jahreszeit
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Egal, wann Sie Villa Morgenthau besuchen, es gibt zahlreiche Outdoor-Aktivitäten, die Sie aktiv halten und Ihnen die natürliche Schönheit der Region näherbringen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {seasonalActivities.map((season, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md">
              <h3 className="font-serif text-xl mb-4 text-center">{season.season}</h3>
              <ul className="space-y-2">
                {season.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center text-gray-700">
                    <span className="text-villa-accent mr-2">•</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <SectionTitle subtitle="BESONDERE ERLEBNISSE" centered>
          Beliebte Aktivitäten in der Nähe
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {featuredActivities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="text-xs font-medium text-villa-accent mt-auto">
                {activity.distance}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl mb-4">Ausrüstung & Empfehlungen</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Wir geben Ihnen gerne Empfehlungen für lokale Guides, Ausrüstungsverleih und die besten Zeiten, um bestimmte Aktivitäten zu genießen. Einige Grundausrüstungen stehen den Gästen in der Villa zur Verfügung, darunter:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">In der Villa verfügbar</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Mountainbikes (2 für Erwachsene)</li>
                <li>Wanderstöcke</li>
                <li>Tagesrucksäcke</li>
                <li>Karten & Reiseführer</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Verleih in der Nähe</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Kajaks & Stand-Up-Paddleboards</li>
                <li>Spezielle Fahrradausrüstung</li>
                <li>Kletterausrüstung</li>
                <li>Wintersportausrüstung</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Geführte Erlebnisse</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Sammeln im Wald</li>
                <li>Wildtierfotografie</li>
                <li>Kletterkurse</li>
                <li>Mountainbike-Guides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivesActivities;
