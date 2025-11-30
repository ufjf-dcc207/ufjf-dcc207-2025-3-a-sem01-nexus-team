import { useState } from "react";
import type { Procurado }  from "./ProcessadorListas";
import type { Status } from "./Personagem";
import { statusValido } from "./utilitarios/utils";
import {ListaProcurados} from "./ProcessadorListas";


type FormularioProps = {
    submeter:(novoPersonagem: Procurado) => void;
    cancelaSubmeter:()=>void;
    ultimoId: number;
}
type DadosFormularioCriminoso = {
    id?: number;
    Nome: string;
    Subnome: string;
    Imagem: string; // armazenará a URL final da imagem
    Idade: number | string; 
    DataDeNascimento: string;
    Status: Status | string;
    NivelPerigo: number;
    Recompensa: number;
    caminhoImagem: string; // campo de input antes de validar/confirmar
};


export default function FormularioNovoCriminoso({ submeter, cancelaSubmeter, ultimoId }:FormularioProps){
    const[dados,setDados] = useState<DadosFormularioCriminoso>({
        Nome: "",
        Subnome: "",
        Idade: "",
        DataDeNascimento: "",
        Status: "",
        NivelPerigo: 0,
        Imagem: "", // guardará a url validada ou caminho
        Recompensa: 0,
        caminhoImagem: ""
    });
    const [previewValida, setPreviewValida] = useState<boolean>(true);

    const validaUrlImagem = (valor: string): boolean => {
        if (!valor) return false;
        try {
            const u = new URL(valor);
            return ["http:", "https:"].includes(u.protocol);
        } catch {
            return false;
        }
    };
    const inputUsuario = (entrada: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = entrada.target as HTMLInputElement | HTMLSelectElement;
        const { name, type } = target;

       
        if(type === "date"){
            setDados(prev => ({
                ...prev,
                DataDeNascimento: (target as HTMLInputElement).value,
            }));
            return;
        }
        if (type === "number") {
            const numero = (target as HTMLInputElement).valueAsNumber;
            const vazio = (target as HTMLInputElement).value === "";

      
            if (name === "Idade") {
                setDados(prev => ({
                    ...prev,
                    Idade: vazio || Number.isNaN(numero) ? "" : numero,
                }));
                return;
            }

            setDados(prev => ({
                ...prev,
                [name]: Number.isNaN(numero) ? 0 : numero,
            }));
            return;
        }

        setDados(prev => ({
            ...prev,
            [name]: (target as HTMLInputElement | HTMLSelectElement).value,
        }));

        // Se o campo alterado foi caminhoImagem, tenta validar e atualizar Imagem
        if (name === "caminhoImagem") {
            const valor = (target as HTMLInputElement).value.trim();
            const ehUrl = validaUrlImagem(valor);
            setPreviewValida(ehUrl);
            setDados(prev => ({
                ...prev,
                Imagem: ehUrl ? valor : ""
            }));
        }
    };

    const submeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const idadeNormalizada = typeof dados.Idade === "number" ? dados.Idade : 0;
        const statusNormalizado: Status = statusValido(String(dados.Status));
        submeter({
            id: ultimoId + 1,
            Nome: dados.Nome,
            Subnome: dados.Subnome,
            Idade: idadeNormalizada,
            DataDeNascimento: dados.DataDeNascimento,
            Status: statusNormalizado,
            NivelPerigo: dados.NivelPerigo,
            Imagem: dados.Imagem || "Procurados/default.png",
            Recompensa: dados.Recompensa,
        });
        setDados({
            Nome: "",
            Subnome: "",
            Idade: 0,
            DataDeNascimento: "",
            Status: "",
            NivelPerigo: 0,
            Imagem: "",
            Recompensa: 0,
            caminhoImagem: ""
        });
        setPreviewValida(true);
    };
    return (
        <div className="container-formulario">
            <form className="formulario-criminoso" onSubmit={submeterFormulario}>
                <h3>Adicionar Novo Criminoso</h3>

                <label>Nome Completo (Obrigatório):</label>
                <input type="text" name="Nome" value={dados.Nome} onChange={inputUsuario} required />
                
                <label>Subnome / Codinome:</label>
                <input type="text" name="Subnome" value={dados.Subnome} onChange={inputUsuario} />

                <label>Idade:</label>
                <input 
                    type="number" 
                    name="Idade" 
                    value={dados.Idade} 
                    onChange={inputUsuario} 
                    min="0" 
                    placeholder="0" 
                />
                <label>Data de Nascimento:</label>
                <input 
                    type="date" 
                    name="DataDeNascimento" 
                    value={dados.DataDeNascimento} 
                    onChange={inputUsuario} 
                    min="0" 
                    placeholder="0" 
                />

                <label>Nível de Perigo (1 a 5):</label>
                <select name="NivelPerigo" value={dados.NivelPerigo} onChange={inputUsuario}>
                    <option value={1}>⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                </select>
                <label>Status Atual:</label>
                <select name="Status" value={dados.Status} onChange={inputUsuario}>
                    <option value="Foragido">Foragido</option>
                    <option value="Capturado">Capturado</option>
                    <option value="Morto">Morto</option>
                    <option value="Desconhecido">Desconhecido</option>
                </select>

                <label>Recompensa (R$):</label>
                <input type="number" name="Recompensa" value={dados.Recompensa} onChange={inputUsuario} min="0" />

                <label>Caminho da Imagem (Ex: Procurados/novo.png):</label>
                                <input 
                                    type="text" 
                                    name="caminhoImagem" 
                                    value={dados.caminhoImagem} 
                                    onChange={inputUsuario} 
                                    placeholder="URL completa (https://...) ou deixe vazio" 
                                />
                                <div style={{marginTop: '8px'}}>
                                    {dados.Imagem ? (
                                        previewValida ? (
                                            <img 
                                                src={dados.Imagem} 
                                                alt="Preview" 
                                                style={{maxWidth:'140px', maxHeight:'140px', border:'1px solid #D9BE6C', borderRadius:'6px'}}
                                                onError={() => setPreviewValida(false)}
                                            />
                                        ) : (
                                            <span style={{color:'#ff8080', fontSize:'0.85rem'}}>URL inválida ou imagem indisponível.</span>
                                        )
                                    ) : (
                                        <span style={{fontSize:'0.8rem', color:'#D9BE6C'}}>Sem imagem definida. Será usado padrão.</span>
                                    )}
                                </div>
                
                <div className="botoes-formulario">
                    <button type="submit" className="botao-salvar">Salvar Criminoso</button>
                    <button type="button" className="botao-cancelar" onClick={cancelaSubmeter}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}