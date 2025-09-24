import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'
import Menu from '../Menu/Menu'
import logo from '../../img//logo-saude-amiga.png'

export default function Cabecalho() {
    return (
        <header>
            <div className='flex space-x-8 items-center justify-center text-xs p-2'>
                <div>
                    <a href="#" className='flex space-x-1' target="_blank"><img src={email} alt="icone email"/>saudeamiga@email.com</a>
                </div>
                <div className='flex space-x-2'>
                    <a href="#" className='flex space-x-1' target="_blank"><img src={tel} alt="icone telefone"/>11 4444-4444</a>
                    <a href="#" className='flex space-x-1' target="_blank"><img src={whats} alt="icone whatsapp"/>11 9 9999-9999 </a>
                </div>
            </div>
            <div className='flex items-center justify-between px-2 py-1 bg-gray-100'>
            <img src={logo} className='!w-28 !h-auto' alt="Logo Saúde Amiga" />
            <Menu/>
            </div>
        </header>
    )
}