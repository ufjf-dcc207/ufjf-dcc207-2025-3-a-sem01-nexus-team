import React from "react";
import type { Procurado } from "./ProcessadorListas";

interface RemoverCriminosoDoSistemaProps {
    lista: Procurado[];
    onRemover: (id: number) => void;
    voltarPrincipal: () => void;
}

export default function RemoverCriminosoDoSistema({ lista, onRemover, voltarPrincipal }: RemoverCriminosoDoSistemaProps){
    const remover = (id: number) => {
        if (window.confirm("Confirma remover este criminoso? Esta ação não pode ser desfeita.")) {
            onRemover(id);
        }
    };

    return (
        <div className="remover-criminoso">
            <h2>Remover Criminoso do Sistema</h2>
            <ul className="lista-remocao" style={{listStyle: "none", padding: 0, margin: 0}}>
                {lista.length ? lista.map(personagem => (
                    <li key={personagem.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 8px", borderBottom: "1px solid #ccc"}}>
                        <span>
                            <strong>{personagem.Nome}</strong> {personagem.Subnome ? `(${personagem.Subnome})` : ""} • ⭐{personagem.NivelPerigo} • <img src={personagem.Imagem} alt={personagem.Nome} style={{width: "30px", height: "30px", objectFit: "cover", borderRadius: "50%", marginLeft: "10px", verticalAlign: "middle"}} />
                        </span>
                        <button
                            type="button"
                            onClick={() => remover(personagem.id)}
                            style={{background: "#c62828", color: "#fff", border: "none", padding: "4px 10px", borderRadius: "4px", cursor: "pointer"}}
                            title="Remover"
                        >Remover</button>
                    </li>
                )) : (
                    <li style={{padding: "8px"}}>Nenhum criminoso para remover.</li>
                )}
            </ul>
            <div style={{padding: "8px"}}>Total de criminosos: {lista.length}</div>
            <button type="button" className="botao-visualizar" onClick={voltarPrincipal}> Visualizar Criminosos</button>
        </div>
    );
}