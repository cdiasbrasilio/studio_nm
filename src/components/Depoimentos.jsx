import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

export default function Depoimentos() {
  const reviews = [
    { nome: "Amanda Souza", texto: "O melhor alongamento em fibra que já fiz! Super natural e durável." },
    { nome: "Beatriz Oliveira", texto: "Atendimento incrível da Naila, o ambiente é extremamente aconchegante." },
    { nome: "Camila Costa", texto: "O banho em gel salvou minhas unhas, cresceram muito. Recomendo demais!" },
    { nome: "Débora Santos", texto: "A esmaltação dura três semanas intacta. Materiais limpinhos, nota dez." },
    { nome: "Elena Pinheiro", texto: "Profissional impecável. O acabamento do Molde F1 fica extremamente simétrico." },
    { nome: "Fernanda Lima", texto: "Excelente experiência do início ao fim, pontualidade e muita técnica." }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Avaliações</span>
        <h2 className="text-4xl font-serif text-bordo font-bold mb-12">Depoimentos de Clientes</h2>

        <div className="min-h-[180px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="flex justify-center text-dourado mb-4">
                {Array.from({ length: 5 }).map((_, i) => <HiStar key={i} className="text-xl" />)}
              </div>
              <p className="text-xl font-serif text-gray-600 italic px-6 mb-4">
                "{reviews[index].texto}"
              </p>
              <h4 className="text-bordo font-medium uppercase tracking-wider text-sm">{reviews[index].nome}</h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de Slide */}
        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${idx === index ? 'bg-roseGold w-6' : 'bg-gray-200'}`}
              aria-label={`Ir para avaliação número ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}