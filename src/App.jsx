import { useState } from "react";
import "./App.css";

export default function App(){

const [descricao, setDescricao] = useState("");
const [quantidade, setQuantidade] = useState("");
const [valorUnitario, setValorUnitario] = useState("");
const [listaOrcamento, setListaOrcamento] = useState([]);

  const adicionarItem = () => {
    if (descricao.trim() === "" || quantidade === "" || valorUnitario === ""){
      alert("Preencha os campos");
      return;
    }
  

    const novoItem = {
      id: Date.now(),
      descricao,
      quantidade: Number(quantidade),
      valorUnitario: Number(valorUnitario),
      valorTotal: Number(quantidade) * Number(valorUnitario)
    }
    
    setListaOrcamento([...listaOrcamento, novoItem]);

    setDescricao("");
    setQuantidade("");
    setValorUnitario("");

    }
  
    const excluirItem = (id) => {
          setListaOrcamento(listaOrcamento.filter((item) => item.id !== id));
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
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        placeholder="Quantidade"
        />
        <input
        type="text"
        value={valorUnitario}
        onChange={(e) => setValorUnitario(e.target.value)}
        placeholder="Valor unitário"
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>

    {listaOrcamento.length > 0 && (
      <table className="tabela-orcamento">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Quant.</th>
            <th>Unitário</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
           {listaOrcamento.map((item) => (
              <tr key={item.id}>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
                <td>R$ {item.valorUnitario.toFixed(2)}</td>
                <td>R$ {item.valorTotal.toFixed(2)}</td>
                <td>
                  <button onClick={() => excluirItem(item.id)} className="delete-btn">❌</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    )}

    </div>

  )
    
}