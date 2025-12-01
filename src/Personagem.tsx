export type Status = "Foragido" | "Morto" | "Capturado" | "Desconhecido";

import './estilos/Personagem.css';
import {situacaoStatus, statusValido, idadeValida, nivelPerigoValido, trataRecompensa, 
    formataIdade, checaDataNascimento, trataData} from './utilitarios/utils';

export default function Personagem({nome, subnome, imagem, nivelPerigo, status, idade, dataNascimento, recompensa, descricao, crimes}: 
    {nome: string, subnome: string, imagem: string, nivelPerigo: number, status: Status, idade: number | string, dataNascimento: string, recompensa: number, descricao?: string, crimes?: string[]}) {
    let desconhecidoData: string = "";
    let dataFormatada: string;
    let desconhecidoIdade: string = "";
    let situacao;
    let recompensaValida;

    status = statusValido(status);
    situacao = situacaoStatus(status);
    nivelPerigo = nivelPerigoValido(nivelPerigo);
    desconhecidoData = checaDataNascimento(dataNascimento);
    dataFormatada = trataData(dataNascimento);   
    idade = idadeValida(idade);
    desconhecidoIdade = formataIdade(idade);
    recompensaValida = trataRecompensa(recompensa, status);

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
            {descricao ? <div className="descricao"><p>{descricao}</p></div> : null}
            {crimes && crimes.length > 0 ? <div className="crimes"><p><strong>Crimes:</strong> {crimes.slice(0,5).join(', ')}{crimes.length>5? '...' : ''}</p></div> : null}
            <button className="botao-ficha">Ver Ficha</button>
        </div>
    );
}