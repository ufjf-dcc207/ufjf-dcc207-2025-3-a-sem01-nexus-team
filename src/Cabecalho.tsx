import "./estilos/Cabecalho.css"

interface CabecalhoProps{
    TemLogin: boolean;
    onClickLogin: () => void;
    clickOn?: () => void;
}
export function Cabecalho({ TemLogin, onClickLogin, clickOn}: CabecalhoProps){
    return(
        <>
            <div className="cabecalho-departamento">
                <div className="logo-container">
                    <img
                    src="Logos/DPNClogo.png"
                    alt="Logo do Departamento"
                    className="logo-departamento"
                    />
                </div>
                <div className="conteiner-navegacao">
                    <h2 className="nome-departamento">
                    Departamento  de Policia Nexus City
                    </h2>
                    <div className="botoes-navegacao">
                        <button className="botao-inicio">Início</button>
                        <button className="botao-procurados">Procurados</button>
                        <button className="botao-desaparecidos">Desaparecidos</button>
                        <button className="botao-denuncia">Denúncia</button>
                        <button className="botao-saibaMais">Saiba Mais</button>
                        <button className="botao-login" onClick={onClickLogin}>
                            <img 
                                src={"Icones/profile.svg"} 
                                alt="Perfil de Usuário" 
                                className="svg-icone" 
                            />
                            <span>{TemLogin ? "LOGOUT" : "LOGIN"}</span>
                        </button>
                        <button className="botao-recompensa" title="Minhas Recompensas">
                            <img 
                                src={"Icones/money-bag.svg"} 
                                alt="Recompensas" 
                                className="svg-icone" 
                            />
                        </button>
                        {TemLogin?(
                            <button className="botao-adiciona-criminoso" title="Adicionar Criminoso" onClick={clickOn}>
                                <img src={"Icones/icons8-plusx.svg"} 
                                alt="Adicionar Criminoso"
                                className="svg-icone"           
                                />
                            </button>):(null)}
                    </div>
                </div>
            </div>
        </>
)}