import menu_img from '../../img/icones/menu.png'
import desenho from '../../img/desenho-saude-amiga.png'

export default function Menu() {
    return (
        <nav>
            <img src={desenho} alt="Uma senhora de idade e um senhor de idade cego desenhados no estilo cartunesco" />

            <nav>
                <button><img src={menu_img} />MENU</button>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Saúde Amiga</a></li>
                    <li><a href="#">Oficinas</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </nav>
    )
}