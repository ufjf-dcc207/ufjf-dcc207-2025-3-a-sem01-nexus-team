import "./estilos/App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados, type InfoUsuario } from "./ProcessadorListas";
import { filtrarPersonagem } from "./utilitarios/utils";
import { useState } from "react";
import Login from "./Login";
import { Cabecalho } from "./Cabecalho";


function App() {
  const [login, setLogin] = useState({teveLogin: false, userInfo: null as InfoUsuario | null, mostraLogin: false});
  const [filtros, setFiltros] = useState({ nome: "", status: "", estrela: 0 });
  

  const processarLogin = (user: InfoUsuario) => {
    setLogin(prev => ({ ...prev, userInfo: user, teveLogin: true, mostraLogin: false }));
  };

  const processarLogout = () => {
    setLogin(prev => ({ ...prev, userInfo: null, teveLogin: false, mostraLogin: false }));
  };
  
  const alternarVisualizacaoLogin = () => {
    if (login.teveLogin) {
        processarLogout(); 
    } else {
        setLogin(prev => ({ ...prev, mostraLogin: !prev.mostraLogin }));
    }
  };

  const ListaProcuradosFiltrado = filtrarPersonagem(ListaProcurados, filtros.nome, filtros.status, filtros.estrela);
  const deveMostrarAreaDeLogin = login.teveLogin || login.mostraLogin;
  
  return (
    <div className="App">
      <Cabecalho 
        TemLogin={login.teveLogin}
        onClickLogin={alternarVisualizacaoLogin}
        filtroNome={filtros.nome}
        filtroStatus={filtros.status}
        filtroEstrela={filtros.estrela}
        onFiltroChange={(novo) => setFiltros(novo)}
      />
      <div className="conteudo-principal">
        {deveMostrarAreaDeLogin ? (
          <div style={{ margin: '20px auto', maxWidth: '400px', padding: '10px' }}>
              {login.teveLogin && login.userInfo ? (
                  <div className="caixa-perfil">
                    <img 
                      src={login.userInfo.imagemPerfil} 
                      alt="Imagem de Perfil" 
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
                    />
                      <p style={{ margin: 0 }}> <strong>{login.userInfo.nome}</strong> ({login.userInfo.nivelAcesso})</p>
                  </div>
              ) : (
                  <Login TemLogin={processarLogin} />
              )}
          </div>
        ) : null}
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
    </div>
  );
}

export default App;