import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Calendario() {
  const dataAtual = new Date();
  const [dataFoco, setDataFoco] = useState(new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1));
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [turnoSelecionado, setTurnoSelecionado] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState('');

  const servicos = [
    'Alongamento em Fibra de Vidro',
    'Alongamento Molde F1',
    'Alongamento em Postiça',
    'Banho em Gel',
    'Esmaltação em Gel',
    'Outros'
  ];

  const turnos = [
    { id: 'manha', nome: 'Manhã', horario: '08:00 às 12:00' },
    { id: 'tarde', nome: 'Tarde', horario: '13:00 às 17:00' },
    { id: 'noite', nome: 'Noite', horario: '18:00 às 20:00' }
  ];

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const anoAtual = dataFoco.getFullYear();
  const mesAtual = dataFoco.getMonth();

  const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();
  const totalDiasMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const celulasVazias = Array.from({ length: primeiroDiaSemana });
  const diasDoMes = Array.from({ length: totalDiasMes }, (_, i) => i + 1);

  const irParaMesAnterior = () => {
    const dataAlvo = new Date(anoAtual, mesAtual - 1, 1);
    if (dataAlvo >= new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1)) {
      setDataFoco(dataAlvo);
    }
  };

  const irParaProximoMes = () => {
    setDataFoco(new Date(anoAtual, mesAtual + 1, 1));
  };

  const selecionarDia = (dia) => {
    const dataEscolhida = new Date(anoAtual, mesAtual, dia);
    if (dataEscolhida.setHours(0,0,0,0) >= new Date().setHours(0,0,0,0)) {
      setDataSelecionada(dataEscolhida);
      setTurnoSelecionado(''); 
    }
  };

  const enviarWhatsApp = () => {
    if (!dataSelecionada || !turnoSelecionado || !servicoSelecionado) return;

    const dataFormatada = dataSelecionada.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    // Construção linear limpa para evitar problemas de escape de string no protocolo wa.me
    const textoMensagem = `Olá, Naila! Gostaria de realizar um agendamento. Procedimento: *${servicoSelecionado}* | Data: *${dataFormatada}* | Turno: *${turnoSelecionado}*`;
    
    const numeroWhats = '5574981262295'; 
    const urlFinal = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoMensagem)}`;
    
    // Log técnico de depuração para você verificar se os dados estão montando no console do navegador (F12)
    console.log("URL Gerada para o WhatsApp:", urlFinal);
    
    window.open(urlFinal, '_blank', 'noopener,noreferrer');
  };

  const podeAvancar = dataSelecionada && turnoSelecionado && servicoSelecionado;

  return (
    <section id="agendamento" className="py-24 bg-white text-bordo">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="mb-12">
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Agendamento Online</span>
          <h2 className="text-4xl font-serif text-bordo font-bold">Solicite seu Horário</h2>
          <div className="w-24 h-[2px] bg-roseGold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-3xl mx-auto">
          
          {/* LADO ESQUERDO: Filtro e Calendário */}
          <div className="space-y-6">
            <div className="text-left bg-offWhite p-4 rounded-xl border border-roseGold/20">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-roseGold-dark mb-2">1. Selecione o Serviço</label>
              <select
                value={servicoSelecionado}
                onChange={(e) => setServicoSelecionado(e.target.value)}
                className="w-full p-3 bg-white border border-roseGold/30 text-bordo rounded-lg font-sans text-sm focus:outline-none focus:border-bordo"
              >
                <option value="">Selecione um procedimento...</option>
                {servicos.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="bg-offWhite rounded-2xl border border-roseGold/20 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-roseGold/10 pb-3">
                <button onClick={irParaMesAnterior} className="p-2 rounded-full hover:bg-roseGold/20 text-bordo flex items-center justify-center"><HiChevronLeft /></button>
                <h3 className="font-serif text-lg font-bold">{meses[mesAtual]} <span className="font-sans font-normal text-bordo/60">{anoAtual}</span></h3>
                <button onClick={irParaProximoMes} className="p-2 rounded-full hover:bg-roseGold/20 text-bordo flex items-center justify-center"><HiChevronRight /></button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-1 text-center">
                {diasSemana.map((d) => <div key={d} className="text-[10px] font-sans font-bold uppercase tracking-wider text-roseGold-dark">{d}</div>)}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {celulasVazias.map((_, i) => <div key={`v-${i}`} className="p-1" />)}
                {diasDoMes.map((dia) => {
                  const dataCard = new Date(anoAtual, mesAtual, dia);
                  const ehPassado = dataCard.setHours(0,0,0,0) < new Date().setHours(0,0,0,0);
                  const ehSelecionado = dataSelecionada && dataSelecionada.getDate() === dia && dataSelecionada.getMonth() === mesAtual && dataSelecionada.getFullYear() === anoAtual;

                  return (
                    <button
                      key={`d-${dia}`}
                      disabled={ehPassado}
                      onClick={() => selecionarDia(dia)}
                      className={`p-2 text-xs font-sans font-semibold rounded-md transition-all ${ehPassado ? 'text-bordo/20 cursor-not-allowed' : ehSelecionado ? 'bg-bordo text-offWhite scale-105 shadow-sm' : 'text-bordo hover:bg-roseGold/20'}`}
                    >
                      {dia}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Escolha de Turnos */}
          <div className="bg-offWhite rounded-2xl border border-roseGold/20 p-6 text-left h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-roseGold-dark mb-4">2. Escolha o Turno de Preferência</h4>
              
              {!dataSelecionada ? (
                <p className="text-sm text-bordo/50 italic font-sans py-8 text-center">Selecione um dia no calendário para habilitar os turnos.</p>
              ) : (
                <div className="space-y-3">
                  {turnos.map((t) => {
                    const ativo = turnoSelecionado === t.nome;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTurnoSelecionado(t.nome)}
                        className={`w-full p-4 rounded-xl border text-left transition-all ${ativo ? 'bg-bordo text-offWhite border-bordo shadow-sm' : 'bg-white text-bordo border-roseGold/20 hover:border-roseGold'}`}
                      >
                        <div className="font-serif font-bold text-base">{t.nome}</div>
                        <div className={`text-xs font-sans ${ativo ? 'text-offWhite/80' : 'text-bordo/60'}`}>{t.horario}</div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                onClick={enviarWhatsApp}
                disabled={!podeAvancar}
                className={`w-full py-4 font-sans font-bold uppercase tracking-wider text-xs rounded-full shadow-md transition-all ${!podeAvancar ? 'bg-bordo/30 text-offWhite/60 cursor-not-allowed' : 'bg-bordo hover:bg-bordo-dark text-offWhite hover:-translate-y-0.5'}`}
              >
                Solicitar Vaga via WhatsApp
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}