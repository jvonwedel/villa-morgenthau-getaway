
import Layout from '../components/layout/Layout';
const About = () => {
  return <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Über die Villa Morgenthau</h1>
            
            <div className="mb-10">
              <div className="w-full h-64 bg-villa-dark rounded-sm shadow-lg mb-4 flex items-center justify-center text-white">
                <span>Villa Morgenthau Historical Photo</span>
              </div>
              <p className="text-sm text-gray-500 italic text-center">Villa Morgenthau circa 1867</p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-2xl mb-4">Die Geschichte</h2>
              <p className="mb-6">Die Villa Morgenthau steht als Zeugnis zeitloser Eleganz inmitten unberührter Natur.</p>
              
              <p className="mb-6">Ursprünglich angelegt als Wohnhaus des Königlichen Waldvogts öffnete die Villa Morgenthau nach einer umfassenden Restaurierung im Jahr 2025 ihre Türen als exklusives Ferienhaus und bietet Gästen nun eine einzigartige Gelegenheit, ihren Urlaub an diesem einzigartigen Ort zu geniessen.</p>
              
              
              <p className="mb-6">Bei der Restaurierung haben wir uns bemüht, die historischen Elemente wie die wunderschönen Terrazzoböden zu bewahren und gleichzeitig sensibel moderne Ausstattung zu integrieren. Hervorzuheben sind hier nicht nur die modernen Bäder, sondern vor allem auch die vollausgestattete Küche mit Kücheninsel, die zu geselligen Kochabenden einlädt.</p>
              
              <p className="mb-6">Jeder Raum wurde sorgfältig und mit Liebe zum Detail gestaltet, um seinen ursprünglichen Zweck widerzuspiegeln und gleichzeitig den Komfort und die Ästhetik zu bieten, den anspruchsvolle Gäste von heute erwarten. Die einzigartige Kombination von alt und neu die Villa Morgenthau blablabla</p>
              
              <h2 className="font-serif text-2xl mb-4 mt-8">Our Philosophy</h2>
              <p className="mb-6">Wir haben mit der Villa Morgenthau eine Umgebung geschaffen, in der Gäste vom hektischen Tempo des modernen Lebens abschalten und wieder zu sich finden können.</p>
              
              <p className="mb-12">Nachhaltigkeit steht im Mittelpunkt unseres Bemühens. 
Unsere Gäste sind herzlich eingeladen, die Früchte des Gartens zu nutzen. Ob Bärlauch und Beeren im Frühling, Quitten und Beeren im Sommer oder Maronen, Walnüsse, Äpfel und Birnen im Herbst: der Garten bietet vielfältige Möglichkeiten, lokale Gerichte zuzubereiten.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;
