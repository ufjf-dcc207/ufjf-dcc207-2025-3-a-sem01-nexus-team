import "./estilos/App.css";
import Personagem from "./Personagem";
import InterfaceExibicao from "./InterfaceExibicao";
import { ListaProcurados, type InfoUsuario } from "./ProcessadorListas";
import { filtrarPersonagem } from "./utilitarios/utils";
import { useState } from "react";
import Login from "./Login";
import { Cabecalho } from "./Cabecalho";
import FormularioNovoCriminoso from "./FormularioNovoCriminoso";
import type { Procurado } from "./ProcessadorListas";
import RemoverCriminosoDoSistema from "./RemoverCriminosoDoSistema";
import Ficha from "./Ficha";

function App() {

  const [nome, setNome] =  useState("");
  const [status, setStatus] = useState("");
  const [estrela, setEstrela] = useState(0);
  const [login, setLogin] = useState({teveLogin: false, nivelAcesso: "", userInfo: null as InfoUsuario | null, mostraLogin: false}); 
  const [listaAtualizada, setListaAtualizada] = useState(ListaProcurados);
  const [mostrarFormAddCriminoso, setMostrarFormAddCriminoso] = useState(false); 
  const [mostrarRemocaoCriminoso, setMostrarRemocaoCriminoso] = useState(false);
  const [personagemSelecionadoFicha, setPersonagemSelecionadoFicha] = useState<Procurado | null>(null);
  
  let ListaProcuradosFiltrado = filtrarPersonagem(listaAtualizada, nome, status, estrela);

  const clickOn = () => {
    setMostrarFormAddCriminoso(true);
    setMostrarRemocaoCriminoso(false);
  };

  const clickRemover = () => {
    setMostrarRemocaoCriminoso(true);
    setMostrarFormAddCriminoso(false);
  };

  const voltarPrincipal = () => {
    setMostrarRemocaoCriminoso(false);
  };

  const submeterNovoCriminoso = (novo: Procurado) => {
    setListaAtualizada(prev => [novo, ...prev]);
    setMostrarFormAddCriminoso(false);
  };

  const cancelarNovoCriminoso = () => {
    setMostrarFormAddCriminoso(false);
  };

  const removerCriminoso = (id: number) => {
    setListaAtualizada(prev => prev.filter(p => p.id !== id));
  };

  const deveMostrarAreaDeLogin = login.teveLogin || login.mostraLogin;
  const deveMostrarFormularioAdicao = login.teveLogin && mostrarFormAddCriminoso;
  const deveMostrarRemocao = login.teveLogin && mostrarRemocaoCriminoso;
  
  const processarLogin = (user: InfoUsuario) => {
    setLogin(prevLogin => ({ ...prevLogin, userInfo: user, teveLogin: true, mostraLogin: false }));
  
    setMostrarFormAddCriminoso(false);
    setMostrarRemocaoCriminoso(false);
  };

  const processarLogout = () => {
    setLogin(prevLogin => ({ ...prevLogin, userInfo: null, teveLogin: false, mostraLogin: false }));
   
    setMostrarFormAddCriminoso(false);
    setMostrarRemocaoCriminoso(false);
  };
  
  const alternarVisualizacaoLogin = () => {
    if (login.teveLogin) {
        processarLogout(); 
    } else {
        setLogin(prevLogin => ({ ...prevLogin, mostraLogin: !prevLogin.mostraLogin }));
    }
  };

  const clickVerFicha = (personagem: Procurado) => {
    setPersonagemSelecionadoFicha(personagem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clickVoltar = () => {
    setPersonagemSelecionadoFicha(null);
  };

  const clickPegarRecompensa = () => {
    alert("Recompensa Pega!");
  };

  return (
    <div className="App">
      <Cabecalho 
        TemLogin={login.teveLogin}
        nivelAcesso={login.userInfo?.nivelAcesso}
        usuario={login.userInfo}
        onClickLogin={alternarVisualizacaoLogin}
        clickOn={clickOn}
        onClickRemover={clickRemover}
        onClickVisualizar={voltarPrincipal}
      />
      
      {deveMostrarFormularioAdicao?(
        <div className="sobreposicao-formulario">
          <FormularioNovoCriminoso 
            submeter={submeterNovoCriminoso} 
            cancelaSubmeter={cancelarNovoCriminoso} 
            ultimoId={listaAtualizada.length ? Math.max(...listaAtualizada.map(p => p.id)) : 0}
          />
        </div>
      ):(null)}
      {deveMostrarRemocao ? (
        <div className="sobreposicao-formulario">
          <RemoverCriminosoDoSistema 
            lista={listaAtualizada}
            onRemover={removerCriminoso}
            voltarPrincipal={voltarPrincipal}
          />
        </div>
      ) : (null)}

      <div className="conteudo-principal">
        {deveMostrarAreaDeLogin ? (
          <div className="caixa-usuario">
              {login.teveLogin && login.userInfo ? (
                  <div className="caixa-perfil">
                    <img 
                      src={login.userInfo.imagemPerfil} 
                      alt="Imagem de Perfil" 
                      className="imagem-perfil"
                    />
                      <p><strong>{login.userInfo.nome}</strong> ({login.userInfo.nivelAcesso})</p>
                  </div>
              ) : (
                  <Login TemLogin={processarLogin} />
              )}
          </div>
        ) : null}

      {personagemSelecionadoFicha ? (
        <InterfaceExibicao>
          <Ficha
            nome={personagemSelecionadoFicha!.Nome}
            subnome={personagemSelecionadoFicha!.Subnome}
            imagem={personagemSelecionadoFicha!.Imagem}
            nivelPerigo={personagemSelecionadoFicha!.NivelPerigo}
            status={personagemSelecionadoFicha!.Status}
            idade={personagemSelecionadoFicha!.Idade}
            dataNascimento={personagemSelecionadoFicha!.DataDeNascimento}
            recompensa={personagemSelecionadoFicha!.Recompensa}
            peso={personagemSelecionadoFicha!.Peso}
            altura={personagemSelecionadoFicha!.Altura}
            descricao={personagemSelecionadoFicha!.Descricao}
            crimes={personagemSelecionadoFicha!.Crimes}
            ultimaLocalizacao={personagemSelecionadoFicha!.UltimaLocalizacao}
            onVoltar={clickVoltar}
            onPegarRecompensa={clickPegarRecompensa}
          />
        </InterfaceExibicao>
      ) : (
            <>
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
                        <option value={0}>🌟</option>
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
                        <option value="">Todos</option>
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
                  <div className="card" key={personagem.id}>
                    <Personagem
                      nome={personagem.Nome}
                      subnome={personagem.Subnome}
                      imagem={personagem.Imagem}
                      nivelPerigo={personagem.NivelPerigo}
                      status={personagem.Status}
                      idade={personagem.Idade}
                      dataNascimento={personagem.DataDeNascimento}
                      recompensa={personagem.Recompensa}
                      onVerFicha={() => clickVerFicha(personagem)}
                    />
                  </div>
                ))}
              </InterfaceExibicao>
            </>
        )
      }
      </div>
    </div>
  );
}

export default App;