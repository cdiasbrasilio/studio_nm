import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

export default function Diferenciais() {
  const diferenciais = [
    "Atendimento personalizado",
    "Materiais de altíssima qualidade",
    "Ambiente sofisticado e acolhedor",
    "Agendamento prático e flexível",
    "Acabamento simétrico de excelência",
    "Materiais 100% esterilizados em autoclave",
  ];

  return (
    <section className="py-20 bg-bordo text-offWhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <span className="text-roseGold-light font-medium tracking-widest text-sm uppercase mb-2 block">Diferenciais</span>
            <h2 className="text-4xl font-serif font-bold mb-4">Por que escolher o Studio NM?</h2>
            <div className="w-16 h-[2px] bg-roseGold" />
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {diferenciais.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center space-x-3 bg-bordo-light/40 p-4 rounded-xl border border-bordo-light"
              >
                <HiCheckCircle className="text-roseGold text-xl shrink-0" />
                <span className="text-sm tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}