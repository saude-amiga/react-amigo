import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import x_twitter from '../../img/icones/x-twitter.png'
import tiktok from '../../img/icones/tiktok.png'
import telegram from '../../img/icones/telegram.png'
import linkedin from '../../img/icones/linkedin.png'
import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'

export default function Contato(){
    return(
        <body>
            <main>
                <section id="contato">
                    <div>
                        <h1>Contato</h1>
                        <div>
                            <li><a><img src={facebook} alt="Ícone do Facebook"/>Facebook</a></li>
                            <li><a><img src={instagram} alt="Ícone do Instagram"/>Instagram</a></li>
                            <li><a><img src={linkedin} alt="Ícone do LinkedIn"/>LinkedIn</a></li>
                            <li><a><img src={telegram} alt="Ícone do Telegram"/>Telegram</a></li>
                            <li><a><img src={tiktok} alt="Ícone do Tik Tok"/>TikTok</a></li>
                            <li><a><img src={x_twitter} alt="Ícone do X / Twitter"/>X</a></li>
                        </div>
                        <li><a href="" target="_blank"><img src={email} alt="Ícone de E-mail"/>saudeamiga@email.com</a></li>
                        <li><a href="" target="_blank"><img src={tel} alt="Ícone de Telefone"/>11 4444-4444</a></li>
                        <li><a href="" target="_blank"><img src={whats} alt="Ícone de Whatsapp"/>11 99999-9999</a></li>
                    </div>
                </section>
            </main>
        </body>
    )
}