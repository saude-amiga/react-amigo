import { useEffect, useState } from "react";
import type { AgendamentoFormData } from "../../types/agendamentoFormData";
import { useForm } from "react-hook-form";

export default function Agendamento(){
    useEffect(()=>{
        document.title = "Agendamento";
    },[])

    const{
        handleSubmit,
        reset,
        formState:{errors, isValid},
    } = useForm<AgendamentoFormData>({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const[agendado, setAgendado] = useState(false);

    const onSubmit = (data: AgendamentoFormData) => {
        console.log("Agendamento enviado: ", data);
        setAgendado(true);
        setTimeout(() => setAgendado(false), 4000);
        reset(); 
    }
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
            </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}></form>
        </main>
    );
}