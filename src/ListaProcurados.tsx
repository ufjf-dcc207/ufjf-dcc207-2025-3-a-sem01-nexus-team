import type{ Classificacao, Status } from "./Personagem";

const statusValido = (status: string): Status =>
  ["Foragido", "Morto", "Capturado", "Desconhecido"].includes(status as Status)
    ? (status as Status)
    : "Desconhecido";

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

export const ListaProcurados: Procurado[] = [
  {
    id: 1, 
    Nome: "Aiden Pearce",
    Idade: 40,
    Subnome: "O Vigilante",
    DataDeNascimento: "1974-05-02",
    Imagem: "public/AidenPearce.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 4,
  },
  {
    id: 2, 
    Nome: "Arlequina (Harleen Quinzel)",
    Idade: 35,
    Subnome: "Arlequina",
    DataDeNascimento: "1990-07-20",
    Imagem: "public/Alerquina.png",
    Status: statusValido("Capturado"),
    NivelPerigo: 4,
  },
  {
    id: 3, 
    Nome: "Carl Johnson (CJ)",
    Idade: 24,
    Subnome: "CJ",
    DataDeNascimento: "1968-00-00",
    Imagem: "public/CJ.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 4,
  },
  {
    id: 4, 
    Nome: "Deadpool (Wade Wilson)",
    Idade: 0,
    Subnome: "O Mercenário Tagarela",
    DataDeNascimento: "Desconhecido",
    Imagem: "public/Deadpool.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 5, 
    Nome: "Dominic Toretto",
    Idade: 49,
    Subnome: "Dom",
    DataDeNascimento: "1976-08-29",
    Imagem: "public/Toretto.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 4,
  },
  {
    id: 6, 
    Nome: "Dutch Van Der Linde",
    Idade: 44,
    Subnome: "O Plano",
    DataDeNascimento: "1855-00-00",
    Imagem: "public/Dutch.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 7, 
    Nome: "Ellie Williams",
    Idade: 19, 
    Subnome: "A Imunizada", 
    DataDeNascimento: "2019-04-28", 
    Imagem: "public/Ellie.png",
    Status: statusValido("Foragido"), 
    NivelPerigo: 4,
  },
  {
    id: 8, 
    Nome: "Geralt de Rivia",
    Idade: 100,
    Subnome: "O Bruxo",
    DataDeNascimento: "c. 1173",
    Imagem: "public/Geraldao.png",
    Status: statusValido("Desconhecido"),
    NivelPerigo: 4,
  },
  {
    id: 9, 
    Nome: "Joel Miller",
    Idade: 52, 
    Subnome: "O Sobrevivente", 
    DataDeNascimento: "1981-09-26",
    Imagem: "public/JoelMiller.png",
    Status: statusValido("Morto"),
    NivelPerigo: 5,
  },
  {
    id: 10, 
    Nome: "John Wick",
    Idade: 61,
    Subnome: "Baba Yaga",
    DataDeNascimento: "1964-09-02",
    Imagem: "public/JohnWick.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 11, 
    Nome: "Joker",
    Idade: 0,
    Subnome: "O Palhaço do Crime",
    DataDeNascimento: "Desconhecido",
    Imagem: "public/coringa.png",
    Status: statusValido("Capturado"),
    NivelPerigo: 5,
  },
  {
    id: 12, 
    Nome: "Julius",
    Idade: 54,
    Subnome: "O Pai do Chris",
    DataDeNascimento: "1928-01-01",
    Imagem: "public/Julius.png",
    Status: statusValido("Desconhecido"),
    NivelPerigo: 1,
  },
  {
    id: 13, 
    Nome: "Kratos",
    Idade: 1000,
    Subnome: "Fantasma de Esparta",
    DataDeNascimento: "Desconhecido",
    Imagem: "public/Kratos.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 14, 
    Nome: "Michael De Santa",
    Idade: 48,
    Subnome: "O Aposentado",
    DataDeNascimento: "1965-01-01",
    Imagem: "public/Michael.png",
    Status: statusValido("Desconhecido"),
    NivelPerigo: 4,
  },
  {
    id: 15, 
    Nome: "V (Valerie)",
    Idade: 28,
    Subnome: "V",
    DataDeNascimento: "2049-10-12",
    Imagem: "public/V.png",
    Status: statusValido("Foragido"),
    NivelPerigo: 5,
  },
  {
    id: 16, 
    Nome: "Walter White",
    Idade: 52,
    Subnome: "Heisenberg",
    DataDeNascimento: "1958-09-07",
    Imagem: "public/WalterWhite.png",
    Status: statusValido("Morto"),
    NivelPerigo: 5,
  },
];
