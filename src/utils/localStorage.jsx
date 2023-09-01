export const saveAtendimento = (atendimento) => {
  const existingAtendimentos =
    JSON.parse(localStorage.getItem("atendimentos")) || [];
  const updatedAtendimentos = [...existingAtendimentos, atendimento];
  localStorage.setItem("atendimentos", JSON.stringify(updatedAtendimentos));
  return updatedAtendimentos;
};

export const getAtendimentos = () => {
  return JSON.parse(localStorage.getItem("atendimentos")) || [];
};

export const deleteAtendimento = (index) => {
  const existingAtendimentos = getAtendimentos();
  existingAtendimentos.splice(index, 1);
  localStorage.setItem("atendimentos", JSON.stringify(existingAtendimentos));
};
