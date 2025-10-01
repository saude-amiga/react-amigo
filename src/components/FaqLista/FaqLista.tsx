import { useNavigate } from "react-router-dom";
import { ListaFaq } from "../../data/listaFaq";

export default function FaqLista() {
  const navigate = useNavigate();
  const irParaResposta = (id: number) => {
    navigate(`/perguntas-frequentes/${id}`);
  };

  return (
    <section className="p-6 text-[#194737] text-center">
      <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {ListaFaq.map((faq) => (
          <button
            key={faq.id}
            onClick={() => irParaResposta(faq.id)}
            className="w-170 mx-auto text-center bg-[#76b99d] text-[#194737] font-semibold px-4 py-3 grid rounded hover:bg-white transition shadow-sm"
          >
            {faq.titulo}
          </button>
        ))}
      </div>
    </section>
  );
}
