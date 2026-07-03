import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import imagemHero from '../assets/hero-unhas.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-offWhite via-pink-50/20 to-roseGold/10 pt-20 relative overflow-hidden">
      {/* Elementos Florais Decorativos Abstratos de Fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-roseGold/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-bordo/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Texto do Hero */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center z-10"
        >
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-3">Naila Macedo</span>
          <h1 className="text-5xl md:text-6xl font-serif text-bordo font-bold leading-tight mb-6">
            Unhas impecáveis que valorizam sua beleza.
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Eleve sua autoestima com procedimentos de alto padrão e acabamento impecável, desenhados para a mulher moderna.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="agendar" smooth={true} duration={500} offset={-80} aria-label="Ir para agendamento">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-bordo text-offWhite rounded-full shadow-lg font-medium hover:bg-bordo-light transition-all cursor-pointer"
              >
                Agendar Agora
              </motion.button>
            </Link>
            <Link to="servicos" smooth={true} duration={500} offset={-80} aria-label="Ver serviços">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-bordo text-bordo rounded-full font-medium hover:bg-bordo hover:text-offWhite transition-all cursor-pointer"
              >
                Conhecer Serviços
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Imagem do Hero (Floating Animation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-md aspect-[4/5] bg-neutral-300 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Placeholder Premium para Imagem Profissional */}
            <img 
              src={imagemHero}
              alt="Mão elegante com alongamento de unhas perfeito feito por Naila Macedo" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
          {/* Elemento Geométrico de Fundo em Dourado Suave */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-dourado/30 rounded-[2rem] -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}