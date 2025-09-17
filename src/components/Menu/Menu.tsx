import menu_img from '../../img/icones/menu.png'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav>
            <button><img src={menu_img} />MENU</button>
            <Link to="/">Home</Link>
            <Link to="/quem-somos">Quem Somos</Link>
            <Link to="/saude-amiga">Saúde Amiga</Link>
            <Link to="/oficinas">Oficinas</Link>
            <Link to="/perguntas-frequentes">FAQ - Perguntas Frequentes</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}