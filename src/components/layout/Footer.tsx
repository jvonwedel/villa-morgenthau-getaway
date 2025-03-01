
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-villa-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/5075dc92-2d80-4397-9783-ef683a9b4b1b.png" alt="Villa Morgenthau Logo" className="h-16 mb-4 invert" />
            <p className="text-villa-muted mt-4 text-sm">
              Villa Morgenthau, ein historisches Ferienhaus von 1967. Erleben Sie Ruhe & Komfort in schönster Natur zwischen den Meeren.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">Entdecken</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-villa-muted hover:text-white transition-colors text-sm">Über die Villa Morgenthau</Link></li>
              <li><Link to="/location" className="text-villa-muted hover:text-white transition-colors text-sm">Lage</Link></li>
              <li><Link to="/seeking-calm" className="text-villa-muted hover:text-white transition-colors text-sm">Entspannung</Link></li>
              <li><Link to="/for-actives" className="text-villa-muted hover:text-white transition-colors text-sm">Für Aktive</Link></li>
              <li><Link to="/for-families" className="text-villa-muted hover:text-white transition-colors text-sm">Für Familien</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">Mehr</h3>
            <ul className="space-y-2">
              <li><Link to="/your-stay" className="text-villa-muted hover:text-white transition-colors text-sm">Dein Aufenthalt</Link></li>
              <li><Link to="/gallery" className="text-villa-muted hover:text-white transition-colors text-sm">Galerie</Link></li>
              <li><Link to="/booking" className="text-villa-muted hover:text-white transition-colors text-sm">Preise & Buchung</Link></li>
              <li><Link to="/imprint" className="text-villa-muted hover:text-white transition-colors text-sm">Impressum</Link></li>
              <li><Link to="/privacy" className="text-villa-muted hover:text-white transition-colors text-sm">Datenschutz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">Kontakt</h3>
            <p className="text-villa-muted text-sm mb-2">E-Mail: info@ferien-an-der-nordsee.de</p>
            <p className="text-villa-muted text-sm mb-2">Telefon: 048419041461</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-villa-muted">
          <p>© {new Date().getFullYear()} Villa Morgenthau. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
