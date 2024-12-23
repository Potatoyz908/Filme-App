import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FormFilme from '../components/FormFilme';
import ListaFilmesComTabela from "../components/ListaFilmeTable";

const App: React.FC = () => {
    const [filmes, setFilmes] = useState<any[]>([]);
    const [editingFilme, setEditingFilme] = useState<any | null>(null);

    // Função para buscar filmes do backend
    const fetchFilmes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/filmes/listar_filmes');
            setFilmes(response.data);
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
        }
    };

    // Carregar os filmes ao montar o componente
    useEffect(() => {
        fetchFilmes();
    }, []);

    // Adiciona um novo filme
    const handleAddFilme = async (filme: { title: string; genre: string; release_year: number }) => {
        try {
            const response = await axios.post('http://localhost:8080/filmes/add_filme', filme);
            setFilmes([...filmes, response.data]); // Atualiza a lista com o novo filme
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
        }
    };

    // Atualiza um filme existente
    const handleSaveFilme = async (updatedFilme: { id: number; title: string; genre: string; release_year: number }) => {
        try {
            await axios.put(`http://localhost:8080/filmes/${updatedFilme.id}`, updatedFilme);
            setFilmes(filmes.map((f) => (f.id === updatedFilme.id ? updatedFilme : f)));
            setEditingFilme(null); // Sai do modo de edição
        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
        }
    };

    // Deleta um filme
    const handleDeleteFilme = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/filmes/${id}`);
            setFilmes(filmes.filter((f) => f.id !== id)); // Remove o filme localmente
        } catch (error) {
            console.error('Erro ao deletar filme:', error);
        }
    };

    // Entra no modo de edição
    const handleEditFilme = (id: number) => {
        const filme = filmes.find((f) => f.id === id);
        setEditingFilme(filme);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                {editingFilme ? (
                    <FormFilme
                        initialData={editingFilme}
                        onSubmit={(updatedFilme) => handleSaveFilme(updatedFilme)}
                    />
                ) : (
                    <>
                        <FormFilme onSubmit={(novoFilme) => handleAddFilme(novoFilme)} />
                        <ListaFilmesComTabela
                            filmes={filmes}
                            onEdit={handleEditFilme}
                            onDelete={handleDeleteFilme}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
