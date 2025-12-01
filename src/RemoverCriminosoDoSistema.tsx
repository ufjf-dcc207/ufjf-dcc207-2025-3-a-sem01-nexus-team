import React from "react";
import "./estilos/RemoverCriminosoDoSistema.css";
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
            <h2 className="titulo-remocao">Remover Criminoso do Sistema</h2>
            <ul className="lista-remocao">
                {lista.length ? lista.map(personagem => (
                    <li key={personagem.id} className="item-remocao">
                        <span className="item-info">
                            <strong>{personagem.Nome}</strong> {personagem.Subnome ? `(${personagem.Subnome})` : ""} • ⭐{personagem.NivelPerigo}
                            <img className="item-avatar" src={personagem.Imagem} alt={personagem.Nome} />
                        </span>
                        <button
                            type="button"
                            onClick={() => remover(personagem.id)}
                            className="botao-remover"
                            title="Remover"
                        >Remover</button>
                    </li>
                )) : (
                    <li className="vazio-remocao">Nenhum criminoso para remover.</li>
                )}
            </ul>
            <div className="contador-remocao">Total de criminosos: {lista.length}</div>
            <button type="button" className="botao-visualizar" onClick={voltarPrincipal}>Visualizar Criminosos</button>
        </div>
    );
}