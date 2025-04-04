
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationAktiv = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      alt: 'Wanderweg durch den Wald mit Felsen'
    },
    {
      url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
      alt: 'Fluss umgeben von Felsformationen'
    },
    {
      url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      alt: 'Ozeanwelle am Strand'
    },
    {
      url: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
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
            Die Region um die Villa Morgenthau ist ein wahres Paradies für Aktivurlauber. Erkunden Sie die zahlreichen Wanderwege, die durch Wälder und entlang der Küste führen. Unternehmen Sie ausgedehnte Radtouren durch die malerische Landschaft oder entdecken Sie die Gewässer bei einer Kanutour.
          </p>
          <p className="text-gray-700">
            Für Wassersportbegeisterte bieten die nahe gelegenen Seen und die Ostsee ideale Bedingungen zum Segeln, Kitesurfen und Schwimmen. Die vielfältigen Möglichkeiten für sportliche Aktivitäten machen jeden Tag Ihres Aufenthalts zu einem neuen Abenteuer.
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
