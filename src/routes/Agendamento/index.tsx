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
        <main className="bg-[#fffff] text-[#194737] min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-2-2xl bg-[#76b99d] p-8 rounded-lg shadow-md">
                <h1 className="text-exl font-bold text=[#194737] mb-6 text-center">
                    Agendamento
                </h1>
            {agendado && (<div className="bg-white border-green-500 font-bold text--[#194737] p-3 rounded mb-6 text-center">
                Seu agendamento foi realizado com sucesso!
            </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-inner">
            <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-1 text-[#194737]">
                    Nome Completo
                </label>
                <input type="text"
                        id= "nome"
                        placeholder="Insira seu nome completo"
                        {...register("nome", {
                            required: "O nome é obrigatório.",
                            minLength: {value: 3, message: "o nome deve ter pelo menos 3 caracteres"}
                        })}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
                         />
                        {errors.nome && (
                            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                            )}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#194737]">
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>
            
            <div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1 text-[#194737]">
                        Data
                    </label>
                    <input type="date"
                    id="data"
                    {
                        ...register("data", {
                            required:"A data é obrigatória.",
                            validate: (value) => {
                                const hoje = new Date().toISOString().split("T")[0];
                                return value >= hoje || "Escolha uma data futura";
                            }
                        })}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
                    
                    />
                    {errors.data && (
                        <p className="text-red-500 text-sm mt-1">{errors.data.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="horario" className="block text-sm font-medium mb-1 text-[#194737]">
                        Horário
                    </label>
                    <input type="time"
                    id="horario"
                    {
                        ...register("horario", {
                            required:"O horario é obrigatório.",
                        })}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
                    />
                    {errors.horario && (
                        <p className="text-red-500 text-sm mt-1">{errors.horario.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="observacoes" className="block text-sm font-medium mb-1 text-[#194737]">
                    Observações (opcional)
                </label>
                <textarea
                    id="observacoes"
                    placeholder="Digite observações adicionais..."
                    {...register ("observacoes")}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a] h-24"
                />
            </div>
            <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-2 rounded-md font-semibold transition-colors ${
                    isValid
                        ? "bg-[#29966a] text-white hover:bg-[194737]"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
            >
                Confirmar Agendamento
            </button>
        </form>
        </div>
        </main>
    );
}