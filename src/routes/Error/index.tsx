import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6 max-w-md">
        Opa! Parece que essa página se perdeu no tempo... assim como a gente às vezes esquece onde deixou os óculos.
      </p>
      <p className="text-xl mb-6 max-w-md">Mas tá tudo certo — você pode voltar com segurança para a página inicial.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
