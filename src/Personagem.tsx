export type Classificacao = 1|2|3|4|5;
export type Status = "Foragido" | "Morto" | "Capturado" | "Desconhecido";

import './Personagem.css';

function dataValida(data: string): boolean {
    const date = new Date(data);
    return !isNaN(date.getTime());
}

function situacaoStatus(status: Status): string {
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

const statusValido = (status: string): Status =>
            ["Foragido", "Morto", "Capturado", "Desconhecido"].includes(status as Status)? (status as Status): "Desconhecido";

const idadeValida = (idade: number | string): number | string => {
    if (typeof idade === 'number') {
        return idade >= 0 ? idade : "Desconhecida";
    } else {
        return "Desconhecida";
    }
}

export default function Personagem({nome, subnome, imagem, nivelPerigo, status, idade, dataNascimento, recompensa}: 
    {nome: string, subnome: string, imagem: string, nivelPerigo: Classificacao, status: Status, idade: number | string, dataNascimento: string, recompensa: number}) {
        let desconhecidoData: string = "";
        let desconhecidoIdade: string = "";
        let situacao;
        let dataFormatada: Date | string;

        status = statusValido(status);
        situacao = situacaoStatus(status);
   
    if (dataNascimento === "Desconhecido") {
        dataFormatada = "Desconhecido";
        desconhecidoData = "desconhecido";
    } else {
        dataValida(dataNascimento) ? dataFormatada = new Date(dataNascimento + "T00:00:00").toLocaleDateString('pt-BR') : (dataFormatada = " (data inválida)");
    }
    
    idade = idadeValida(idade);
    if (idade === "Desconhecida") {
        desconhecidoIdade = "desconhecida";
    }
    
    const recompensaValida = status === "Foragido" || status === "Desconhecido" ? `R$${recompensa.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Indisponível";
    
    return(
        <div className="personagem">
            <div className="nome"><h2>{nome}</h2></div>
            <div className='subnome'><h3>{subnome}</h3></div>
            <div className="imagem"><img src={imagem} alt={nome} /></div>
            <div className="nivel-perigo"><p>Nível de Perigo: </p></div>
            <div className='estrela'><p>{'⭐'.repeat(nivelPerigo) + '☆'.repeat(5 - nivelPerigo)}</p></div>
            <div className="status"><p>Status: <span className={situacao}>{status}</span></p></div>
            <div className="idade"><p>Idade: <span className={desconhecidoIdade}>{idade}</span></p></div>
            <div className="data-nascimento"><p>Nascimento: <span className={desconhecidoData}>{dataFormatada}</span></p></div>
            <div className="recompensa"><p>Recompensa: {recompensaValida}</p></div>
        </div>
    );
}