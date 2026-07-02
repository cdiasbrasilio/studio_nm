import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineArrowRight } from 'react-icons/hi';

export default function Galeria() {
  const [activeImage, setActiveImage] = useState(null);

  // Substituir pelos links reais do Instagram obtidos na curadoria do Canva/Insta
  const fotos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800', alt: 'Alongamento Fibra de Vidro Nude' },
    { id: 2, src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800', alt: 'Esmaltação em Gel com Glitter' },
    { id: 3, src: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=800', alt: 'Unhas formato Almôndega Premium' },
    { id: 4, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800', alt: 'Nail Art Minimalista Elegante' },
    { id: 5, src: 'https://images.unsplash.com/photo-1604654894610-df490651e56c?q=80&w=800', alt: 'Alongamento F1 Francesinha Reversa' },
    { id: 6, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800', alt: 'Banho em Gel Natural' },
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Portfólio</span>
          <h2 className="text-4xl font-serif text-bordo font-bold">Galeria de Resultados</h2>
          <div className="w-24 h-[2px] bg-roseGold mx-auto mt-4" />
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {fotos.map((foto) => (
            <motion.div 
              key={foto.id}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer group"
              onClick={() => setActiveImage(foto)}
            >
              <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-bordo/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-offWhite text-xs tracking-widest uppercase font-medium bg-bordo/60 px-4 py-2 rounded-full border border-white/20">Ampliar Obra</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.instagram.com/studio_n.m2025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-roseGold font-medium hover:text-bordo transition-colors">
            Ver portfólio completo no Instagram <HiOutlineArrowRight />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl cursor-pointer" onClick={() => setActiveImage(null)} aria-label="Fechar galeria">
              <HiX />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}