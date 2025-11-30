import { useState } from "react";
import type { Procurado }  from "./ProcessadorListas";
import type { Status } from "./Personagem";


type FormularioProps = {
    subimetar:(novoPersonagem: Procurado) => void;
    cancelaSubimetar:()=>void;
}
type DadosFormularioCriminoso = {
    Nome: string;
    Subnome: string;
    Imagem: string;
    Idade: number | string; 
    DataDeNascimento: string;
    Status: Status | string;
    NivelPerigo: number;
    Recompensa: number;
    caminhoImagem: string;
};

export default function FormularioNovoCriminoso({subimetar, cancelaSubimetar}:FormularioProps){
    const[dados,setDados] = useState<DadosFormularioCriminoso>({
        Nome: "",
        Subnome: "",
        Idade: 0,
        DataDeNascimento: "",
        Status: "",
        NivelPerigo: 0,
        Imagem: "",
        Recompensa: 0,
        caminhoImagem: ""
    });
}
