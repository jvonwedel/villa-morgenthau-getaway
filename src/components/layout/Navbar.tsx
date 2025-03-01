
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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/location', label: 'Location' },
    { path: '/seeking-calm', label: 'Seeking Calm' },
    { path: '/for-actives', label: 'For Actives' },
    { path: '/for-families', label: 'For Families' },
    { path: '/your-stay', label: 'Your Stay' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
  ];
  
  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-95 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-50">
          <img 
            src="/lovable-uploads/5075dc92-2d80-4397-9783-ef683a9b4b1b.png" 
            alt="Villa Morgenthau Logo" 
            className="h-12 md:h-14 transition-all duration-300" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`navbar-link ${
                location.pathname === link.path ? 'navbar-link-active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="ml-3 btn-primary"
          >
            Book Now
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-current" />
          ) : (
            <Menu className="h-6 w-6 text-current" />
          )}
        </button>
        
        {/* Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center animate-fade-in">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-lg ${
                    location.pathname === link.path 
                      ? 'text-accent' 
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/booking" 
                className="mt-4 btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
