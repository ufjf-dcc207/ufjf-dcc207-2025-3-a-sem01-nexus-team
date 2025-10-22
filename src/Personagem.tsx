type Classificacao = 1|2|3|4|5;

import './Personagem.css';
export default function Personagem({nome, imagem, nivelPerigo, status, idade, dataNascimento}: 
    {nome: string, imagem: string, nivelPerigo: Classificacao, status: boolean, idade: number, dataNascimento: string}) {
    return(
        <div className="personagem">
            <div className="nome"><h2>{nome}</h2></div>
            <div className="imagem"><img src={imagem} alt={nome} /></div>
            <div className="nivel-perigo"><p>Nível de Perigo: {nivelPerigo}</p></div>
            <div className="status"><p>Status: {status? "Capturado" : "Foragido"}</p></div>
            <div className="idade"><p>Idade: {idade}</p></div>
            <div className="data-nascimento"><p>Data de Nascimento: {dataNascimento}</p></div>
        </div>
    );
}