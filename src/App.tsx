import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";

function App() {
  return (
    <>
      <div className="App">
        <h1>Procurados</h1>
        <InterfaceExibicao>
          {ListaProcurados.map((personagem) => (
            <Personagem
              key={personagem.id}
              nome={personagem.Nome}
              imagem={personagem.Imagem}
              nivelPerigo={personagem.NivelPerigo}
              status={personagem.Status}
              idade={personagem.Idade}
              dataNascimento={personagem.DataDeNascimento}
            />
          ))}
        </InterfaceExibicao>
      </div>
    </>
  );
}

export default App;
