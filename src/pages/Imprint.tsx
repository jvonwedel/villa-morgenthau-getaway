
import Layout from '../components/layout/Layout';

const Imprint = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif mb-8">Impressum</h1>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <p>Angaben gemäß § 5 TMG: V. Wedel, villamorgenthau -at- gmail -punkt- com, Tel.: 048419041461</p>
              
              <p className="mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                <br />V. Wedel, villamorgenthau -at- gmail -punkt- com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Bildrechte / Bildnachweise</h2>
              <p>Alle auf dieser Website verwendeten Bilder sind Eigentum von Villa Morgenthau und dürfen ohne ausdrückliche Genehmigung nicht verwendet, vervielfältigt oder verbreitet werden.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-villa-accent hover:underline">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Kontakt</h2>
              <p>V. Wedel, villamorgenthau -at- gmail -punkt- com, Tel 048419041461</p>
            </section>
            
            <p className="text-sm text-gray-500 mt-12">Stand: April 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Imprint;
