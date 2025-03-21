import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const About = () => {
  return <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Über die Villa Morgenthau</h1>
            
            {/* First photo container as a single banner */}
            <div className="mb-10">
              <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                <span>Villa Morgenthau Historical Photo</span>
              </div>
              <p className="text-sm text-gray-500 italic text-center">Urkunde der Villa Morgenthau</p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-2xl mb-4">Ein Ort mit Geschichte</h2>
              <p className="mb-6">Die Villa Morgenthau wurde ursprünglich als Wohnhaus des Königlichen Waldvogts gebaut und war Teil eines größeren Hofensembles, von dem heute nur noch eine weitere Scheune erhalten ist.

Nachdem sie jahrelang leer stand, haben wir sie umfassend modernisiert. Bei der Restaurierung haben wir uns bemüht, die historischen Elemente wie die wunderschönen Terrazzoböden zu bewahren und gleichzeitig sensibel moderne Ausstattung zu integrieren.</p>
              
              {/* Second photo container with two photos side by side */}
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Renovation</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Restaurierung der Villa Morgenthau</p>
                </div>
                
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Garden View</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Der Garten der Villa Morgenthau</p>
                </div>
              </div>
              
              <p className="mb-6 text-base font-normal">Den einzigartigen Charme durch Kachelofen, Beschläge, 

drinnen und draußen

Friedenseiche,</p>
              
              {/* Gallery button */}
              <div className="flex justify-center my-8">
                <Link to="/gallery" className="btn-secondary">
                  ZUR GALERIE
                </Link>
              </div>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Home away from home - unsere Philosphie
            </h2>
              <p className="mb-6">Wir haben mit der Villa Morgenthau eine Umgebung geschaffen, in der Gäste vom hektischen Tempo des modernen Lebens abschalten und wieder zu sich finden können.

Jeder Raum wurde sorgfältig und mit Liebe zum Detail gestaltet, von den modernen Bädern und Schlafzimmern bis hin zur vollausgestattete Küche mit Kücheninsel, die zu geselligen Kochabenden einlädt. Und der offene Wohn- und Essbereich bietet für genug Platz für alle, falls sich das nordfriesische Wetter mal nicht von seiner besten Seite zeigt. In der Bibliothek ist Platz zum Lesen oder zum Arbeiten, Glasfasernetz stellt sicher, dass auch Worcation kein Problem ist.</p>
              
              <p className="mb-12">Nachhaltigkeit steht im Mittelpunkt unseres Bemühens. 
Unsere Gäste sind herzlich eingeladen, die Früchte des Gartens zu nutzen. Ob Bärlauch und Beeren im Frühling, Quitten und Beeren im Sommer oder Maronen, Walnüsse, Äpfel und Birnen im Herbst: der Garten bietet vielfältige Möglichkeiten, lokale Gerichte zuzubereiten.</p>

              {/* Four additional photos in a grid */}
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Living Room</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Der gemütliche Wohnbereich</p>
                </div>
                
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Kitchen</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Die moderne Küche</p>
                </div>
                
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Bedroom</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Ein komfortables Schlafzimmer</p>
                </div>
                
                <div>
                  <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                    <span>Villa Morgenthau Bathroom</span>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">Das moderne Badezimmer</p>
                </div>
              </div>
              
              {/* Booking button */}
              <div className="flex justify-center my-8">
                <Link to="/booking" className="btn-secondary">
                  JETZT BUCHEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;