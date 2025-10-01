import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import x_twitter from '../../img/icones/x-twitter.png'
import tiktok from '../../img/icones/tiktok.png'
import telegram from '../../img/icones/telegram.png'
import linkedin from '../../img/icones/linkedin.png'
import email_branco from '../../img/icones/mail-branco.png'
import tel_branco from '../../img/icones/phone-branco.png'
import whats_branco from '../../img/icones/whats-branco.png'
import AcessoRapido from '../AcessoRapido/AcessoRapido'

export default function Rodape() {
  return (
    <footer style={{ backgroundColor: '#194737' }} className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <h1 className="text-xl font-semibold mb-4 text-center text-[#ffffff]">Acesso Rápido</h1>
            <AcessoRapido />
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 text-center text-[#ffffff]">Redes Sociais</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <img src={facebook} alt="Ícone do Facebook" className="w-16 h-16 hover:scale-110 transition" />
              <img src={instagram} alt="Ícone do Instagram" className="w-16 h-16 hover:scale-110 transition" />
              <img src={x_twitter} alt="Ícone do X/Twitter" className="w-16 h-16 hover:scale-110 transition" />
              <img src={tiktok} alt="Ícone do Tik Tok" className="w-16 h-16 hover:scale-110 transition" />
              <img src={telegram} alt="Ícone do Telegram" className="w-16 h-16 hover:scale-110 transition" />
              <img src={linkedin} alt="Ícone do LinkedIn" className="w-16 h-16 hover:scale-110 transition" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 text-[#ffffff] text-center">Atendimento</h1>
            <p className="mb-4 text-[#ffffff] text-center">Fale conosco por e-mail ou telefone!</p>
            <ul className="space-y-2">
              <li>
                <p className="flex items-center gap-2 justify-center">
                  <img src={email_branco} alt="Ícone de Email" className="w-5 h-5" />
                  saudeamiga@email.com
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 justify-center">
                  <img src={tel_branco} alt="Ícone de Telefone" className="w-5 h-5" />
                  11 4444-4444
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 justify-center">
                  <img src={whats_branco} alt="Ícone do WhatsApp" className="w-5 h-5" />
                  11 9 9999-9999
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-10 border-t border-[#29966a] pt-4 text-[#76b99d]">
          &copy; Todos os direitos reservados - Saúde Amiga - 2025
        </p>
      </div>
    </footer>
  )
}
