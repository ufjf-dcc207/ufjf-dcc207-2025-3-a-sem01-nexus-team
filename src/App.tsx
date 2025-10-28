import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";

function App() {
  return (
    <div className="App">
      <header className="cabecalho-departamento">
        <img
          src="DPNClogo.png"
          alt="Logo do Departamento"
          className="logo-departamento"
        />
        <h2 className="nome-departamento">
          Departamento  de Policia Nexus City
        </h2>
      </header>
      <h1 className="titulo-principal">PROCURADOS</h1>
      <InterfaceExibicao>
        {ListaProcurados.map((personagem) => (
          <Personagem
            key={personagem.id}
            nome={personagem.Nome}
            subnome={personagem.Subnome}
            imagem={personagem.Imagem}
            nivelPerigo={personagem.NivelPerigo}
            status={personagem.Status}
            idade={personagem.Idade}
            dataNascimento={personagem.DataDeNascimento}
          />
        ))}
      </InterfaceExibicao>
    </div>
  );
}

export default App;
