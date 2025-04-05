
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationAktiv = () => {
  const images = [
    {
      url: 'https://imgur.com/vKf0AhZ.jpg',
      alt: 'Wanderweg durch den Wald mit Felsen'
    },
    {
      url: 'https://imgur.com/tWAJwzF.jpg',
      alt: 'Fluss umgeben von Felsformationen'
    },
    {
      url: 'https://imgur.com/cQPT9Oe.jpg',
      alt: 'Ozeanwelle am Strand'
    },
    {
      url: 'https://imgur.com/fWB8nPL.jpg',
      alt: 'Berglandschaft der Alpen'
    }
  ];

  return (
    <section id="aktiv" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="FÜR AKTIVE">
          Spaß, Sport &amp; Action
        </SectionTitle>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Für alle, die im Urlaub nicht nur entspannen, sondern auch was erleben wollen, ist die Villa Morgenthau der perfekte Ausgangspunkt. Die Region bietet eine Fülle an Wassersportmöglichkeiten und Outdoor-Aktivitäten.
          </p>
          <p className="text-gray-700">
            Ob Kitesurfen, Windsurfen oder Segeln – sowohl die die Nordsee als auch die Schlei sind echte Paradiese für Wassersportfans. Auch Kajak- und Kanutouren durch die Küstenlandschaft sind ein unvergessliches Erlebnis. Wer lieber an Land aktiv ist, kann die Umgebung per Rad oder Fuß oder Pferd erkunden. Kilometerlange Deiche und malerische Wege laden zu Touren mit frischer Meeresbrise ein.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md rounded-none">
              <AspectRatio ratio={1/1}>
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </AspectRatio>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationAktiv;
