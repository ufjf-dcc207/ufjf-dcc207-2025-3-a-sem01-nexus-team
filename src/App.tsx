import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";
import { filtrarPersonagem } from "./utilitarios/utils";
import { useState } from "react";

function App() {

  const [nome, setNome] =  useState("");
  const [status, setStatus] = useState("");
  const [estrela, setEstrela] = useState(0);
  const ListaProcuradosFiltrado = filtrarPersonagem(ListaProcurados, nome, status, estrela);

  return (
    <div className="App">
      
      <div className="interface-procurados">
        <h1 className="titulo-principal">PROCURADOS</h1>

        <div className="container-busca">

          <div className="interface-busca">
            <input
              type="text"
              className="campo-texto"
              placeholder="Buscar por nome..."
              value={nome}
              onChange={(texto) => setNome(texto.target.value)}
            />

            <select 
                className="campo-select divisa-esquerda" 
                value={estrela} 
                onChange={(estrela) => setEstrela(Number(estrela.target.value))}
                title="Filtrar por Nível"
            >
                <option value={0}>⭐</option>
                <option value={1}>⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={5}>⭐⭐⭐⭐⭐</option>
            </select>

            <select 
                className="campo-select divisa-esquerda" 
                value={status} 
                onChange={(status) => setStatus(status.target.value)}
                title="Filtrar por Status"
            >
                <option value="">🚨</option>
                <option value="Foragido">Foragido</option>
                <option value="Capturado">Capturado</option>
                <option value="Morto">Morto</option>
                <option value="Desconhecido">Desconhecido</option>
            </select>
          </div>
        </div>

      </div>
      <InterfaceExibicao>
        {ListaProcuradosFiltrado.map((personagem) => (
          <div className="card" key ={personagem.id}>
            <Personagem
              key={personagem.id}
              nome={personagem.Nome}
              subnome={personagem.Subnome}
              imagem={personagem.Imagem}
              nivelPerigo={personagem.NivelPerigo}
              status={personagem.Status}
              idade={personagem.Idade}
              dataNascimento={personagem.DataDeNascimento}
              recompensa={personagem.Recompensa}
            />
          </div>
        ))}
      </InterfaceExibicao>
    </div>
  );
}

export default App;