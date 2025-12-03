import type { Status } from "../Personagem";
import type { Procurado } from "../ProcessadorListas";

export function filtrarPersonagem(lista: Procurado[], filtroNome: string = "", filtroStatus:string = "", filtroEstrela: number = 0) {
  return lista.filter((personagem) => {
    const nomeValido =
      !filtroNome || personagem.Nome.toLowerCase().includes(filtroNome.toLowerCase()) ||
      personagem.Subnome.toLowerCase().includes(filtroNome.toLowerCase());

    const statusValido =
      !filtroStatus || personagem.Status.toLowerCase() === filtroStatus.toLowerCase();

    const estrelaValido =
      !filtroEstrela || personagem.NivelPerigo === filtroEstrela;

    return nomeValido && statusValido && estrelaValido;
  })
}


export function dataValida(data: string): boolean {
    const date = new Date(data);
    return !isNaN(date.getTime());
}

export function situacaoStatus(status: Status): string {
    switch(status) {
        case "Foragido":
            return 'foragido';
        case "Morto":
            return 'morto';
        case "Capturado":
            return 'capturado';
        default:
            return 'desconhecido';
    }
}

export const statusValido = (status: string): Status =>
            ["Foragido", "Morto", "Capturado", "Desconhecido"].includes(status as Status)? (status as Status): "Desconhecido";

export const idadeValida = (idade: number | string): number | string => {
    if (typeof idade === 'number') {
        if (idade === -1) {
            return "Desconhecida";
        }
        if (idade > 0) {
            return idade;
        }
        return "Idade inválida";
    } 
    else {
        return "Desconhecida";
    }
}

export function formataIdade(idade: number | string): string {
    if (idade === "Desconhecida") {
        return "desconhecida";
    }
    return "";
}

export const nivelPerigoValido = (nivelPerigo: number): number =>{
    if (nivelPerigo < 1) {
        return 1;
    } else if (nivelPerigo > 5) {
        return 5;
    } else {
        return nivelPerigo;
    }
}

export function trataRecompensa(recompensa: number, status: string): string {
    if (status === "Morto" || status === "Capturado") {
        return "Indisponível";
    } else if (recompensa <= 0) {
        return "Recompensa inválida";
    } else {
        return `R$${recompensa.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
}

export function checaDataNascimento(dataNascimento: string): string {
    if(dataNascimento === "Desconhecido") {
        return "desconhecido";
    }
    return "";
}

export function trataData(dataNascimento: string): string {
    if(dataNascimento === "Desconhecido") {
        return "Desconhecido";
    }
    else{
        if(dataValida(dataNascimento)) {
            return new Date(dataNascimento + "T00:00:00").toLocaleDateString('pt-BR');
        }
    }
    return "(data inválida)";
}