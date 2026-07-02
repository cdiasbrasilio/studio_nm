import { motion } from 'framer-motion';

export default function CardServico({ icone: Icone, titulo, descricao }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-pink-50/50 transition-all group"
    >
      <div className="w-14 h-14 bg-offWhite flex items-center justify-center rounded-xl text-bordo mb-6 group-hover:bg-bordo group-hover:text-offWhite transition-colors duration-300">
        <Icone className="text-2xl transition-transform duration-500 group-hover:rotate-12" />
      </div>
      <h3 className="text-xl font-serif text-bordo font-bold mb-3">{titulo}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{descricao}</p>
    </motion.div>
  );
}