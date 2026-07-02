import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="bg-bordo-dark text-offWhite border-b border-bordo-light sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand/Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-2xl font-serif font-bold tracking-wider text-roseGold hover:text-roseGold-light transition-colors">
              Studio NM
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm uppercase tracking-widest text-offWhite/90 hover:text-roseGold font-semibold transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-roseGold hover:text-roseGold-light focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-bordo border-t border-bordo-light shadow-xl">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-sans uppercase tracking-wider text-offWhite hover:bg-bordo-dark hover:text-roseGold transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}