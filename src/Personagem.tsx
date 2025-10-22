export type Classificacao = 1|2|3|4|5;
export type Status = "Foragido" | "Morto" | "Capturado" | "Desconhecido";
import Stars from './Stars';
import './Personagem.css';

export default function Personagem({nome, imagem, nivelPerigo, status, idade, dataNascimento}: 
    {nome: string, imagem: string, nivelPerigo: Classificacao, status: Status, idade: number, dataNascimento: string}) {
        let situacao;
        switch(status) {
            case "Foragido":
                situacao = <div className="status"><p>Status: <span className='foragido'>{status}</span></p></div>;
                break;
            case "Morto":
                situacao = <div className="status"><p>Status: <span className='morto'>{status}</span></p></div>;
                break;
            case "Capturado":
                situacao = <div className="status"><p>Status: <span className='capturado'>{status}</span></p></div>;
                break;
            default:
                situacao = <div className="status"><p>Status: <span className='desconhecido'>{status}</span></p></div>;
        }
    return(
        <div className="personagem">
            <div className="nome"><h2>{nome}</h2></div>
            <div className="imagem"><img src={imagem} alt={nome} /></div>
            <div className="nivel-perigo"><p>Nível de Perigo: </p> <div className='estrela'><Stars classificacao={nivelPerigo} /></div></div>
            {situacao}
            <div className="idade"><p>Idade: {idade}</p></div>
            <div className="data-nascimento"><p>Data de Nascimento: {dataNascimento}</p></div>
        </div>
    );
}