import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FormFilme from '../components/FormFilme';
import ListaFilmesComTabela from "../components/ListaFilmeTable";

const App: React.FC = () => {
    const [filmes, setFilmes] = useState<any[]>([]);
    const [editingFilme, setEditingFilme] = useState<any | null>(null);

    const fetchFilmes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/filmes/listar_filmes');
            setFilmes(response.data);
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
        }
    };

    useEffect(() => {
        fetchFilmes();
    }, []);

    const handleAddFilme = async (filme: { title: string; genre: string; release_year: number }) => {
        try {
            const response = await axios.post('http://localhost:8080/filmes/add_filme', filme);
            setFilmes([...filmes, response.data]);
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
        }
    };

    const handleSaveFilme = async (updatedFilme: { id: number; title: string; genre: string; release_year: number }) => {
        try {
            await axios.put(`http://localhost:8080/filmes/${updatedFilme.id}`, updatedFilme);
            setFilmes(filmes.map((f) => (f.id === updatedFilme.id ? updatedFilme : f)));
            setEditingFilme(null);
        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
        }
    };

    const handleDeleteFilme = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/filmes/${id}`);
            setFilmes(filmes.filter((f) => f.id !== id));
        } catch (error) {
            console.error('Erro ao deletar filme:', error);
        }
    };

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
                        onSubmit={(updatedFilme) => handleSaveFilme(updatedFilme as { id: number; title: string; genre: string; release_year: number })}
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
