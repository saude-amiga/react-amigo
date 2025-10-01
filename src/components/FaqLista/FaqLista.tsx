import { ListaFaq } from "../../data/listaFaq";
import { useEffect, useState } from "react";
import type { TipoFaq } from "../../types/tipoFaq";
import CardFaq from "../CardPergunta/CardPergunta";

export default function FaqLista() {
  const [perguntas, setPerguntas] = useState<TipoFaq[]>([]);

  useEffect(() => {
    return(
      setPerguntas(ListaFaq)
    )
  }, []);

  return (
    <section className="p-6 text-[#194737] text-center">
      <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {perguntas.map((faq) => (
          <CardFaq faq={faq} />
        ))}
      </div>
    </section>
  );
}