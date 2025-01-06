import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/filmes';

export const fetchFilmes = async () => {
    const response = await axios.get(`${API_URL}/listar_filmes`);
    return response.data;
}

export const createFilme = async (filme: { title: string; genre: string; release_year: number }) => {
    const response = await axios.post(`${API_URL}/add_filme`, filme);
    return response.data;
};

export const updateFilme = async (id: number, filme: { title: string; genre: string; release_year: number }) => {
    const response = await axios.put(`${API_URL}/${id}`, filme);
    return response.data;
};

export const deleteFilme = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
