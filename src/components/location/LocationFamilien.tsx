
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationFamilien = () => {
  const images = [
    {
      url: 'https://imgur.com/Ra7t2Jm.jpg',
      alt: 'Wildtiere auf einer Wiese'
    },
    {
      url: 'https://imgur.com/q3e67S1.jpg',
      alt: 'Eine Schafherde auf der Weide'
    },
    {
      url: 'https://imgur.com/tJ12hM9.jpg',
      alt: 'Rehe im Wald'
    },
    {
      url: 'https://imgur.com/MLLScuV.jpg',
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
            Hier gibt's Platz ohne Ende – für Fußballspiele im Garten, lustige Tischtennis-Matches oder einfach zum Barfuß-Rumrennen. Die Kids können sich austoben, während ihr entspannt in der Hängematte liegt oder gemeinsam den Tag genießt. Alles ganz unkompliziert, so wie es sein soll.
          </p>
          <p className="text-gray-700">
            Und wenn noch mehr Action gefragt ist: Der Spielplatz vom Hofladen Backensholz ist nur ein paar Minuten entfernt – mit einem riesigen Trampolin, auf dem die Kinder eine Menge Spaß haben, während ihr euren Drink genießt. Und wenn das Wetter mal nicht mitspielt ist auch drinnen genug Platz. Wobei, Wattenmeer bei nordfriesischem Regen ist auch eine unvergessliche Kombi. Wir wünschen euch viel Spaß zusammen!
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
