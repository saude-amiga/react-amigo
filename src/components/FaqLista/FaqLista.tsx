import FaqItem from "../FaqItem/FaqItem";
import { ListaFaq } from "../../data/listaFaq";

export default function FaqLista() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl text-[#194737] font-bold text-center mb-4">Perguntas Frequentes</h2>
      {ListaFaq.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
