import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'
import Menu from '../Menu/Menu'
import logo from '../../img/logo-saude-amiga.png'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return (
        <header>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-2'>
                <div className='flex justify-center'>
                    <p className='flex items-center gap-1'>
                        <img src={email} className='w-4 h-4' alt="ícone email" />
                        saudeamiga@email.com
                    </p>
                </div>

                <div className='flex justify-center gap-2'>
                    <p className='flex items-center gap-1'>
                        <img src={tel} className='w-3 h-3' alt="ícone telefone" />
                        11 4444-4444
                    </p>
                    <p className='flex items-center gap-1'>
                        <img src={whats} className='w-3 h-3' alt="ícone whatsapp" />
                        11 9 9999-9999
                    </p>
                </div>
            </div>

            <div className='flex sm:flex-row items-center justify-between px-2 py-1 bg-gray-100 space-y-2 sm:space-y-0'>
                <Link to="/">
                    <img src={logo} className="w-24 sm:w-28 h-auto" alt="Logo Saúde Amiga" />
                </Link>
                <Menu />
            </div>
        </header>
    )
}
