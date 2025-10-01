import { useEffect } from 'react';
import oficina1 from '../../img/oficina1.jpg'
import oficina2 from '../../img/oficina2.jpg'
import oficina3 from '../../img/oficina3.jpg'

export default function Oficinas() {
  useEffect(() => {
    document.title = "Oficinas";
  }, []);

  return (
    <main className="bg-white text-[#194737]">
      <section id="oficina" className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <h1 className="text-3xl font-bold text-center">Oficinas</h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img src={oficina1}alt="Adultos e idosos sentados em uma mesa com computadores participando de oficina de inclusão digital enquanto um homem os ajuda."
            className="w-full lg:w-1/2 h-auto rounded shadow-md"/>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Bem-Vindo ao mundo digital!</h2>
            <p>
              A tecnologia pode parecer um desafio, mas estamos aqui para mostrar que não precisa ser complicado!
            </p>
            <p>
              Em nossas oficinas, você encontrará dicas, tutoriais e conteúdos práticos para te ajudar a usar o celular,
              o computador e a internet de forma fácil e segura. Vamos juntos nessa jornada digital?
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <img src={oficina2} alt="Mulher usando headset e óculos, sentada em frente a um computador, mostrando a tela de um celular durante uma videochamada ou atendimento online."
            className="w-full lg:w-1/2 h-auto rounded shadow-md"/>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tecnologia Pode Facilitar a Sua Vida</h2>
            <p>
              Você sabia que o celular pode te ajudar a se conectar com a família, marcar consultas médicas e até pedir
              comida sem sair de casa? A tecnologia está aqui para tornar o dia a dia mais simples.
            </p>
            <p>Veja algumas coisas que você pode fazer com poucos cliques:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Falar com amigos e familiares pelo WhatsApp</li>
              <li>Pesquisar informações importantes no Google</li>
              <li>Fazer compras online sem precisar sair de casa</li>
              <li>Acessar notícias e conteúdos educativos</li>
              <li>Marcar consultas médicas sem fila</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img src={oficina3} alt="Homem mais velho sentado em frente a uma mesa com um laptop sorrindo enquanto segura um smartphone."
            className="w-full lg:w-1/2 h-auto rounded shadow-md"/>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Conecte-se com Confiança</h2>
            <p>
              Nossas oficinas são pensadas para todos os níveis de experiência. Aqui, você aprende no seu ritmo, com
              apoio e orientação prática.
            </p>
            <p>
              Seja para se comunicar, aprender ou resolver tarefas do dia a dia, a tecnologia pode ser sua aliada.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
