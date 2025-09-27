import facebook from '../../img/icones/facebook.png'
import instagram from '../../img/icones/instagram.png'
import x_twitter from '../../img/icones/x-twitter.png'
import tiktok from '../../img/icones/tiktok.png'
import telegram from '../../img/icones/telegram.png'
import linkedin from '../../img/icones/linkedin.png'
import email from '../../img/icones/mail.png'
import tel from '../../img/icones/phone.png'
import whats from '../../img/icones/whats.png'

export default function Contato() {
  return (
    <main className="bg-white text-[#194737]">
      <section id="contato" className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10">Contato</h1>

        {/* Redes Sociais */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mb-12">
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={facebook} alt="Ícone do Facebook" className="w-35 h-35" />
            <span className="mt-2 text-xl">Facebook</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={instagram} alt="Ícone do Instagram" className="w-35 h-35" />
            <span className="mt-2 text-xl">Instagram</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={linkedin} alt="Ícone do LinkedIn" className="w-35 h-35" />
            <span className="mt-2 text-xl">LinkedIn</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={telegram} alt="Ícone do Telegram" className="w-35 h-35" />
            <span className="mt-2 text-xl">Telegram</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={tiktok} alt="Ícone do TikTok" className="w-35 h-35" />
            <span className="mt-2 text-xl">TikTok</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:scale-105 transition">
            <img src={x_twitter} alt="Ícone do X / Twitter" className="w-35 h-35" />
            <span className="mt-2 text-xl">X</span>
          </a>
        </div>

        {/* Contatos Diretos */}
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="mailto:saudeamiga@email.com"
              target="_blank"
              className="inline-flex items-center gap-2 justify-center bg-[#76b99d] text-[#194737] px-4 py-2 rounded hover:bg-white transition"
            >
              <img src={email} alt="Ícone de E-mail" className="w-5 h-5" />
              saudeamiga@email.com
            </a>
          </li>
          <li>
            <a
              href="tel:+551144444444"
              target="_blank"
              className="inline-flex items-center gap-2 justify-center bg-[#76b99d] text-[#194737] px-4 py-2 rounded hover:bg-white transition"
            >
              <img src={tel} alt="Ícone de Telefone" className="w-5 h-5" />
              11 4444-4444
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="inline-flex items-center gap-2 justify-center bg-[#76b99d] text-[#194737] px-4 py-2 rounded hover:bg-white transition"
            >
              <img src={whats} alt="Ícone de WhatsApp" className="w-5 h-5" />
              11 99999-9999
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
