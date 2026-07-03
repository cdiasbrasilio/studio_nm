import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  // Função interna para aplicar a máscara (XX) XXXXX-XXXX em tempo real
  const aplicarMascaraTelefone = (value) => {
    if (!value) return '';
    
    // Remove qualquer caractere que não seja número
    const apenasNumeros = value.replace(/\D/g, '');
    
    // Limita a entrada a no máximo 11 dígitos (DDD + 9 dígitos)
    const digitosLimitados = apenasNumeros.slice(0, 11);

    // Formata progressivamente conforme o usuário digita
    if (digitosLimitados.length <= 2) {
      return digitosLimitados.replace(/^(\d{0,2})/, '($1');
    }
    if (digitosLimitados.length <= 7) {
      return digitosLimitados.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    }
    return digitosLimitados.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Se o input atual for o telefone, aplica a máscara antes de atualizar o estado
    const valorFinal = name === 'telefone' ? aplicarMascaraTelefone(value) : value;

    setFormData(prev => ({
      ...prev,
      [name]: valorFinal
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Número do Studio NM (Naila Macedo)
    const numeroWhats = '5574981262295';
    
    // Monta o texto da mensagem formatada
    const texto = `Olá, Studio NM! Gostaria de fazer um contato:\n\n• *Nome:* ${formData.nome}\n• *Telefone:* ${formData.telefone}\n• *Mensagem:* ${formData.mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    
    // Rota direta da API global (limpa cache do campo de texto do WhatsApp automaticamente)
    window.open(`https://api.whatsapp.com/send?phone=${numeroWhats}&text=${textoCodificado}`, '_blank');
  };

  return (
    <section id="contato" className="bg-offWhite text-bordo py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-bordo mb-4 tracking-wide">Fale Conosco</h2>
        <p className="text-bordo/80 mb-8 max-w-lg mx-auto">
          Tem alguma dúvida ou quer fazer um elogio? Preencha os campos abaixo e envie diretamente para o nosso atendimento.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left bg-white p-8 rounded-2xl border border-roseGold/30 max-w-xl mx-auto shadow-sm">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-bordo/90 mb-1">Seu Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              className="w-full p-3 rounded-lg bg-offWhite border border-roseGold/30 text-bordo focus:outline-none focus:border-bordo transition-colors"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-bordo/90 mb-1">Seu Telefone / Celular</label>
            <input
              type="text" // Mudado de 'tel' para 'text' para o navegador aceitar os caracteres ( ) e - sem travar a máscara
              id="telefone"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(74) 99999-9999"
              className="w-full p-3 rounded-lg bg-offWhite border border-roseGold/30 text-bordo focus:outline-none focus:border-bordo transition-colors"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-bordo/90 mb-1">Sua Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Como podemos te ajudar?"
              className="w-full p-3 rounded-lg bg-offWhite border border-roseGold/30 text-bordo focus:outline-none focus:border-bordo transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-bordo hover:bg-bordo-dark text-offWhite font-sans font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-bordo/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}