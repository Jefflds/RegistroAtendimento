import { useState } from "react";
import { saveAtendimento } from "../../utils/StorageConnection";
import * as AF from "./AtendimentoForm.styles";

function AtendimentoForm() {
  const [loja, setLoja] = useState("");
  const [cliente, setCliente] = useState("");
  const [categoria, setCategoria] = useState("Techsapp");
  const [telefone, setTelefone] = useState("");
  const [anyDesk, setAnyDesk] = useState("");
  const [descricao, setDescricao] = useState("");
  const [atendente, setAtendente] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atendimento = {
      loja,
      cliente,
      categoria,
      telefone,
      anyDesk,
      descricao,
      atendente,
      data: new Date(),
    };

    try {
      await saveAtendimento(atendimento);
      setLoja("");
      setCliente("");
      setCategoria("Techsapp");
      setTelefone("");
      setAnyDesk("");
      setDescricao("");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao salvar atendimento:", error);
    }
  };

  return (
    <AF.FormWrapper>
      <h2>Registrar Atendimento</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Loja"
          value={loja}
          onChange={(e) => setLoja(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quem Atendeu?"
          value={atendente}
          onChange={(e) => setAtendente(e.target.value)}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Techsapp">Techsapp</option>
          <option value="Lifix">Lifix</option>
          <option value="Governança">Governança</option>
          <option value="Kuiper">Kuiper</option>
          <option value="A7">A7</option>
          <option value="SevenShop">SevenShop</option>
          <option value="Comercial">Comercial</option>
          <option value="Financeiro">Financeiro</option>
        </select>
        <input
          type="text"
          placeholder="Número de Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número do AnyDesk"
          value={anyDesk}
          onChange={(e) => setAnyDesk(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </AF.FormWrapper>
  );
}

export default AtendimentoForm;
