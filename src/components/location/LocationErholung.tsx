
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationErholung = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      alt: 'Landschaftsfotografie von Bergen im Sonnenlicht'
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      alt: 'Nebliger Berggipfel zum Entspannen'
    },
    {
      url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
      alt: 'Wald im Sonnenlicht'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      alt: 'Gelbes Licht zwischen Bäumen'
    }
  ];

  return (
    <section className="section-padding bg-villa-muted/50">
      <div className="container-custom">
        <SectionTitle subtitle="ENTSPANNUNG">
          Erholung in der Natur
        </SectionTitle>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Die Villa Morgenthau bietet den perfekten Rückzugsort für alle, die dem Alltag entfliehen und die Seele baumeln lassen möchten. Umgeben von malerischer Natur finden Sie hier die Ruhe, die Sie suchen. Genießen Sie entspannte Spaziergänge durch die umliegenden Wälder, meditieren Sie am ruhigen See oder lassen Sie einfach den Blick über die weite Landschaft schweifen.
          </p>
          <p className="text-gray-700">
            Unsere Villa ist der ideale Ort, um zur Ruhe zu kommen, durchzuatmen und neue Kraft zu tanken. Fernab von Hektik und Lärm können Sie hier den Moment genießen und sich vollkommen entspannen.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
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

export default LocationErholung;
