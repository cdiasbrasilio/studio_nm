import { motion } from 'framer-motion';
import CardServico from './CardServico';
import { GiSparkles, GiGlassHeart } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import { BiBrush } from 'react-icons/bi';
import { RiMagicLine } from 'react-icons/ri';

export default function Servicos() {
  const listaServicos = [
    { icone: IoDiamondOutline, titulo: 'Alongamento em Fibra de Vidro', descricao: 'Altíssima durabilidade, naturalidade e resistência em uma estrutura impecável moldada fio a fio.' },
    { icone: RiMagicLine, titulo: 'Alongamento Molde F1', descricao: 'Agilidade e acabamento simétrico perfeito, excelente técnica com poligel para formato ideal.' },
    { icone: GiSparkles, titulo: 'Alongamento em Postiça', descricao: 'Aplicação ágil com alta aderência para eventos ou ocasiões onde o tempo é essencial.' },
    { icone: GiGlassHeart, titulo: 'Banho em Gel', descricao: 'Uma camada protetora de gel sobre a unha natural, evitando quebras e mantendo o crescimento saudável.' },
    { icone: BiBrush, titulo: 'Esmaltação em Gel', descricao: 'Brilho intenso e durabilidade de até 20 dias intactos, secagem imediata na cabine LED.' },
  ];

  return (
    <section id="servicos" className="py-24 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Menu Executivo</span>
          <h2 className="text-4xl font-serif text-bordo font-bold">Nossos Procedimentos</h2>
          <div className="w-24 h-[2px] bg-roseGold mx-auto mt-4" />
        </div>

        {/* Container Flex que resolve a centralização da última linha */}
        <div className="flex flex-wrap justify-center gap-8">
          {listaServicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Controla as larguras: 1 col no mobile, 2 col em telas médias (md) e 3 col em telas grandes (lg)
              // O h-auto + flex garante que todos os motion.divs herdem a mesma altura da linha
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex"
            >
              {/* O wrapper externo precisa repassar a diretiva flex-1 para o CardServico esticar */}
              <div className="flex flex-col w-full bg-white rounded-2xl p-6 border border-roseGold/10 shadow-sm transition-all duration-300 hover:shadow-md">
                <CardServico {...servico} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}