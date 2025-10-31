import "./App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados } from "./ListaProcurados";
import  type { Procurado } from "./ListaProcurados";
import { Cabecalho } from "./Cabecalho";

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
      <Cabecalho/>
      <InterfaceExibicao>
        {ListaProcuradosFiltrado.map((personagem) => (
          <div className="card">
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
