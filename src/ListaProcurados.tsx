import type{ Classificacao, Status } from "./Personagem";
import procurados from "./dados/procurados.json";
type Procurado = {
    id: number;
    Nome: string;
    Subnome: string;
    Idade: number;
    DataDeNascimento: string;
    Imagem: string;
    Status: Status;
    NivelPerigo: Classificacao;
};

export const ListaProcurados = procurados as Procurado[];