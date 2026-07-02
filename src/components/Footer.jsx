import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-bordo-dark text-offWhite/80 py-12 border-t border-bordo-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-serif text-offWhite font-bold tracking-wider">Studio NM</h2>
          <p className="text-xs text-roseGold-light mt-1">Por Naila Macedo — Jacobina - BA</p>
        </div>
        
        <div className="flex space-x-6 text-xl">
          <a href="https://www.instagram.com/studio_n.m2025" target="_blank" rel="noopener noreferrer" className="hover:text-roseGold transition-colors" aria-label="Acesse nosso Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5574981262295" target="_blank" rel="noopener noreferrer" className="hover:text-roseGold transition-colors" aria-label="Abra nosso canal no WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <div className="text-xs text-center md:text-right">
          <p>© {new Date().getFullYear()} Studio NM. Todos os direitos reservados.</p>
          <p className="text-[10px] text-gray-500 mt-1">Desenvolvido com sofisticação front-end premium.</p>
        </div>
      </div>
    </footer>
  );
}