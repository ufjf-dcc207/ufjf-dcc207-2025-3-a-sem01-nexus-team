import type{ Classificacao, Status } from "./Personagem";
import procurados from "./dados/procurados.json";
export type Procurado = {
    id: number;
    Nome: string;
    Subnome: string;
    Idade: number;
    DataDeNascimento: string;
    Imagem: string;
    Status: Status;
    NivelPerigo: Classificacao;
    Recompensa: number;
};

export const ListaProcurados = procurados as Procurado[];