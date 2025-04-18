import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationFamilien = () => {
  const images = [
    {
      url: '/lovable-uploads/images/location_image/location_familie/familie1.jpeg',
      alt: 'Wildtiere auf einer Wiese'
    },
    {
      url: '/lovable-uploads/images/location_image/location_familie/familie2.jpeg',
      alt: 'Eine Schafherde auf der Weide'
    },
    {
      url: '/lovable-uploads/images/location_image/location_familie/familie3.jpeg',
      alt: 'Rehe im Wald'
    },
    {
      url: '/lovable-uploads/images/location_image/location_familie/familie4.jpeg',
      alt: 'Familie am Strand'
    }
  ];

  return (
    <section id="familien" className="section-padding bg-villa-muted/50">
      <div className="container-custom">
        <SectionTitle subtitle="FÜR DIE GANZE FAMILIE">
          Family &amp; Friends
        </SectionTitle>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Hier gibt's Platz ohne Ende – für Fußballspiele im Garten, lustige Tischtennis-Matches oder einfach zum Barfuß-Rumrennen. Die Kids können sich austoben, während ihr entspannt in der Hängematte liegt oder gemeinsam das Lagerfeuer für den Abend vorbereitet und schon mal einen Aperitiv genießt. Alles ganz entspannt, so wie es im Urlaub sein soll.
          </p>
          <p className="text-gray-700">
            Und wenn noch mehr Action gefragt ist: Der Spielplatz vom Hofladen Backensholz ist nur ein paar Minuten entfernt – mit einem riesigen Trampolin, auf dem die Kinder eine Menge Spaß haben, während ihr euch durch die Käse-Leckereien probiert. Und wenn das Wetter mal nicht mitspielt ist auch drinnen genug Platz. Wobei, Wattenmeer bei nordfriesischem Regen ist auch eine unvergessliche Kombi. Wir wünschen euch viel Spaß zusammen!
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

export default LocationFamilien;
