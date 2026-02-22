import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Performance Marketing',
    'SEO Management',
    'Website Development',
    'Branding & Design',
    'Social Media Management',
    'Content Creation',
  ];

  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#5dffcf' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <div className="mb-2">
                <img
                  src={logo1}
                  alt="ArtVilla Studios"
                  className="w-[200px] h-[200px] object-contain"
                />
              </div>
              <p className="text-sm italic" style={{ color: 'rgb(24 97 107)' }}>
                Where Brands Come Alive
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgb(24 97 107)' }}>
              A premium 360° branding, marketing & growth agency helping brands
              scale through creativity, performance marketing, and AI-powered
              solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider" style={{ color: '#002320' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#002320] transition-colors duration-200"
                    style={{ color: 'rgb(24 97 107)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider" style={{ color: '#002320' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm" style={{ color: 'rgb(24 97 107)' }}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider" style={{ color: '#002320' }}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:studiosartvilla@gmail.com"
                className="flex items-start space-x-3 text-sm hover:text-[#002320] transition-colors group"
                style={{ color: 'rgb(24 97 107)' }}
              >
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="break-all">studiosartvilla@gmail.com</span>
              </a>
              <a
                href="tel:+917439756746"
                className="flex items-start space-x-3 text-sm hover:text-[#002320] transition-colors group"
                style={{ color: 'rgb(24 97 107)' }}
              >
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+91 74397 56746</span>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-sm" style={{ color: '#002320' }}>
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:studiosartvilla@gmail.com"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Artvilla Studios. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
