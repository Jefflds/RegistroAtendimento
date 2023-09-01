import { useState } from 'react';
import { saveAtendimento } from '../../utils/localStorage';
import * as AF from './AtendimentoForm.styles';



function AtendimentoForm() {
  const [loja, setLoja] = useState('');
  const [atendente, setAtendente] = useState('');
  const [categoria, setCategoria] = useState('Techsapp');
  const [telefone, setTelefone] = useState('');
  const [anyDesk, setAnyDesk] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const atendimento = {
      loja,
      atendente,
      categoria,
      telefone,
      anyDesk,
      descricao,
      data: new Date(),
    };
    saveAtendimento(atendimento);
    setLoja('');
    setAtendente('');
    setCategoria('Techsapp');
    setTelefone('');
    setAnyDesk('');
    setDescricao('');
    window.location.reload();
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
