import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: '#5dffcf' } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {!logoError ? (
              <img
                src={logo}
                alt="ArtVilla Studios"
                onError={() => setLogoError(true)}
                className="h-14 w-auto"
              />
            ) : (
              <div className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Artvilla
                </span>
                <span className="text-gray-600 font-light"> Studios</span>
              </div>
            )}
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hover:text-[#002320] transition-colors relative group"
                style={{ color: 'rgb(237 93 42)' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#207e87] transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: 'rgb(254 176 30)', color: 'rgb(25 95 105)' }}
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'rgb(24 97 107)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-20 left-0 right-0 shadow-lg"
            style={{ backgroundColor: '#5dffcf', borderTop: '1px solid #002320' }}
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium hover:text-[#002320] rounded-lg transition-colors"
                  style={{ color: 'rgb(24 97 107)' }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-4 px-6 py-3 text-center font-medium rounded-full transition-colors"
                style={{ backgroundColor: '#002320', color: '#5dffcf' }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
