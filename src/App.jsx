import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Diferenciais from './components/Diferenciais';
import Calendario from './components/Calendario';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import WhatsappFlutuante from './components/WhatsappFlutuante';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader finishLoading={() => setLoading(false)} />
      ) : (
        <div className="fade-in animate-duration-300">
          <Navbar />
          <main>
            <Hero />
            <Sobre />
            <Diferenciais />
            <Servicos />
            <Galeria />
            <Calendario />
            <Depoimentos />
            <Contato />
          </main>
          <Footer />
          <WhatsappFlutuante />
        </div>
      )}
    </>
  );
}