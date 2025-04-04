
import { Card, CardContent } from "../ui/card";
import SectionTitle from '../ui/SectionTitle';
import { AspectRatio } from "../ui/aspect-ratio";

const LocationFamilien = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
      alt: 'Wildtiere auf einer Wiese'
    },
    {
      url: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632',
      alt: 'Eine Schafherde auf der Weide'
    },
    {
      url: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170',
      alt: 'Rehe im Wald'
    },
    {
      url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369',
      alt: 'Pinguine auf einem Felsen'
    }
  ];

  return (
    <section id="familien" className="section-padding bg-villa-muted/50">
      <div className="container-custom">
        <SectionTitle subtitle="FÜR DIE GANZE FAMILIE">
          Familienabenteuer erleben
        </SectionTitle>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Die Villa Morgenthau und ihre Umgebung bieten zahlreiche Aktivitäten für Familien mit Kindern jeden Alters. Entdecken Sie gemeinsam die Natur auf kindgerechten Wanderwegen oder besuchen Sie einen der nahegelegenen Tierparks, wo die Kleinen heimische Tiere aus nächster Nähe erleben können.
          </p>
          <p className="text-gray-700">
            Die Strände der Ostsee laden zu Sandburgenbauen und Muschelsuchen ein, während Ausflüge zu historischen Stätten wie dem Wikingermuseum Haithabu Geschichte lebendig werden lassen. Nach einem erlebnisreichen Tag können Sie im großzügigen Garten der Villa entspannen, während die Kinder noch ausreichend Platz zum Spielen haben.
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
