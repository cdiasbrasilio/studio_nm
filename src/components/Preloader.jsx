import { motion } from 'framer-motion';

export default function Preloader({ finishLoading }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bordo"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.5 }}
      onAnimationComplete={finishLoading}
    >
      <div class="relative flex flex-col items-center">
        {/* Logo Text Simulado com Brilho Estilizado */}
        <motion.h1 
          className="text-4xl md:text-5xl font-serif text-offWhite tracking-widest relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Studio NM
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.h1>
        
        <motion.p 
          className="text-roseGold-light font-light tracking-wide mt-2 text-sm uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Naila Macedo
        </motion.p>

        {/* Linha de progresso delicada */}
        <div class="w-48 h-[2px] bg-bordo-light mt-6 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-roseGold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}