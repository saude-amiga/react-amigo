import { useState } from "react";
import type { TipoFaq } from "../../types/tipoFaq";

type Props = {
  faq: TipoFaq;
};

export default function FaqItem({ faq }: Props) {
  const [aberto, setAberto] = useState(false);

  const toggle = () => setAberto(!aberto);

  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white hover:shadow-md transition duration-300">
      <button
        onClick={toggle}
        className="w-full text-left flex justify-between items-center text-lg font-semibold text-[#194737] mb-2 focus:outline-none"
      >
        <span>{faq.titulo}</span>
        <span className="text-sm text-[#194737]">
          {aberto ? "▲" : "▼"}
        </span>
      </button>

      <p className="text-sm text-gray-600 mb-2">
        <strong className="font-medium text-gray-700">Pergunta:</strong> {faq.autorDaPergunta}
      </p>

      {aberto && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <p
            className="text-gray-700 mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: faq.corpo || "" }}
          />
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              <strong className="text-gray-600">Resposta:</strong> {faq.autorDaResposta}
            </p>
            <p>
              <strong className="text-gray-600">Data da resposta:</strong>{" "}
              {new Date(faq.data_resposta).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
