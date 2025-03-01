
import SectionTitle from '../ui/SectionTitle';

const ActivesContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ABENTEUER WARTEN">
              Erleben Sie die großartige Natur
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Während die Villa Morgenthau einen ruhigen Rückzugsort bietet, ist sie auch der perfekte Ausgangspunkt für Abenteuerlustige und Outdoor-Aktivitäten. Die Umgebung ist ein Paradies für aktive Reisende mit Möglichkeiten zum Wandern, Radfahren, Wassersport und mehr.
            </p>
            
            <p className="text-gray-700 mb-6">
              Unsere Lage bietet einfachen Zugang zu zahlreichen Wegen, die durch Wälder, entlang von Flüssen und hinauf zu Aussichtspunkten führen. Für Wasserliebhaber bieten nahegelegene Seen und Flüsse Möglichkeiten zum Schwimmen, Kajakfahren und Angeln.
            </p>
            
            <p className="text-gray-700 mb-8">
              Nach einem Tag voller Erkundungen und Abenteuer kehren Sie in den Komfort der Villa Morgenthau zurück, um sich zu entspannen und für die Aktivitäten des nächsten Tages neue Energie zu tanken. Unsere geräumigen Unterkünfte und Annehmlichkeiten sind darauf ausgerichtet, Ihren aktiven Lebensstil zu unterstützen.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Abenteueraktivitäten nahe der Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivesContent;
