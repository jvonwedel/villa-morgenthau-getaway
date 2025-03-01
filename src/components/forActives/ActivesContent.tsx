
import SectionTitle from '../ui/SectionTitle';

const ActivesContent = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ABENTEUER ERWARTET DICH">
              Entdecke die Natur
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">Während die Villa Morgenthau einen ruhigen Rückzugsort bietet, ist sie auch der perfekte Ausgangspunkt für Abenteuerlustige, denn es gibt zahlreiche Outdoor-Aktivitäten, die auf euch warten. Die Umgebung ist ein Paradies für Aktive mit Möglichkeiten zum (Watt-)Wandern, Radfahren, Golfen für Wassersport wie Kanuwandern oder Kiten, Segeln, Surfen und vieles andere mehr.</p>
            
            <p className="text-gray-700 mb-6">Unsere Lage bietet einfachen Zugang zu zahlreichen Spazier- und Wanderwegen, die durch Wälder und Felder führen. Oder wie wäre es mit einer Wattwanderung im UNESCO Weltnaturerbe oder einem Kanutrip entlang der Treene? Für Wasserliebhaber bietet darüber hinaus auch die nahegelegene Schlei Möglichkeiten zum Schwimmen, Kajakfahren, Angeln und Segeln.</p>
            
            <p className="text-gray-700 mb-8">Nach einem Tag voller Erkundungen und Abenteuer kehrt ihr in die gemütliche der Villa Morgenthau zurück, um sich zu entspannen und für die Aktivitäten des nächsten Tages neue Energie zu tanken. Unsere geräumigen Unterkünfte und Annehmlichkeiten sind darauf ausgerichtet, Ihren aktiven Lebensstil zu unterstützen.</p>
          </div>
          
          <div>
            <img src="/placeholder.svg" alt="Adventure activities near Villa Morgenthau" className="w-full h-auto rounded-sm shadow-lg" />
          </div>
        </div>
      </div>
    </section>;
};

export default ActivesContent;
