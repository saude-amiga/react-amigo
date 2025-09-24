
import banner1 from '../../img/banner/banner1.jpg'
import banner2 from '../../img/banner/banner2.jpg'
import banner3 from '../../img/banner/banner3.jpg'
export default function Home(){
    return(
        <body>
            <div>
                <div>
                    <img src={banner1} alt="Casal de Idosos olhando um tablet"/>
                </div>
                <div>
                    <img src={banner2} alt="Senhor de idade falando no telefone enquanto usa o notebook"/>
                </div>
                <div>
                    <img src={banner3} alt="Idoso mexendo no tablet"/>
                </div>
            </div>
        </body>
    )
}