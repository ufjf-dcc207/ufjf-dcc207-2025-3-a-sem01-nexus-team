import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";
import { filtrarPersonagem } from "./utilitarios/utils";

function App() {
  const nome = "";
  const status = "";
  const estrela = 0;

  const ListaProcuradosFiltrado = filtrarPersonagem(ListaProcurados, nome, status, estrela);

  return (
    <div className="App">
      <h1 className="titulo-principal">PROCURADOS</h1>
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