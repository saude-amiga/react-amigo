import oficina1 from '../../img/oficina1.jpg'
import oficina2 from '../../img/oficina2.jpg'
import oficina3 from '../../img/oficina3.jpg'

export default function Oficinas() {
    return (
        <main>
            <section id="oficina">
                <div>
                    <h1>Oficinas</h1>

                    <img src={oficina1} alt="Adultos participando de oficina de inclusão digital, sentados em frente a computadores em ambiente moderno e educativo, com foco em aprendizado de tecnologia." />
                    <h1>Bem-Vindo ao mundo digital!</h1>
                    <p>
                        A tecnologia pode parecer um desafio, mas estamos aqui para mostrar que não precisa ser complicado!
                    </p>
                    <p>
                        Em nossas oficinas, você encontrará dicas, tutoriais e conteúdos práticos para te ajudar a usar o celular, o computador e a internet de forma fácil e segura. Vamos juntos nessa jornada digital?
                    </p>

                    <img src={oficina2} alt="Mulher usando headset e óculos sentada em frente a um computador, segurando um smartphone e explicando algo durante um atendimento remoto." />
                    <h1>Tecnologia Pode Facilitar a Sua Vida</h1>
                    <p>
                        Você sabia que o celular pode te ajudar a se conectar com a família, marcar consultas médicas e até pedir comida sem sair de casa? A tecnologia está aqui para tornar o dia a dia mais simples.
                    </p>
                    <p>
                        Veja algumas coisas que você pode fazer com poucos cliques:
                        <ul>
                            <li>Falar com amigos e familiares pelo WhatsApp</li>
                            <li>Pesquisar informações importantes no Google</li>
                            <li>Fazer compras online sem precisar sair de casa</li>
                            <li>Acessar notícias e conteúdos educativos</li>
                            <li>Marcar consultas médicas sem fila</li>
                        </ul>
                    </p>

                    <img src={oficina3} alt="Homem mais velho usando óculos e camisa bordô sorri enquanto segura um smartphone, sentado à mesa com um laptop aberto à sua frente." />
                </div>
            </section>
        </main>

    )
}