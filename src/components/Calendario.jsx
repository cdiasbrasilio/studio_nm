import { useState } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

export default function Calendario() {
  const [dataSelecionada, setDataSelecionada] = useState(dayjs().format('YYYY-MM-DD'));
  const [periodo, setPeriodo] = useState('Manhã');
  const [nome, setNome] = useState('');

  const periodos = ['Manhã', 'Tarde', 'Noite'];

  // Gera os próximos 7 dias úteis de atendimento
  const proximosDias = Array.from({ length: 7 }).map((_, i) => dayjs().add(i, 'day'));

  const handleAgendar = (e) => {
    e.preventDefault();
    if (!nome) {
      alert('Por favor, informe seu nome.');
      return;
    }
    const dataFormatada = dayjs(dataSelecionada).format('DD/MM/YYYY');
    const textoMensagem = `Olá! Gostaria de agendar um horário.\n\n*Nome:* ${nome}\n*Data:* ${dataFormatada}\n*Período:* ${periodo}`;
    const urlWhatsapp = `https://wa.me/5574981262295?text=${encodeURIComponent(textoMensagem)}`;
    window.open(urlWhatsapp, '_blank');
  };

  return (
    <section id="agendar" className="py-24 bg-offWhite">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Conveniência</span>
          <h2 className="text-4xl font-serif text-bordo font-bold">Agende seu Horário</h2>
          <p className="text-gray-500 mt-2 text-sm">Escolha a melhor data e período. Você será direcionada ao WhatsApp para confirmação rápida.</p>
        </div>

        <form onSubmit={handleAgendar} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-pink-50">
          <div className="grid gap-8">
            {/* Input Nome */}
            <div>
              <label className="block text-sm font-medium text-bordo mb-2">Seu Nome Completo</label>
              <input 
                type="text" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Maria Silva"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-roseGold transition-colors text-sm"
              />
            </div>

            {/* Seletor de Datas Horizontal */}
            <div>
              <label className="block text-sm font-medium text-bordo mb-3">Selecione o Dia</label>
              <div className="flex space-x-3 overflow-x-auto pb-3 scrollbar-thin">
                {proximosDias.map((day, idx) => {
                  const stringDate = day.format('YYYY-MM-DD');
                  const isSelected = stringDate === dataSelecionada;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDataSelecionada(stringDate)}
                      className={`flex flex-col items-center justify-center min-w-[70px] p-3 rounded-xl border transition-all cursor-pointer ${isSelected ? 'bg-bordo text-offWhite border-bordo scale-105 shadow-md' : 'bg-offWhite text-gray-600 border-gray-100 hover:border-roseGold'}`}
                    >
                      <span className="text-xs uppercase font-light">{day.format('ddd')}</span>
                      <span className="text-lg font-bold font-serif">{day.format('DD')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Seletor de Períodos */}
            <div>
              <label className="block text-sm font-medium text-bordo mb-3">Selecione o Período</label>
              <div className="grid grid-cols-3 gap-4">
                {periodos.map((p) => {
                  const isSelected = p === periodo;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriodo(p)}
                      className={`py-3 rounded-xl border font-medium text-sm transition-all cursor-pointer ${isSelected ? 'bg-roseGold text-offWhite border-roseGold shadow-sm' : 'bg-offWhite text-gray-600 border-gray-100 hover:border-roseGold'}`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA de Envio */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-bordo text-offWhite rounded-xl shadow-lg font-medium hover:bg-bordo-light transition-all cursor-pointer text-center tracking-wide mt-4"
            >
              Agendar via WhatsApp
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}