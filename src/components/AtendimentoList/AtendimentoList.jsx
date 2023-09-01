import { useState, useEffect } from "react";
import {
  getAtendimentos,
  deleteAtendimento,
  saveAtendimento,
} from "../../utils/localStorage";
import * as AL from "./AtendimentoList.styles";

const categoriasPossiveis = [
  "Techsapp",
  "Lifix",
  "Governança",
  "Kuiper",
  "A7",
  "SevenShop",
  "Comercial",
  "Financeiro",
];

function formatarData(data) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(data).toLocaleDateString("pt-BR", options);
}

function AtendimentoList() {
  const [atendimentos, setAtendimentos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedLoja, setEditedLoja] = useState("");
  const [editedCategoria, setEditedCategoria] = useState("");
  const [editedTelefone, setEditedTelefone] = useState("");
  const [editedAnyDesk, setEditedAnyDesk] = useState("");
  const [editedAtendente, setEditedAtendente] = useState("");
  const [editedDescricao, setEditedDescricao] = useState("");

  useEffect(() => {
    const atendimentosFromLocalStorage = getAtendimentos();
    setAtendimentos(atendimentosFromLocalStorage);
  }, []);

  const handleDelete = (index) => {
    const updatedAtendimentos = atendimentos.filter((_, i) => i !== index);
    setAtendimentos(updatedAtendimentos);
    deleteAtendimento(index);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const atendimento = atendimentos[index];
    setEditingIndex(index);
    setEditedLoja(atendimento.loja);
    setEditedAtendente(atendimento.atendente);
    setEditedDescricao(atendimento.descricao);
    setEditedCategoria(atendimento.categoria);
    setEditedTelefone(atendimento.telefone);
    setEditedAnyDesk(atendimento.anyDesk);
  };

  const handleUpdate = () => {
    const updatedAtendimentos = [...atendimentos];
    updatedAtendimentos[editingIndex] = {
      loja: editedLoja,
      atendente: editedAtendente,
      categoria: editedCategoria,
      telefone: editedTelefone,
      anyDesk: editedAnyDesk,
      descricao: editedDescricao,
      data: new Date(),
    };
    saveAtendimento(updatedAtendimentos);
    setAtendimentos(updatedAtendimentos);
    setEditingIndex(null);
  };

  return (
    <AL.ListWrapper>
      <h2>Lista de Atendimentos</h2>
      <ul>
        {atendimentos.map((atendimento, index) => (
          <li key={index}>
            <div className="info-row">
              <strong>Loja:</strong>
              <span>{atendimento.loja}</span>
            </div>
            <div className="info-row">
              <strong>Cliente:</strong>
              <span>{atendimento.atendente}</span>
            </div>
            <div className="info-row">
              <strong>Categoria:</strong>
              <span>{atendimento.categoria}</span>
            </div>
            <div className="info-row">
              <strong>Telefone:</strong>
              <span>{atendimento.telefone}</span>
            </div>
            <div className="info-row">
              <strong>Número do AnyDesk:</strong>
              <span>{atendimento.anyDesk}</span>
            </div>
            <div className="info-row">
              <strong>Data:</strong>
              <span>{formatarData(atendimento.data)}</span>
            </div>
            <div className="description">
              <strong>Descrição:</strong>
              <p>{atendimento.descricao}</p>
            </div>
            {editingIndex === index ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editedLoja}
                  onChange={(e) => setEditedLoja(e.target.value)}
                />
                <input
                  type="text"
                  value={editedAtendente}
                  onChange={(e) => setEditedAtendente(e.target.value)}
                />
                <select
                  value={editedCategoria}
                  onChange={(e) => setEditedCategoria(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  {categoriasPossiveis.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={editedTelefone}
                  onChange={(e) => setEditedTelefone(e.target.value)}
                />
                <input
                  type="text"
                  value={editedAnyDesk}
                  onChange={(e) => setEditedAnyDesk(e.target.value)}
                />
                <textarea
                  value={editedDescricao}
                  onChange={(e) => setEditedDescricao(e.target.value)}
                />
                <button onClick={handleUpdate}>Salvar</button>
              </div>
            ) : (
              <div>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(index)}
                >
                  Editar
                </button>
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </AL.ListWrapper>
  );
}

export default AtendimentoList;
