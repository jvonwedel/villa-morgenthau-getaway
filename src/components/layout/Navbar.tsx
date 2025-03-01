
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      path: '/',
      label: 'Startseite'
    },
    {
      path: '/about',
      label: 'Über uns'
    },
    {
      path: '/location',
      label: 'Lage'
    },
    {
      path: '/seeking-calm',
      label: 'Entspannung'
    },
    {
      path: '/for-actives',
      label: 'Für Aktive'
    },
    {
      path: '/for-families',
      label: 'Für Familien'
    },
    {
      path: '/your-stay',
      label: 'Ihr Aufenthalt'
    },
    {
      path: '/gallery',
      label: 'Galerie'
    },
    {
      path: '/booking',
      label: 'Buchung'
    }
  ];

  return <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-50">
          <img src="/lovable-uploads/5075dc92-2d80-4397-9783-ef683a9b4b1b.png" alt="Villa Morgenthau Logo" className="h-12 md:h-14 transition-all duration-300" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => <Link key={link.path} to={link.path} className="">
              {link.label}
            </Link>)}
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-current" /> : <Menu className="h-6 w-6 text-current" />}
        </button>
        
        {/* Mobile Nav */}
        {isOpen && <div className="fixed inset-0 bg-white flex flex-col items-center justify-center animate-fade-in">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-lg ${location.pathname === link.path ? 'text-accent' : 'text-foreground'}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>)}
              <Link to="/booking" className="mt-4 btn-primary" onClick={() => setIsOpen(false)}>
                Jetzt Buchen
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};

export default Navbar;
