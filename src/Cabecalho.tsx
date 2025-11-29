import "./Cabecalho.css"
export function Cabecalho(){
    return(
        <>
            <div className="cabecalho-departamento">
                <img
                src="Logos/DPNClogo.png"
                alt="Logo do Departamento"
                className="logo-departamento"
                />
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
                        <button className="botao-login">
                            <img 
                                src={"Icones/profile.svg"} 
                                alt="Perfil de Usuário" 
                                className="svg-icone" 
                            />
                            <span>LOGIN</span>
                        </button>
                        <button className="botao-recompensa" title="Minhas Recompensas">
                            <img 
                                src={"Icones/money-bag.svg"} 
                                alt="Recompensas" 
                                className="svg-icone" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
)}