import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import x_twitter from '../../img/icones/x-twitter.png'
import tiktok from '../../img/icones/tiktok.png'
import telegram from '../../img/icones/telegram.png'
import linkedin from '../../img/icones/linkedin.png'
import email_branco from '../../img/icones/mail-branco.png'
import tel_branco from '../../img/icones/phone-branco.png'
import whats_branco from '../../img/icones/whats-branco.png'

export default function Rodape(){
    return(
        <footer>
            <div>
                <div>
                    <ul>
                        <li>
                            <h1>Navegação</h1>
                        </li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Saúde Amiga</a></li>
                        <li><a href="#">Oficinas</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contato</a></li>

                    </ul>

                    <ul>
                        <li>
                            <h1>Redes Sociais</h1>
                        </li>
                        <li><img src={facebook} alt="Ícone do Facebook"/>
                            <img src={instagram} alt="Ícone do Instagram"/>
                            <img src={x_twitter} alt="Ícone do X/Twitter"/>
                        </li>
                        <li><img src={tiktok} alt="Ícone do Tik Tok"/>
                            <img src={telegram} alt="ícone do Telegram"/>
                            <img src={linkedin} alt="Ícone do LinkedIn"/>
                        </li>
                    </ul>

                    <ul>

                        <li>
                            <h1>Atendimento</h1>
                        </li>
                        <li>
                            <p>Fale conosco por e-mail ou telefone!</p>
                        </li>
                        <li><a target="_blank" href=""><img src={email_branco} alt="Ícone de Email"/>saudeamiga@email.com</a></li>
                        <li><a target="_blank" href=""><img src={tel_branco} alt="Ícone de Telefone"/>11 4444-4444 </a></li>
                        <li><a target="_blank" href=""><img src={whats_branco} alt="Ícone do WhatsApp"/>11 9 9999-9999 </a></li>
                    </ul>
                </div>
            </div>
            <p>&copy; Todos os direitos reservados - Saúde Amiga - 2025</p>

        </footer>
    )
}