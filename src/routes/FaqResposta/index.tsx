import { useParams, useNavigate } from "react-router-dom";
import { ListaFaq } from "../../data/listaFaq";

export default function FaqResposta() {
  const { id } = useParams();
  const navigate = useNavigate();
  const faq = ListaFaq.find((f) => f.id === Number(id));

  if (!faq) {
    return (
      <div className="text-center mt-10 text-red-500">
        Pergunta não encontrada.
        <button onClick={() => navigate("/perguntas-frequentes")} className="mt-4 px-4 py-2 bg-[#194737] text-white rounded hover:bg-[#76b99d]0 transition">
          Voltar para perguntas
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#194737] mb-4">{faq.titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">
        <strong className="font-medium text-gray-700">Pergunta:</strong> {faq.autorDaPergunta}
      </p>

      <p className="text-gray-700 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.corpo || "" }}/>

      <div className="text-sm text-gray-500 space-y-1 mb-6">
        <p>
          <strong className="text-gray-600">Resposta:</strong> {faq.autorDaResposta}
        </p>

        <p>
          <strong className="text-gray-600">Data da resposta:</strong>{" "}
          {new Date(faq.data_resposta).toLocaleDateString()}
        </p>

      </div>
      <button onClick={() => navigate("/perguntas-frequentes")}
        className="px-4 py-2 bg-[#194737] text-white rounded hover:bg-[#76b99d] transition">
        Voltar para perguntas
      </button>
    </div>
  );
}
