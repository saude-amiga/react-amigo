import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'
import Menu from '../Menu/Menu'

export default function Cabecalho() {
    return (
        <header>
            <div>
                <div>
                    <a href="#" target="_blank"><img src={email} alt="icone email"/>saudeamiga@email.com</a>
                </div>
                <div>
                    <a href="#" target="_blank"><img src={tel} alt="icone telefone"/>11 4444-4444</a>
                    <a href="#" target="_blank"><img src={whats} alt="icone whatsapp"/>11 9 9999-9999 </a>
                </div>
            </div>
            <Menu/>
        </header>
    )
}