import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import linkedin from '../../img/icones/linkedin.png'

export default function Contato(){
    return(
        <body>
            <main>
                <section id="contato">
                    <div>
                        <h1>Contato</h1>
                    </div>
                    <li><a><img src={facebook} alt=""/>Facebook</a></li>
                    <li><a><img src={instagram} alt=""/>Instagram</a></li>
                    <li><a><img src={linkedin} alt=""/>LinkedIn</a></li>
                </section>
            </main>
        </body>
    )
}