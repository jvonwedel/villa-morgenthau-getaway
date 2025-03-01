import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-villa-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/5075dc92-2d80-4397-9783-ef683a9b4b1b.png" alt="Villa Morgenthau Logo" className="h-16 mb-4 invert" />
            <p className="text-villa-muted mt-4 text-sm">
              Villa Morgenthau, a historic vacation home since 1867. Experience luxury and serenity in one of the most beautiful natural settings.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-villa-muted hover:text-white transition-colors text-sm">About Villa Morgenthau</Link></li>
              <li><Link to="/location" className="text-villa-muted hover:text-white transition-colors text-sm">Location</Link></li>
              <li><Link to="/seeking-calm" className="text-villa-muted hover:text-white transition-colors text-sm">Seeking Calm</Link></li>
              <li><Link to="/for-actives" className="text-villa-muted hover:text-white transition-colors text-sm">For Actives</Link></li>
              <li><Link to="/for-families" className="text-villa-muted hover:text-white transition-colors text-sm">For Families</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">More</h3>
            <ul className="space-y-2">
              <li><Link to="/your-stay" className="text-villa-muted hover:text-white transition-colors text-sm">Your Stay</Link></li>
              <li><Link to="/gallery" className="text-villa-muted hover:text-white transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/booking" className="text-villa-muted hover:text-white transition-colors text-sm">Prices & Booking</Link></li>
              <li><Link to="/imprint" className="text-villa-muted hover:text-white transition-colors text-sm">Imprint</Link></li>
              <li><Link to="/privacy" className="text-villa-muted hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4 border-b border-villa-accent pb-2 inline-block">Contact</h3>
            <p className="text-villa-muted text-sm mb-2">Email: villamorgenthau@gmail.com</p>
            <p className="text-villa-muted text-sm mb-2">Phone: +49 179 487 8661</p>
            <p className="text-villa-muted text-sm">Address: Rott 5, 25872 Ostenfeld, Germany</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-villa-muted">
          <p>© {new Date().getFullYear()} Villa Morgenthau. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;