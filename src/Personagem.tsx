export type Classificacao = 1|2|3|4|5;
export type Status = "Foragido" | "Morto" | "Capturado" | "Desconhecido";
import Stars from './Stars';
import './Personagem.css';

function dataValida(data: string): boolean {
    const estruturaData = /^\d{4}-\d{2}-\d{2}$/;
    const estruturaCirca = /^c\.?\s?\d{4}$/i;
    if (!estruturaData.test(data) && !estruturaCirca.test(data)) return false;
    const partes = data.split('-');
    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const dia = parseInt(partes[2]);
    if (ano < 0 || mes < 1 || mes > 12 || dia < 1 || dia > 31) return false;
    return true;
}

function validacaoData(data:number): boolean {
    return data >= 0;
}

export default function Personagem({nome, subnome, imagem, nivelPerigo, status, idade, dataNascimento}: 
    {nome: string, subnome: string, imagem: string, nivelPerigo: Classificacao, status: Status, idade: number | string, dataNascimento: string}) {
        let situacao;
        let dataFormatada: Date | string;
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
    } else {
        dataValida(dataNascimento) ? dataFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR') : (dataFormatada = " (data inválida)");
    }
    if (typeof idade === 'number') {
        validacaoData(idade) ? idade = idade : idade = "Desconhecida";
    }
    return(
        <div className="personagem">
            <div className="nome"><h2>{nome}</h2></div>
            <div className='subnome'><h3>{subnome}</h3></div>
            <div className="imagem"><img src={imagem} alt={nome} /></div>
            <div className="nivel-perigo"><p>Nível de Perigo: </p> <div className='estrela'><Stars classificacao={nivelPerigo} /></div></div>
            <div className="status"><p>Status: {situacao}</p></div>
            <div className="idade"><p>Idade: {idade}</p></div>
            <div className="data-nascimento"><p>Data de Nascimento: {dataFormatada}</p></div>
        </div>
    );
}