
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
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <AcessoRapido/>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4">Redes Sociais</h1>
            <div className="flex flex-wrap gap-4">
              <img src={facebook} alt="Ícone do Facebook" className="w-8 h-8" />
              <img src={instagram} alt="Ícone do Instagram" className="w-8 h-8" />
              <img src={x_twitter} alt="Ícone do X/Twitter" className="w-8 h-8" />
              <img src={tiktok} alt="Ícone do Tik Tok" className="w-8 h-8" />
              <img src={telegram} alt="Ícone do Telegram" className="w-8 h-8" />
              <img src={linkedin} alt="Ícone do LinkedIn" className="w-8 h-8" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4">Atendimento</h1>
            <p className="mb-4">Fale conosco por e-mail ou telefone!</p>
            <ul className="space-y-2">
              <li>
                <a
                  target="_blank"
                  href="mailto:saudeamiga@email.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img src={email_branco} alt="Ícone de Email" className="w-5 h-5" />
                  saudeamiga@email.com
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="tel:+551144444444"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img src={tel_branco} alt="Ícone de Telefone" className="w-5 h-5" />
                  11 4444-4444
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://wa.me/5511999999999"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img src={whats_branco} alt="Ícone do WhatsApp" className="w-5 h-5" />
                  11 9 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
          &copy; Todos os direitos reservados - Saúde Amiga - 2025
        </p>
      </div>
    </footer>
  )
}
