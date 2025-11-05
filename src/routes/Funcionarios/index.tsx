import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Área de Funcionarios";
  }, []);
  
  return (
    <main>

    </main>
  )
}