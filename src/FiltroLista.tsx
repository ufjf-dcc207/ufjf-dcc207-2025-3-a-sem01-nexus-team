import "./estilos/FiltroLista.css";

type FiltroListaProps = {
  nome: string;
  status: string;
  estrela: number;
  onChange: (novo: { nome: string; status: string; estrela: number }) => void;
}

export default function FiltroLista({ nome, status, estrela, onChange }: FiltroListaProps) {
  return (
    <div className="filtro-lista">
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={nome}
        onChange={(entrada) => onChange({ nome: entrada.target.value, status, estrela })}
        style={{ padding: '8px', flex: 1 }}
      />
      <select
        value={status}
        onChange={(entrada) => onChange({ nome, status: entrada.target.value, estrela })}
        style={{ padding: '8px' }}
      >
        <option value="">Todos os status</option>
        <option value="MORTO">Morto</option>
        <option value="CAPTURADO">Capturado</option>
        <option value="DESCONHECIDO">Desconhecido</option>
        <option value="FORAGIDO">Foragido</option>
      </select>
      <input
        type="number"
        min={0}
        max={5}
        placeholder="Estrelas"
        value={estrela}
        onChange={(entrada) => onChange({ nome, status, estrela: Number(entrada.target.value || 0) })}
        style={{ width: '110px', padding: '8px' }}
      />
    </div>
  );
}
