import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'
import Menu from '../Menu/Menu'
import logo from '../../img//logo-saude-amiga.png'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return (
        <header>
            <div className='flex space-x-8 items-center justify-center text-xs p-2'>
                <div>
                    <p className='flex'><img src={email} className='w-4 h-4' alt="icone email"/>saudeamiga@email.com</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='flex'><img src={tel} className='w-4 h-4' alt="icone telefone"/>11 4444-4444</p>
                    <p className='flex'><img src={whats} className='w-4 h-4' alt="icone whatsapp"/>11 9 9999-9999 </p>
                </div>
            </div>
            <div className='flex items-center justify-between px-2 py-1 bg-gray-100'>
                <Link to="/"><img src={logo} className="w-28 h-auto" alt="Logo Saúde Amiga" /></Link>
            <Menu/>
            </div>
        </header>
    )
}