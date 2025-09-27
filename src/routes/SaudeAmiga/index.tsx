import hdc from '../../img/hdc.png'
import logo from '../../img/logo-saude-amiga.png'

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

          {/* Imagens lado a lado em telas grandes, empilhadas em telas pequenas */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <img
              src={hdc}
              alt="Logotipo do Hospital das Clínicas"
              className="w-48 h-auto"
            />
            <img
              src={logo}
              alt="Logotipo do Saúde Amiga"
              className="w-48 h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
