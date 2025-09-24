import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import x_twitter from '../../img/icones/x-twitter.png'
import tiktok from '../../img/icones/tiktok.png'
import telegram from '../../img/icones/telegram.png'
import linkedin from '../../img/icones/linkedin.png'

export default function Contato(){
    return(
        <body>
            <main>
                <section id="contato">
                    <div>
                        <h1>Contato</h1>
                    </div>
                    <div>
                        <li><a><img src={facebook} alt="Ícone do Facebook"/>Facebook</a></li>
                        <li><a><img src={instagram} alt="Ícone do Instagram"/>Instagram</a></li>
                        <li><a><img src={linkedin} alt="Ícone do LinkedIn"/>LinkedIn</a></li>
                        <li><a><img src={telegram} alt="Ícone do Telegram"/>Telegram</a></li>
                        <li><a><img src={tiktok} alt="Ícone do Tik Tok"/>TikTok</a></li>
                        <li><a><img src={x_twitter} alt="Ícone do X / Twitter"/>X</a></li>
                    </div>
                    
                </section>
            </main>
        </body>
    )
}