import { useEffect, useState } from "react";

export default function Agendamento(){
    useEffect(()=>{
        document.title = "Agendamento";
    },[])

    const[agendado, setAgendado] = useState(false);

    return(
        <main>
            <div>
                <h1>
                    Agendamento
                </h1>
                <p>Reserve seu horário e participe das oficinas presenciais de inclusão digital</p>
            </div>
            {agendado && (<div>
                Seu agendamento foi realizado com sucesso!
            </div>)}
        </main>
    );
}