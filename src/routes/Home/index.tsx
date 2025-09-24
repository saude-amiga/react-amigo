import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
export default function Home(){
    return(
        <body>
            <Banner/>
            <div>
                <div>
                    <section id="saude-amiga">
                    <h1>Saúde Amiga</h1>
                    <div></div>
                    <p>Somos a solução para os problemas de acesso no aplicativo Portal do Paciente HC, venha conhecer nosso
                        aplicativo e fique por dentro de tudo que o HC pode proporcionar</p>
                    <Link to='/saude-amiga'>Saiba mais ...</Link>
                </section>

                <section id="oficinas">
                    <h1>Oficinas Presenciais</h1>
                    <img src="../assets/img/oficina2.jpg"  alt="imagem oficina"/>
                    <p>Em nossas oficinas, você encontrará dicas, tutoriais e conteúdos práticos para te ajudar a usar o celular, o computador e a internet de forma fácil e segura.</p>
                    <Link to='/oficinas'>Saiba mais ...</Link>
                </section>

                <section id="homepergunta">
                    <h1>Alguma dúvida?</h1>
                    <Link to='/perguntas-frequentes'>Saiba mais ...</Link>
                </section>

                </div>
            </div>
        </body>
    )
}
