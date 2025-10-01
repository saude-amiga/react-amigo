import FaqLista from "../../components/FaqLista/FaqLista";
import { useState } from "react";

export default function FormPergunta() {
    const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    assunto: "saude",
    pergunta: "",
  });

  const [erros, setErros] = useState<{ [key: string]: string }>({});

  const validar = () => {
    const novosErros: { [key: string]: string } = {};

    if (!formData.nome.trim()) {novosErros.nome = "Nome é obrigatório.";}

    if (!formData.celular.trim()) {novosErros.celular = "Celular é obrigatório.";}
    else if (!/^\d{10,11}$/.test(formData.celular)) {novosErros.celular = "Celular deve ter 10 ou 11 dígitos.";}

    if (!formData.email.trim()) {novosErros.email = "Email é obrigatório.";}
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {novosErros.email = "Email inválido.";}

    if (!formData.pergunta.trim()) {novosErros.pergunta = "Pergunta é obrigatória.";}

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErros({ ...erros, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (validar()) {
    console.log("Dados válidos:", formData);
    alert("Pergunta enviada com sucesso!");

setFormData({
  nome: "",
  celular: "",
  email: "",
  assunto: "saude",
  pergunta: "",
  
});
    setErros({});
  }
};


  return (
    <main className="bg-gray-100 py-10">
      <section>

      <div>
        <FaqLista/>
      </div>

      </section>
      <section className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#194737] mb-6">Envie-nos sua pergunta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="idNome" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input type="text" name="nome" id="idNome" placeholder="Digite o seu nome" maxLength={100}
              value={formData.nome} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              erros.nome ? "border-red-500" : "border-gray-300"}`}/>
            {erros.nome && <p className="text-red-500 text-sm mt-1">{erros.nome}</p>}
          </div>

          <div>
            <label htmlFor="idCelular" className="block text-sm font-medium text-gray-700">Número do Celular:</label>
            <input type="tel" name="celular" id="idCelular" placeholder="Digite o número do celular" maxLength={11}
              value={formData.celular} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              erros.celular ? "border-red-500" : "border-gray-300"}`}/>
            {erros.celular && <p className="text-red-500 text-sm mt-1">{erros.celular}</p>}
          </div>

          <div>
            <label htmlFor="idEmail" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="text" name="email" id="idEmail" placeholder="Digite o seu email" maxLength={60}
              value={formData.email} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              erros.email ? "border-red-500" : "border-gray-300"}`}/>
            {erros.email && <p className="text-red-500 text-sm mt-1">{erros.email}</p>}
          </div>

          <div>
            <label htmlFor="idAssunto" className="block text-sm font-medium text-gray-700">Assunto:</label>
            <select name="assunto" id="idAssunto" value={formData.assunto} onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
              <option value="saude">Saúde</option>
              <option value="aplicativoHC">Aplicativo HC</option>
              <option value="aplicativoSA">Aplicativo Saúde Amiga</option>
              <option value="chatBot">ChatBot</option>
              <option value="site">Site</option>
              <option value="oficinas">Oficinas</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <label htmlFor="idPergunta" className="block text-sm font-medium text-gray-700">Pergunta:</label>
            <input type="text" name="pergunta" id="idPergunta" placeholder="Digite sua pergunta" maxLength={1000}
              value={formData.pergunta} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              erros.pergunta ? "border-red-500" : "border-gray-300"}`}/>
            {erros.pergunta && <p className="text-red-500 text-sm mt-1">{erros.pergunta}</p>}
          </div>

          <div>
            <button type="submit" id="botaoEnviar"
              className="w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#305538] transition">
              Enviar Pergunta
            </button>
          </div>

        </form>
      </section>
    </main>
  );
}