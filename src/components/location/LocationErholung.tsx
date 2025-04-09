
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationErholung = () => {
  const images = [{
    url: '/src/images/location_image/location_erholung/locatioerlung.jpeg',
    alt: 'Landschaftsfotografie von Bergen im Sonnenlicht'
  }, {
    url: '/src/images/location_image/location_erholung/locationerlung2.jpeg',
    alt: 'Nebliger Berggipfel zum Entspannen'
  }, {
    url: '/src/images/location_image/location_erholung/locationerlung3.jpeg',
    alt: 'Wald im Sonnenlicht'
  }, {
    url: '/src/images/location_image/location_erholung/locationerlung4.jpeg',
    alt: 'Gelbes Licht zwischen Bäumen'
  }];
  
  return <section id="erholung" className="section-padding bg-villa-muted/50">
      <div className="container-custom">
        <SectionTitle subtitle="ENTSPANNUNG">
          Erholung & Ruhe in der Natur
        </SectionTitle>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">Die Villa Morgenthau bietet den perfekten Rückzugsort für alle, die dem Alltag entfliehen und die Seele baumeln lassen möchten. Umgeben von malerischer Natur findet ihr hier die Ruhe, die im Alltag sonst viel zu kurz kommt. Genießt entspannte Spaziergänge durch die umliegenden Wälder, watet durch die Weiten des Wattenmeers oder lasst einfach mal den Blick über die Landschaft schweifen. Hier könnt ihr durchatmen und neue Kraft tanken. Und abends? Da könnt ihr euch einfach zurücklehnen, in den Himmel schauen und Millionen Sterne sehen – ohne Stadtlichter, die alles überstrahlen. Perfekt, um den Tag in Ruhe ausklingen zu lassen.</p>
          
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => <Card key={index} className="overflow-hidden border-none shadow-md rounded-none">
              <AspectRatio ratio={1 / 1}>
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" onError={e => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }} />
              </AspectRatio>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default LocationErholung;
