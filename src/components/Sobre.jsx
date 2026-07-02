import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Imagem Profissional da Profissional */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-neutral-200 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-offWhite">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
              alt="Naila Macedo sorrindo no Studio NM" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-roseGold/10 rounded-full -z-10 blur-xl" />
        </motion.div>

        {/* Texto Institucional */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2">A Profissional</span>
          <h2 className="text-4xl font-serif text-bordo font-bold mb-6">Naila Macedo</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Seja muito bem-vinda ao Studio NM. Meu nome é Naila Macedo. Sou Nail Designer especializada em técnicas avançadas de alongamentos e saúde das unhas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Meu objetivo principal vai além da estética: busco oferecer um atendimento personalizado e acolhedor, utilizando materiais rigorosamente esterilizados e técnicas seguras para proporcionar beleza, durabilidade e elevar a autoestima de cada cliente.
          </p>
          <div className="border-l-4 border-roseGold pl-4 py-2 italic text-bordo font-medium">
            "A beleza das mãos reflete o cuidado e o amor-próprio que você cultiva por si mesma."
          </div>
        </motion.div>

      </div>
    </section>
  );
}