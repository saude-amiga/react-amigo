import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import QuemSomos from './routes/Integrantes/index.tsx'
import SaudeAmiga from './routes/Sobre/index.tsx'
import Oficinas from './routes/Oficinas/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Contato from './routes/Contato/index.tsx'
import FaqResposta from './routes/FaqResposta/index.tsx'
import Login from './routes/Login/index.tsx'
import Funcionarios from './routes/Funcionarios/index.tsx'
import './global.css'
import Agendamento from './routes/Agendamento/index.tsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/integrantes", element:<QuemSomos/>},
    {path:"/sobre", element:<SaudeAmiga/>},
    {path:"/oficinas", element:<Oficinas/>},
    {path:"/perguntas-frequentes", element:<Faq/>},
    {path:"/perguntas-frequentes/:id", element:<FaqResposta/>},
    {path:"/contato", element:<Contato/>},
    {path:"/agendamento", element:<Agendamento/>},
    {path:"/login", element:<Login/>},
    {path:"/funcionarios", element:<Funcionarios/>}
  ]}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
