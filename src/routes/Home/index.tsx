import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import oficina2 from '../../img//oficina2.jpg'

export default function Home() {
  return (
    <main className="bg-[#ffffff] text-[#194737]">
      <Banner />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <section id="saude-amiga" className="bg-[#ffffff] p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#194737]">Saúde Amiga</h1>
          <p className="mb-4">
            Somos a solução para os problemas de acesso no aplicativo Portal do Paciente HC. Venha conhecer nosso
            aplicativo e fique por dentro de tudo que o HC pode proporcionar.
          </p>
          <Link
            to="/saude-amiga"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition"
          >
            Saiba mais ...
          </Link>
        </section>

        <section id="oficinas" className="bg-[#ffffff] p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#194737]">Oficinas Presenciais</h1>
          <img
            src={oficina2}
            alt="Mulher usando headset e óculos, sentada em frente a um computador, mostrando a tela de um celular durante uma videochamada ou atendimento online."
            className="w-full h-auto rounded mb-4"
          />
          <p className="mb-4">
            Em nossas oficinas, você encontrará dicas, tutoriais e conteúdos práticos para te ajudar a usar o celular,
            o computador e a internet de forma fácil e segura.
          </p>
          <Link
            to="/oficinas"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition"
          >
            Saiba mais ...
          </Link>
        </section>

        <section id="homepergunta" className="bg-[#29966a] p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Alguma dúvida?</h1>
          <Link
            to="/perguntas-frequentes"
            className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition"
          >
            Saiba mais ...
          </Link>
        </section>
      </div>
    </main>
  )
}
