import { useState, useEffect } from "react";
import {
  getAtendimentos,
  deleteAtendimento,
  saveAtendimento,
} from "../../utils/StorageConnection";
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
  const [editedCliente, setEditedCliente] = useState("");
  const [editedDescricao, setEditedDescricao] = useState("");
  const [editedAtendente, setEditedAtendente] = useState("");

  useEffect(() => {
    const fetchAtendimentos = async () => {
      try {
        const atendimentosFromServer = await getAtendimentos();
        setAtendimentos(atendimentosFromServer);
      } catch (error) {
        console.error("Erro ao buscar atendimentos:", error);
      }
    };

    fetchAtendimentos();
  }, []);

  const handleDelete = async (index) => {
    try {
      await deleteAtendimento(index);
      const updatedAtendimentos = [...atendimentos];
      updatedAtendimentos.splice(index, 1);
      setAtendimentos(updatedAtendimentos);
      setEditingIndex(null);
    } catch (error) {
      console.error("Erro ao excluir atendimento:", error);
    }
  };

  const handleEdit = (index) => {
    const atendimento = atendimentos[index];
    setEditingIndex(index);
    setEditedLoja(atendimento.loja);
    setEditedCliente(atendimento.cliente);
    setEditedDescricao(atendimento.descricao);
    setEditedCategoria(atendimento.categoria);
    setEditedTelefone(atendimento.telefone);
    setEditedAnyDesk(atendimento.anyDesk);
    setEditedAtendente(atendimento.atendente);
  };

  const handleUpdate = async () => {
    const atendimentoToUpdate = {
      loja: editedLoja,
      cliente: editedCliente,
      categoria: editedCategoria,
      telefone: editedTelefone,
      anyDesk: editedAnyDesk,
      descricao: editedDescricao,
      atendente: editedAtendente,
      data: new Date(),
    };

    try {
      await saveAtendimento(atendimentoToUpdate);
      const updatedAtendimentos = [...atendimentos];
      updatedAtendimentos[editingIndex] = atendimentoToUpdate;
      setAtendimentos(updatedAtendimentos);
      setEditingIndex(null);
    } catch (error) {
      console.error("Erro ao salvar atendimento:", error);
    }
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
              <span>{atendimento.cliente}</span>
            </div>
            <div className="info-row">
              <strong>Atendente:</strong>
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
                  value={editedCliente}
                  onChange={(e) => setEditedCliente(e.target.value)}
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
