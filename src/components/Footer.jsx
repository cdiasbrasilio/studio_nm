import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    // Reduzido o padding vertical de py-16 para py-6 para deixar a faixa mais estreita
    <footer className="bg-bordo-dark text-offWhite/80 py-6 border-t border-bordo-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Identificação da Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif text-offWhite font-bold tracking-wider">
            Studio NM
          </h2>
          <p className="text-sm text-roseGold-light mt-1 font-sans">
            Por Naila Macedo — Jacobina - BA
          </p>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex space-x-8 text-3xl">
          <a 
            href="https://www.instagram.com/studio_n.m2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-roseGold text-offWhite transition-colors duration-300 transform hover:scale-110" 
            aria-label="Acesse nosso Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://wa.me/5574981262295" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-roseGold text-offWhite transition-colors duration-300 transform hover:scale-110" 
            aria-label="Abra nosso canal no WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Direitos Autorais e Créditos */}
        <div className="text-sm text-center md:text-right font-sans">
          <p>© {new Date().getFullYear()} Studio NM. Todos os direitos reservados.</p>
          <p className="text-xs text-offWhite/40 mt-1">
            Desenvolvido por{' '}
            <a 
              href="https://www.cdiasbrasilio.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-roseGold-light hover:text-roseGold underline decoration-roseGold/20 transition-colors"
            >
              CDiasBrasilio
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}