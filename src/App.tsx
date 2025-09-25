import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import '../global.css'

export default function App(){
  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}