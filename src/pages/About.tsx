
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Über Villa Morgenthau</h1>
            
            <div className="mb-10">
              <img 
                src="/placeholder.svg" 
                alt="Villa Morgenthau Historisches Foto" 
                className="w-full h-auto rounded-sm shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 italic text-center">Villa Morgenthau um 1867</p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-2xl mb-4">Unsere Geschichte</h2>
              <p className="mb-6">
                Villa Morgenthau steht als Zeugnis zeitloser Eleganz und historischer Bedeutung. Erbaut im Jahr 1867 vom renommierten Architekten Friedrich Morgenthau, diente die Villa ursprünglich als Sommerresidenz für die Familie Morgenthau, prominente Kaufleute und Förderer der Künste.
              </p>
              
              <p className="mb-6">
                Über Generationen hinweg hat die Villa die wechselnden Zeiten der Geschichte miterlebt und dabei ihre architektonische Integrität und kulturelle Bedeutung bewahrt. Nach einer umfassenden Restaurierung im Jahr 2015 öffnete Villa Morgenthau ihre Türen als exklusives Ferienanwesen und bietet Gästen eine einzigartige Gelegenheit, lebendige Geschichte mit modernem Komfort zu erleben.
              </p>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Architektur & Restaurierung</h2>
              <p className="mb-6">
                Die Villa ist ein Beispiel für den neoklassizistischen Stil, der Mitte des 19. Jahrhunderts populär war, mit eleganten Proportionen, markanten Säulen und aufwendigen Verzierungen. Die jüngsten Restaurierungsarbeiten konzentrierten sich darauf, diese historischen Elemente zu bewahren und gleichzeitig sensibel moderne Annehmlichkeiten einzuführen.
              </p>
              
              <p className="mb-6">
                Jeder Raum wurde sorgfältig gestaltet, um seinen ursprünglichen Zweck widerzuspiegeln und gleichzeitig den Komfort zu bieten, den anspruchsvolle Reisende von heute erwarten. Originale Holzböden wurden restauriert, historische Farbschemata recherchiert und nachgebildet, und zeitgemäße Möbel beschafft, um eine authentische und dennoch luxuriöse Atmosphäre zu schaffen.
              </p>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Unsere Philosophie</h2>
              <p className="mb-6">
                In der Villa Morgenthau glauben wir daran, nicht nur ein Gebäude zu erhalten, sondern eine Lebensweise. Wir bemühen uns, eine Umgebung zu schaffen, in der Gäste vom hektischen Tempo des modernen Lebens abschalten und sich mit einer nachdenklicheren, eleganteren Ära wieder verbinden können.
              </p>
              
              <p className="mb-12">
                Nachhaltigkeit steht im Mittelpunkt unserer Aktivitäten. Von unserem biologischen Garten, der frische Produkte für Gäste liefert, bis hin zu unseren energieeffizienten Systemen, die diskret in die historische Struktur integriert sind, setzen wir uns dafür ein, dass Villa Morgenthau für kommende Generationen erhalten bleibt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
