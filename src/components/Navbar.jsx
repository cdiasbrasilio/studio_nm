import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, target: 'home', label: 'Início' },
    { id: 2, target: 'sobre', label: 'Sobre' },
    { id: 3, target: 'servicos', label: 'Serviços' },
    { id: 4, target: 'galeria', label: 'Galeria' },
    { id: 5, target: 'agendar', label: 'Agendamento' },
    { id: 6, target: 'contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed w-full h-20 z-40 transition-all duration-300 ${scrolled ? 'bg-bordo text-offWhite shadow-lg' : 'bg-transparent text-bordo'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <div className="cursor-pointer">
          <h1 className="text-2xl font-serif tracking-wider font-bold">Studio NM</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-wider">
          {links.map(({ id, target, label }) => (
            <li key={id} className="cursor-pointer hover:text-roseGold transition-colors duration-200">
              <Link to={target} smooth={true} duration={500} offset={-80}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer z-50 text-2xl">
          {nav ? <HiX className="text-offWhite" /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile Drawer */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-bordo text-offWhite z-40 space-y-6 text-xl font-serif">
            {links.map(({ id, target, label }) => (
              <li key={id} className="cursor-pointer hover:text-roseGold transition-colors duration-200">
                <Link onClick={() => setNav(false)} to={target} smooth={true} duration={500} offset={-80}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}