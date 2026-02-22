import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Clients from '../pages/Clients';
import Gallery from '../pages/Gallery';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';

const Router = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const pages: Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    clients: <Clients />,
    gallery: <Gallery />,
    careers: <Careers />,
    contact: <Contact />,
  };

  return pages[currentPage] || pages.home;
};

export default Router;
