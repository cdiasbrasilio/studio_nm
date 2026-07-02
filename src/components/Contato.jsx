import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Número do Studio NM (Naila Macedo)
    const numeroWhats = '5574981262295';
    
    // Monta o texto da mensagem codificado para a URL
    const texto = `Olá, Studio NM! Gostaria de fazer um contato:\n\n*Nome:* ${formData.nome}\n*Telefone:* ${formData.telefone}\n*Mensagem:* ${formData.mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    
    // Abre o WhatsApp com a mensagem formatada
    window.open(`https://wa.me/${numeroWhats}?text=${textoCodificado}`, '_blank');
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
              type="tel"
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