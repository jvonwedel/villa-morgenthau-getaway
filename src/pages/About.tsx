import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from "@/components/ui/card";

const About = () => {
  // Images for the new gallery row
  const topImages = [
    {
      url: '/lovable-uploads/images/about_image/aboutimagestop1.jpeg',
      alt: 'Modern interior with natural light'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagestop2.jpeg',
      alt: 'Elegant bedroom space'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagestop3.jpeg',
      alt: 'Cozy living area'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagestop4.jpeg',
      alt: 'Stylish interior design'
    }
  ];

  // Additional images for the bottom gallery
  const bottomImages = [
    {
      url: '/lovable-uploads/images/about_image/aboutimagebtm.jpeg',
      alt: 'Garden view of Villa Morgenthau'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagebtm2.jpeg',
      alt: 'Exterior architecture detail'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagebtm3.jpeg',
      alt: 'Natural surroundings'
    },
    {
      url: '/lovable-uploads/images/about_image/aboutimagebtm4.jpeg',
      alt: 'Villa garden space'
    }
  ];

  return <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Über die Villa Morgenthau</h1>
            
            {/* First photo container with updated image */}
            <div className="mb-10">
              <div className="w-full h-auto rounded-sm shadow-lg mb-4 overflow-hidden">
                <img src="/lovable-uploads/images/about_image/aboutbanner/aboutbarner.jpeg" alt="Villa Morgenthau Historical Photo" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-500 italic text-center">Urkunde der Villa Morgenthau</p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-2xl mb-4">Auf den Spuren des Königlichen Waldvogts
            </h2>
              
              <p className="mb-6">Die Villa Morgenthau wurde ursprünglich als Wohnhaus des Königlichen Waldvogts gebaut und war Teil eines größeren Hofensembles, von dem heute nur noch eine weitere Scheune erhalten ist.</p>

              <p className="mb-6">Von der ursprünglichen Architektur sind noch zahlreiche historische Elemente erhalten, die dem Haus seinen besonderen Charakter verleihen.</p>

              <p className="mb-6">Nachdem sie jahrelang leer stand, haben wir sie umfassend modernisiert. Bei der Restaurierung haben wir uns bemüht, die historischen Elemente wie die wunderschönen Terrazzoböden zu bewahren und gleichzeitig sensibel moderne Ausstattung zu integrieren.</p>
              
              {/* Second photo container with two photos side by side */}
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="w-full h-auto rounded-sm shadow-lg mb-4 overflow-hidden">
                    <AspectRatio ratio={4 / 3}>
                      <img src="/lovable-uploads/images/about_image/aboutbanner/aboutstairimage.jpeg" alt="Villa Morgenthau Renovation" className="w-full h-full object-cover" />
                    </AspectRatio>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Restaurierung der Villa Morgenthau</p>
                </div>
                
                <div>
                  <div className="w-full h-auto rounded-sm shadow-lg mb-4 overflow-hidden">
                    <AspectRatio ratio={4 / 3}>
                      <img src="/lovable-uploads/images/about_image/aboutbanner/aboutoldhome.jpeg" alt="Villa Morgenthau Garden View" className="w-full h-full object-cover" />
                    </AspectRatio>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Umbau der offenen Küche</p>
                </div>
              </div>
              
              <div className="flex justify-center my-12">
                <a href="https://www.instagram.com/villamorgenthau/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  VORHER-NACHHER AUF INSTAGRAM
                </a>
              </div>
              
              {/* New section with heading and paragraph */}
              <h2 className="font-serif text-2xl mb-4 mt-8">Die Idee hinter dem Namen</h2>
              
              <p className="mb-6">Morgens legt sich ein Schleier aus Tau über die weiten Wiesen und Felder rund ums Haus. Wenn die Sonne langsam aufgeht, glitzern Millionen winziger Tropfen im ersten Sonnenlicht – und erinnern daran, warum die Villa Morgenthau ihren Namen trägt.</p>
              
              {/* New image after the paragraph */}
              <div className="w-full h-auto my-10 rounded-sm shadow-lg mb-4 overflow-hidden">
                <img src="/lovable-uploads/images/about_image/aboutbanner/aboutoutsideimg.jpeg" alt="Morning dew at Villa Morgenthau" className="w-full h-full object-cover" />
              </div>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Home away from home - unsere Philosphie</h2>
              
              <p className="mb-6">Hier, mitten in der Natur, ist Platz zum Durchatmen und Abschalten. Drinnen sorgt der Kachelofen für wohlige Wärme und der offene Wohn- und Essbereich bietet für genug Platz für alle, falls sich das nordfriesische Wetter mal nicht von seiner besten Seite zeigt. In der Bibliothek ist Platz zum Lesen oder zum Arbeiten, Glasfasernetz stellt sicher, dass auch Worcation kein Problem ist. Die Möbel sind mit Liebe ausgewählt – gemütlich, stilvoll, aber nicht überladen.
            </p>

              {/* Updated first image gallery row with the new URLs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {topImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md rounded-none">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </Card>
                ))}
              </div>

              <p className="mb-6">Draußen erstreckt sich der große Garten mit alten Bäumen und viel Grün. Ein Ort, an dem man sofort ankommt, an dem die Zeit ein bisschen langsamer läuft und man sich einfach wohlfühlt. Im Liegestuhl in der Sonne ein Buch lesen, währen die Kinder Fussball spielen oder Käfer und Mini-Frösche im Beet entdecken. Oder in der Hängematte liegen und träumen. Alles möglich. Und am Rande der großen Wiese steht die alte Friedenseiche – als wäre sie schon immer da gewesen, um Ruhe zu schenken.</p>
              
              <p className="mb-12">Und dann ist da noch der Obstgarten, der Walnussbaum und die Marone - wir laden euch herzlich zur Ernte ein. Ob Bärlauch im Frühling, Beeren im Sommer oder Maronen, Walnüsse, Äpfel und Birnen im Herbst. Frischer und lokaler geht nicht.</p>

              {/* Updated bottom images row with the new URLs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {bottomImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md rounded-none">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </Card>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-12">
                <a href="https://www.airbnb.de/rooms/1305881991709578029" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  JETZT BUCHEN
                </a>
                <Link to="/gallery" className="btn-secondary">
                  ZUR GALERIE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;
