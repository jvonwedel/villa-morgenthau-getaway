
import { Sun, Coffee, Book, Moon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const activities = [
  {
    icon: <Sun className="h-8 w-8 text-villa-accent" />,
    title: "Morgenmeditation",
    description: "Beginnen Sie Ihren Tag mit Ruhe in unserem Gartenbereich, der perfekt für Meditation oder sanftes Yoga bei Sonnenaufgang ist."
  },
  {
    icon: <Coffee className="h-8 w-8 text-villa-accent" />,
    title: "Achtsame Momente",
    description: "Genießen Sie Ihren Kaffee oder Tee auf der Terrasse, nehmen Sie die friedliche Umgebung wahr und verbinden Sie sich mit der Natur."
  },
  {
    icon: <Book className="h-8 w-8 text-villa-accent" />,
    title: "Lesestunden",
    description: "Machen Sie es sich mit einem guten Buch in unserer gemütlichen Leseecke oder im Schatten der Bäume im Garten bequem."
  },
  {
    icon: <Moon className="h-8 w-8 text-villa-accent" />,
    title: "Abendliche Entspannung",
    description: "Beenden Sie Ihren Tag mit einem entspannenden Bad oder beim Sternegucken von der Terrasse aus und genießen Sie die Ruhe des Landlebens."
  }
];

const CalmActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="WELLNESS-AKTIVITÄTEN" centered>
          Pflegen Sie Ihr Wohlbefinden
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Entdecken Sie Aktivitäten und Räume in der Villa Morgenthau, die Entspannung, Achtsamkeit und Wohlbefinden fördern.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col items-center text-center">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Lokale Wellness-Erlebnisse</h3>
              <p className="text-gray-700 mb-4">
                Bereichern Sie Ihren Aufenthalt mit diesen entspannenden Erlebnissen in der Umgebung:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Waldbaden</span>
                    <p className="text-sm text-gray-600">Geführte Wanderungen durch alte Wälder mit Fokus auf Achtsamkeit und Verbindung zur Natur.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Thermalquellen</span>
                    <p className="text-sm text-gray-600">Besuchen Sie natürliche heiße Quellen, die für ihre therapeutischen Eigenschaften bekannt sind, nur 30 Minuten Fahrt entfernt.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Private Yoga-Stunden</span>
                    <p className="text-sm text-gray-600">Lassen Sie einen zertifizierten Lehrer eine personalisierte Yoga-Stunde in der Villa durchführen.</p>
                  </div>
                </li>
              </ul>
              
              <p className="text-sm text-gray-500">
                Hinweis: Einige Aktivitäten erfordern möglicherweise eine Voranmeldung. Bitte fragen Sie uns nach Empfehlungen je nach Jahreszeit Ihres Aufenthalts.
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Wellness-Erlebnis" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalmActivities;
