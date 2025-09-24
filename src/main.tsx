import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import QuemSomos from './routes/QuemSomos/index.tsx'
import SaudeAmiga from './routes/SaudeAmiga/index.tsx'
import Oficinas from './routes/Oficinas/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Contato from './routes/Contato/index.tsx'
import '../global.css'

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/quem-somos", element:<QuemSomos/>},
    {path:"/saude-amiga", element:<SaudeAmiga/>},
    {path:"/oficinas", element:<Oficinas/>},
    {path:"/perguntas-frequentes", element:<Faq/>},
    {path:"/contato", element:<Contato/>}
  ]}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
