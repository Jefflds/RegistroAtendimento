import axios from "axios";

const apiUrl = "http://0.0.0.0:3000";

const api = axios.create({
  baseURL: apiUrl,
});

export const saveAtendimento = async (atendimento) => {
  try {
    const response = await api.post("/salvarAtendimento", atendimento);
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar atendimento:", error);
    throw error;
  }
};

export const getAtendimentos = async () => {
  try {
    const response = await api.get("/categorias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};

export const deleteAtendimento = async (id) => {
  try {
    const response = await api.delete(`/deletarAtendimento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir atendimento:", error);
    throw error;
  }
};
