
import Layout from '../components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">1. Verantwortliche Stelle</h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>V. Wedel, villamorgenthau -at- gmail -punkt- com</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3">a) Beim Besuch der Website</h3>
              <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei erfasst und bis zur automatisierten Löschung gespeichert:</p>
              <ul className="list-disc pl-6 my-4">
                <li>IP-Adresse des anfragenden Rechners,</li>
                <li>Datum und Uhrzeit des Zugriffs,</li>
                <li>Name und URL der abgerufenen Datei,</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
              </ul>
              <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
              <ul className="list-disc pl-6 my-4">
                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
                <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken.</li>
              </ul>
              <p>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.</p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">b) Nutzung von Google Analytics</h3>
              <p>Diese Website verwendet Google Analytics, einen Webanalysedienst der Google LLC („Google"). Google Analytics verwendet sog. „Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
              <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-villa-accent hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">c) Einbindung von Instagram und Airbnb</h3>
              <p>Auf unserer Website sind Links zu unseren Profilen auf Instagram und Airbnb integriert. Wenn Sie diesen Links folgen, verlassen Sie unsere Website und es gelten die Datenschutzbestimmungen der jeweiligen Plattformen:</p>
              <p>Instagram: <a href="https://help.instagram.com/519522125107875" className="text-villa-accent hover:underline" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a></p>
              <p>Airbnb: <a href="https://www.airbnb.de/help/article/2855/datenschutzerkl%C3%A4rung" className="text-villa-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.airbnb.de/help/article/2855/datenschutzerkl%C3%A4rung</a></p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">3. Cookies</h2>
              <p>Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Dabei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.</p>
              <p>Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">4. Betroffenenrechte</h2>
              <p>Sie haben das Recht:</p>
              <ul className="list-disc pl-6 my-4">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist;</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">5. Widerspruchsrecht</h2>
              <p>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">6. Datensicherheit</h2>
              <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Zudem setzen wir geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE')}. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version kann jederzeit auf unserer Website abgerufen werden.</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
