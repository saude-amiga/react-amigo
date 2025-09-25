import hdc from '../../img/hdc.png'
import logo from '../../img/logo-saude-amiga.png'

export default function SaudeAmiga() {
    return (
        <main>
            <section id="saude-amiga">
                <div>
                    <h1>Saúde Amiga</h1>

                    <p>
                        Somos a solução definitiva para os desafios de acesso ao aplicativo Portal do Paciente HC! Nosso aplicativo foi criado para garantir uma experiência fácil, rápida e intuitiva, proporcionando a você total controle sobre as informações e serviços oferecidos pelo HC.
                    </p>
                    <p>
                        Com ele, você pode acompanhar consultas, resultados de exames, agendamentos e muito mais, tudo na palma da sua mão.
                    </p>
                    <p>
                        Venha conhecer nosso aplicativo e descubra como ele pode transformar sua rotina, oferecendo mais praticidade e segurança no seu acesso às funcionalidades do HC.
                    </p>
                    <p>
                        Não perca a oportunidade de estar sempre bem informado e conectado aos serviços de saúde que fazem a diferença no seu dia a dia!
                    </p>

                    <img src={hdc} alt="Logotipo do Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP), com um símbolo em forma de cruz azul e a letra C estilizada em verde ao lado do nome da instituição." />
                    <img src={logo} alt="Logotipo do Saúde Amiga com desenho de duas mãos formando um coração ao redor de uma cruz médica verde, acompanhado do texto 'Saúde Amiga' em letras maiúsculas." />
                </div>
            </section>
        </main>

    )
}