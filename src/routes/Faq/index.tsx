import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormPergunta() {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    pergunta: '',
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Exemplo de uso, caso queira usar um ID na URL

  useEffect(() => {
    if (id) {
      console.log(`Carregando dados para ID: ${id}`);
      // Aqui você poderia buscar dados existentes, se necessário
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    navigate('/obrigado'); // Redireciona após envio
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Envie sua Pergunta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            value={formData.nome}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número do Celular:</label>
          <input
            type="tel"
            name="celular"
            placeholder="Digite o número do celular"
            value={formData.celular}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" name="email" placeholder="Digite o seu email"
 value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pergunta:</label>
          <textarea name="pergunta" placeholder="Digite sua pergunta" value={formData.pergunta} onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button type="submit"className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Enviar Pergunta
        </button>
      </form>
    </div>
  );
}
