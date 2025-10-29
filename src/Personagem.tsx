export type Classificacao = 1|2|3|4|5;
export type Status = "Foragido" | "Morto" | "Capturado" | "Desconhecido";

import './Personagem.css';

function dataValida(data: string): boolean {
    const date = new Date(data);
    return !isNaN(date.getTime());
}

function validacaoData(data:number): boolean {
    return data >= 0;
}

export default function Personagem({nome, subnome, imagem, nivelPerigo, status, idade, dataNascimento, recompensa}: 
    {nome: string, subnome: string, imagem: string, nivelPerigo: Classificacao, status: Status, idade: number | string, dataNascimento: string, recompensa: number}) {
        let desconhecidoData: string = "";
        let desconhecidoIdade: string = "";
        let situacao;
        let dataFormatada: Date | string;

        
        const statusValido = (status: string): Status =>
            ["Foragido", "Morto", "Capturado", "Desconhecido"].includes(status as Status)? (status as Status): "Desconhecido";
        status = statusValido(status);
        
        switch(status) {
            case "Foragido":
                situacao = <span className='foragido'>{status}</span>;
                break;
            case "Morto":
                situacao = <span className='morto'>{status}</span>;
                break;
            case "Capturado":
                situacao = <span className='capturado'>{status}</span>;
                break;
            default:
                situacao = <span className='desconhecido'>{status}</span>;
        }
   
    if (dataNascimento === "Desconhecido") {
        dataFormatada = "Desconhecido";
        desconhecidoData = "desconhecido";
    } else {
        dataValida(dataNascimento) ? dataFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR') : (dataFormatada = " (data inválida)");
    }
    if (typeof idade === 'number') {
        if(validacaoData(idade)){
            idade = idade; 
        }else{
                idade = "Desconhecida";
                desconhecidoIdade = "desconhecido";
            }
    }
    return(
        <div className="personagem">
            <div className="nome"><h2>{nome}</h2></div>
            <div className='subnome'><h3>{subnome}</h3></div>
            <div className="imagem"><img src={imagem} alt={nome} /></div>
            <div className="nivel-perigo"><p>Nível de Perigo: </p></div>
            <div className='estrela'><span>{'⭐'.repeat(nivelPerigo) + '☆'.repeat(5 - nivelPerigo)}</span></div>
            <div className="status"><p>Status: {situacao}</p></div>
            <div className="idade"><p>Idade: <span className={desconhecidoIdade}>{idade}</span></p></div>
            <div className="data-nascimento"><p>Data de Nascimento: <span className={desconhecidoData}>{dataFormatada}</span></p></div>
            <div className="recompensa"><p>Recompensa: R${recompensa.toFixed(2).replace('.', ',')}</p></div>
        </div>
    );
}