import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFlutuante() {
  const message = encodeURIComponent("Olá! Gostaria de agendar um horário com o Studio NM.");
  
  return (
    <motion.a
      href={`https://wa.me/5574981262295?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl text-2xl"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      whileHover={{ scale: 1.15 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}