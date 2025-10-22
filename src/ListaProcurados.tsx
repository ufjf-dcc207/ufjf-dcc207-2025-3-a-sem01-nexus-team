import type{ Classificacao, Status } from "./Personagem";

const statusValido = (status: string): Status =>
  ["Foragido", "Morto", "Capturado", "Desconhecido"].includes(status as Status)
    ? (status as Status)
    : "Undefined";

type Procurado = {
    id: number;
    Nome: string;
    Idade: number;
    DataDeNascimento: string;
    Imagem: string;
    Status: Status;
    NivelPerigo: Classificacao;
};

export const ListaProcurados: Procurado[] = [
  {
    id: 1,
    Nome: "Joel Miller",
    Idade: 56,
    DataDeNascimento: "1981-09-26",
    Imagem: "public/joelPB.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 2,
    Nome: "Ellie Williams",
    Idade: 14,
    DataDeNascimento: "2009-02-21",
    Imagem: "public/joelPB.png",
    Status: statusValido("transou"),
    NivelPerigo: 3,
  },
];
