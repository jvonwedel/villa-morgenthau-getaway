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

  const handleNavLinkClick = (e, path) => {
    if (location.pathname === '/location' && path.startsWith('/location#')) {
      e.preventDefault();
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (path === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'Über'
  }, {
    path: '/location',
    label: 'Lage'
  }, {
    path: '/location#erholung',
    label: 'Erholung'
  }, {
    path: '/location#aktiv',
    label: 'Aktiv'
  }, {
    path: '/location#familien',
    label: 'Familien'
  }, {
    path: '/gallery',
    label: 'Galerie'
  }, {
    path: 'https://www.airbnb.de/rooms/1305881991709578029',
    label: 'Buchung',
    external: true
  }];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="z-50"></div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            link.external ? (
              <a 
                key={link.path} 
                href={link.path} 
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.path} 
                to={link.path} 
                className="navbar-link"
                onClick={(e) => handleNavLinkClick(e, link.path)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-current" /> : <Menu className="h-6 w-6 text-current" />}
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center animate-fade-in">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map(link => (
                link.external ? (
                  <a 
                    key={link.path} 
                    href={link.path} 
                    className={`text-lg ${location.pathname === link.path ? 'text-accent' : 'text-foreground'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`text-lg ${location.pathname === link.path ? 'text-accent' : 'text-foreground'}`} 
                    onClick={(e) => {
                      handleNavLinkClick(e, link.path);
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
