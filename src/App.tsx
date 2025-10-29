import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";
import  type { Procurado } from "./ListaProcurados";

function filtrarPersonagem(lista: Procurado[], filtroNome: string = "", filtroStatus:string = "", filtroEstrela: number = 0) {
  return lista.filter((personagem) => {
    const nomeValido =
      !filtroNome || personagem.Nome.toLowerCase().includes(filtroNome.toLowerCase()) ||
      personagem.Subnome.toLowerCase().includes(filtroNome.toLowerCase());

    const statusValido =
      !filtroStatus || personagem.Status.toLowerCase() === filtroStatus.toLowerCase();

    const estrelaValido =
      !filtroEstrela || personagem.NivelPerigo === filtroEstrela;

    return nomeValido && statusValido && estrelaValido;
  })
}

function App() {
  const nome = "";
  const status = "";
  const estrela = 0;

  const ListaProcuradosFiltrado = filtrarPersonagem(ListaProcurados, nome, status, estrela);

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
        {ListaProcuradosFiltrado.map((personagem) => (
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
        ))}
      </InterfaceExibicao>
    </div>
  );
}

export default App;
