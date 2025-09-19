import { useState } from "react";
import "./App.css";

export default function App(){

const [descricao, setDescricao] = useState("");
const [quant, setQuant] = useState("");
const [valUnitario, setValUnitario] = useState("");
const [valTotal, setValTotal] = useState("");
const [tabela, setTabela] = useState("");

    const adicionarTabela = () => {
    if (tarefa.trim() === "") {

      return;
    }

  return(
    <div>
      <h2>Orçamento</h2>
      <div className="input-container">
        <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        />
        <input
        type="text"
        value={quant}
        onChange={(e) => setQuant(e.target.value)}
        placeholder="Quantidade"
        />
        <input
        type="text"
        value={valUnitario}
        onChange={(e) => setValUnitario(e.target.value)}
        placeholder="Valor unitário"
        />
      <button onClick={adicionarTabela}>Adicionar</button>
      </div>


    </div>

  )

    }
}