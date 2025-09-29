import hdc from '../../img/hdc.png'
import logo from '../../img/logo-saude-amiga.png'
import tela1 from '../../img/tela1.png'
import tela2 from '../../img/tela2.png'

export default function SaudeAmiga() {
  return (
    <main className="bg-white text-[#194737]">
      <section id="saude-amiga" className="max-w-6xl mx-auto px-4 py-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Saúde Amiga</h1>

          <p>
            Somos a solução definitiva para os desafios de acesso ao aplicativo Portal do Paciente HC! Nosso aplicativo
            foi criado para garantir uma experiência fácil, rápida e intuitiva, proporcionando a você total controle
            sobre as informações e serviços oferecidos pelo HC.
          </p>
          <p>
            Com ele, você pode acompanhar consultas, resultados de exames, agendamentos e muito mais, tudo na palma da
            sua mão.
          </p>
          <p>
            Venha conhecer nosso aplicativo e descubra como ele pode transformar sua rotina, oferecendo mais
            praticidade e segurança no seu acesso às funcionalidades do HC.
          </p>
          <p>
            Não perca a oportunidade de estar sempre bem informado e conectado aos serviços de saúde que fazem a
            diferença no seu dia a dia!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <img
              src={hdc}
              alt="Logotipo do Hospital das Clínicas"
              className="w-40 h-auto"
            />
            <img
              src={logo}
              alt="Logotipo do Saúde Amiga"
              className="w-40 h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5fdfb] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Funcionalidades do Aplicativo</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Acesso rápido e seguro ao Hospital das Clínicas</li>
                <li>Histórico de consultas e exames sempre à mão</li>
                <li>Integração com serviços do governo e saúde digital</li>
                <li>Chat de suporte para facilitar sua experiência</li>
                <li>Design acessível para todas as idades</li>
              </ul>
            </div>
            <div className="flex gap-4 justify-center">
              <img
                src={tela1}
                alt="Tela do aplicativo Saúde Amiga"
                className="w-40 md:w-56"
              />
              <img
                src={tela2}
                alt="Outra tela do aplicativo Saúde Amiga"
                className="w-40 md:w-56"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl font-bold">Por que usar o Saúde Amiga?</h2>
          <p>
            Porque cuidar da sua saúde deve ser simples, seguro e acessível. Veja os benefícios:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-[#e6f9f2] rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Praticidade</h3>
              <p>Acompanhe consultas e exames em poucos cliques.</p>
            </div>
            <div className="p-6 bg-[#e6f9f2] rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Segurança</h3>
              <p>Seus dados protegidos com tecnologia de ponta.</p>
            </div>
            <div className="p-6 bg-[#e6f9f2] rounded-xl shadow-md">
              <h3 className="font-bold mb-2">Conectividade</h3>
              <p>Integração com os serviços do HC e do governo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
