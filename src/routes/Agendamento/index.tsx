import { useEffect, useState } from "react";
import type { AgendamentoFormData } from "../../types/agendamentoFormData";
import { useForm } from "react-hook-form";

export default function Agendamento(){
    useEffect(()=>{
        document.title = "Agendamento";
    },[])

    const{
        register,
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">
                    Nome Completo
                </label>
                <input type="text"
                        id= "nome"
                        placeholder="Insira seu nome completo"
                        {...register("nome", {
                            required: "O nome é obrigatório.",
                            minLength: {value: 3, message: "o nome deve ter pelo menos 3 caracteres"}
                        })}
                         />
                        {errors.nome && (<p>{errors.nome.message}</p>)}
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="text"
                id="email"
                placeholder="Insira seu email"
                {
                    ...register("email", {
                        required:"O email é obrigatório.",
                        pattern: {
                            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/,
                            message: "Esse email não é válido!",
                        },
                    })}
                
                />
                
            </div>
        </form>
        </main>
    );
}