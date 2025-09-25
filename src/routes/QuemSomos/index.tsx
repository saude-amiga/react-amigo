import img_sabelli from '../../img/victor-sabelli.jpg'
import img_kuba from '../../img/rafael-kubagawa-ramos.jpg'
import img_soteras from '../../img/vinicius-soteras-braga.jpg'

export default function QuemSomos(){
    return(
    <main>
        <div>
        <section id="quem-somos">

            <h1>Quem somos</h1>

            <div>
                <img src={img_sabelli} alt="Foto do integrante Victor Sabelli Rocha Batista - Jovem branco com cabelo e olhos castanhos"/>
                    <div id="info-sabe">
                        <h2>Victor Sabelli Rocha Batista</h2>
                    <a href="https://www.linkedin.com/in/victorsabelli/">LinkedIn / </a>
                    <a href="https://github.com/Sabelli">GitHub</a>
                </div>
            </div>

            <div>
                <img src={img_soteras} alt="Foto do integrante Vinicius Soteras Braga - Jovem branco com cabelo e olhos castanhos"/>
                    <div id="info-vini">
                        <h2>Vinicius Soteras Braga</h2>
                    <a href="https://www.linkedin.com/in/vinicius-soteras-braga-60335516a/">LinkedIn / </a>
                    <a href="https://github.com/BragaSoterasVinicius">GitHub</a>
                </div>
            </div>   

            <div>
                <img src={img_kuba} alt="Foto do integrante Rafael Kubagawa Ramos - Jovem branco com cabelo preto e olhos castanhos"/>
                    <div id="info-rafa">
                        <h2>Rafael Kubagawa Ramos</h2>
                    <a href="https://www.linkedin.com/in/rafael-kubagawa-ramos-243896330">LinkedIn / </a>
                    <a href="https://github.com/Rafaelkubagawa">GitHub</a>
                </div>
            </div>

        </section>
        </div>
    </main>
    )
}