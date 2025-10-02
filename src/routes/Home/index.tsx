import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import oficina2 from '../../img//oficina2.jpg'

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <main className="bg-[#ffffff] text-[#194737]">
      <Banner/>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <section id="saude-amiga" className="bg-[#ffffff] p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#194737]">Saúde Amiga</h1>
          <p className="mb-4">
            Somos a solução para facilitar o seu acesso ao aplicativo Portal do Paciente HC.
          </p>
          <p className="mb-4">
          Com nosso aplicativo, você acompanha de forma prática e segura todas as informações que precisa, como resultados de exames, agendamentos, orientações médicas e muito mais. Nosso objetivo é tornar a sua experiência simples, rápida e confiável, para que você esteja sempre bem informado e aproveite todos os benefícios e serviços que o HC tem a oferecer.
          </p>
          <p className="mb-4">
          Venha conhecer e descubra como a tecnologia pode estar ao seu lado no cuidado com a saúde.
          </p>
          <Link to="/sobre"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition">
            Saiba mais ...
          </Link>
        </section>

        <section id="equipe" className="bg-[#76b99d] p-6 rounded-lg shadow-md text-center text-[#194737]">
          <h1 className="text-2xl font-bold mb-4">Nossa Equipe</h1>
          <p className="mb-4">
            O Saúde Amiga é desenvolvido por estudantes dedicados da FIAP, com foco em inclusão digital e acessibilidade.
          </p>
          <Link to="/integrantes"
            className="inline-block bg-white text-[#194737] font-semibold px-4 py-2 rounded hover:bg-[#29966a] transition">
            Conheça os criadores
          </Link>
        </section>

        <section id="oficinas" className="bg-[#ffffff] p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#194737]">Oficinas Presenciais</h1>
          <img src={oficina2} alt="Mulher usando headset e óculos, sentada em frente a um computador, mostrando a tela de um celular durante uma videochamada ou atendimento online."
          className="w-full h-auto rounded mb-4"/>
          <p className="mb-4">
            Em nossas oficinas, você terá acesso a dicas, tutoriais e conteúdos práticos que vão facilitar o seu dia a dia digital. Nosso objetivo é ajudar você a usar o celular, o computador e a internet de forma simples, segura e descomplicada, mesmo que não tenha muita experiência com tecnologia. 
          </p>
          <p className="mb-4">
            Cada encontro é pensado para oferecer aprendizado passo a passo, com orientações claras e exemplos práticos, para que você ganhe autonomia, confiança e aproveite ao máximo os recursos digitais disponíveis.
          </p>
          
          <Link to="/oficinas"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition">
            Saiba mais ...
          </Link>
        </section>
        
        <section id="beneficios" className="bg-[#ffffff] p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#194737]">Por que usar o Saúde Amiga?</h1>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Acesso rápido e seguro às suas informações médicas</li>
            <li>Agendamento de consultas sem burocracia</li>
            <li>Visualização de exames e resultados em tempo real</li>
            <li>Notificações personalizadas para lembrar compromissos</li>
            <li>Interface simples e intuitiva para todas as idades</li>
          </ul>
          <Link to="/sobre"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition">
            Conheça os benefícios
          </Link>
        </section>


        <section id="homepergunta" className="bg-[#29966a] p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Alguma dúvida?</h1>
          <Link to="/perguntas-frequentes"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition">
            Pergunte-nos!
          </Link>
        </section>
      </div>
    </main>
  )
}
