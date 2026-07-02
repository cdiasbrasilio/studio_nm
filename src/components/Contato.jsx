import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '', mensagem: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato via Site - Studio NM");
    const body = encodeURIComponent(`Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`);
    window.location.href = `mailto:contato@studionm.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        
        {/* Informações Institucionais e Localização */}
        <div>
          <span className="text-roseGold font-medium tracking-widest text-sm uppercase mb-2 block">Onde Estamos</span>
          <h2 className="text-4xl font-serif text-bordo font-bold mb-6">Venha nos visitar</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Localizado estrategicamente em Jacobina, oferecemos um ambiente intimista e climatizado projetado para seu bem-estar.
          </p>
          
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-medium text-bordo text-sm uppercase tracking-wide">Endereço</h4>
              <p className="text-gray-500 text-sm">Lajes do Batata — Jacobina - BA, Brasil</p>
            </div>
            <div>
              <h4 className="font-medium text-bordo text-sm uppercase tracking-wide">Atendimento</h4>
              <p className="text-gray-500 text-sm">Segunda a Sábado: 08h às 18h</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://maps.google.com/?q=Lajes+do+Batata,Jacobina,BA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-offWhite text-bordo text-sm font-medium rounded-xl border border-gray-100 hover:bg-bordo hover:text-offWhite transition-all"
            >
              Ver localização no mapa
            </a>
          </div>
        </div>

        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className="bg-offWhite p-8 rounded-2xl border border-pink-50/50 space-y-5">
          <div>
            <label className="block text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">Nome</label>
            <input 
              type="text" required 
              value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full px-4 py-3 bg-white rounded-xl border border-gray-100 focus:outline-none focus:border-roseGold transition-colors text-sm"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">Telefone</label>
              <input 
                type="tel" required 
                value={formData.telefone} onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-100 focus:outline-none focus:border-roseGold transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">E-mail</label>
              <input 
                type="email" required 
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-100 focus:outline-none focus:border-roseGold transition-colors text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase font-semibold text-gray-500 tracking-wider mb-2">Mensagem</label>
            <textarea 
              rows="4" required 
              value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              className="w-full px-4 py-3 bg-white rounded-xl border border-gray-100 focus:outline-none focus:border-roseGold transition-colors text-sm resize-none"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-bordo text-offWhite rounded-xl font-medium shadow-md hover:bg-bordo-light transition-colors cursor-pointer">
            Enviar Mensagem
          </button>
        </form>

      </div>
    </section>
  );
}