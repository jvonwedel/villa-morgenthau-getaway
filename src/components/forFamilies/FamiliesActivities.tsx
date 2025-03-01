
import { Smile, Trees, Cookie, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const familySpaces = [
  {
    name: "Geräumiges Wohnzimmer",
    description: "Bequeme Sitzgelegenheiten für die ganze Familie mit Unterhaltungsmöglichkeiten."
  },
  {
    name: "Voll ausgestattete Küche",
    description: "Perfekt für die Zubereitung von Familienmahlzeiten mit allen notwendigen Geräten."
  },
  {
    name: "Privater Garten",
    description: "Sicherer, umzäunter Außenbereich, in dem Kinder spielen und entdecken können."
  },
  {
    name: "Familien-Essbereich",
    description: "Innen- und Außen-Essbereiche, die Platz für alle bieten."
  }
];

const familyActivities = [
  {
    icon: <Smile className="h-8 w-8 text-villa-accent" />,
    title: "Kinderfreundlicher Spaß",
    description: "Aktivitäten in der Villa umfassen Gesellschaftsspiele, Outdoor-Spiele und eine Auswahl an Büchern und Spielzeug für verschiedene Altersgruppen.",
    suitable: "Alle Altersgruppen"
  },
  {
    icon: <Trees className="h-8 w-8 text-villa-accent" />,
    title: "Outdoor-Abenteuer",
    description: "Einfache Wanderwege, Picknickplätze und Naturbeobachtungspunkte, perfekt für Familienerkundungen.",
    suitable: "Ab 3 Jahren"
  },
  {
    icon: <Cookie className="h-8 w-8 text-villa-accent" />,
    title: "Lokale Erlebnisse",
    description: "Besuchen Sie nahegelegene Bauernhöfe zum Obstpflücken, Tierbeobachten und authentische lokale Essenserlebnisse.",
    suitable: "Alle Altersgruppen"
  },
  {
    icon: <Star className="h-8 w-8 text-villa-accent" />,
    title: "Besondere Attraktionen",
    description: "Familienfreundliche Museen, Abenteuerparks und kulturelle Stätten in kurzer Fahrzeit erreichbar.",
    suitable: "Ab 5 Jahren"
  }
];

const FamiliesActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="FAMILIENFREUNDLICHE ANNEHMLICHKEITEN" centered>
          Konzipiert mit Familien im Sinn
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Die Villa Morgenthau bietet Räume und Annehmlichkeiten, die auf Familien zugeschnitten sind und einen komfortablen und angenehmen Aufenthalt für Gäste jeden Alters gewährleisten.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="font-serif text-xl mb-6">Familienbereiche in der Villa</h3>
            <ul className="space-y-4">
              {familySpaces.map((space, index) => (
                <li key={index} className="bg-white p-4 rounded-sm shadow-md">
                  <h4 className="font-medium mb-1">{space.name}</h4>
                  <p className="text-sm text-gray-600">{space.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-6">Annehmlichkeiten für Familien</h3>
            <div className="bg-white p-6 rounded-sm shadow-md h-full">
              <h4 className="font-medium mb-4">Auf Anfrage verfügbar:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Hochstühle und Sitzerhöhungen</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Kinderbetten und Kleinkinderbetten</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Babyphones</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Kindersicherheitsausrüstung</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Kinderbücher und Spielzeug</span>
                </li>
              </ul>
              
              <h4 className="font-medium mb-4">Dienstleistungen für Familien:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Empfehlungen für familienfreundliche Restaurants</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Informationen zu lokalen Babysitter-Diensten</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Erste-Hilfe-Kasten und medizinische Informationen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <SectionTitle subtitle="FAMILIENAKTIVITÄTEN" centered>
          Abenteuer für alle Altersgruppen
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {familyActivities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="text-xs font-medium text-villa-accent mt-auto">
                {activity.suitable}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Saisonale Familienaktivitäten</h3>
              <p className="text-gray-700 mb-6">
                Jede Jahreszeit bietet einzigartige Familienerlebnisse in und um die Villa Morgenthau:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Frühling & Sommer</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Beerenpflücken auf lokalen Bauernhöfen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Schwimmen und Wasserspiele an sicheren Stränden</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Outdoor-Abenteuerparks und Seilrutschen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Familienfreundliche Wanderungen mit Wildtierbeobachtung</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Herbst & Winter</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Apfelplantagen und Erntefeste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Indoor-Museen und kulturelle Aktivitäten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Gemütliche Rodelbahnen und Schneespielbereiche</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Traditionelle Handwerksworkshops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Saisonale Familienaktivitäten" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliesActivities;
