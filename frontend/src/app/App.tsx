import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Sair from './Sair';
import FormFilme from '../components/FormFilme';
import ListaFilmesComTabela from '../components/ListaFilmeTable';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App: React.FC = () => {
    const [filmes, setFilmes] = useState<any[]>([]);

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

    const handleDeleteFilme = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/filmes/${id}`);
            setFilmes(filmes.filter((f) => f.id !== id));
        } catch (error) {
            console.error('Erro ao deletar filme:', error);
        }
    };

    const handleEditFilme = (id: number) => {
        // Lógica de edição pode ser ajustada aqui
        console.log('Editar filme:', id);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adicionar-filme" element={<FormFilme onSubmit={handleAddFilme} />} />
                <Route
                    path="/gerenciar-filmes"
                    element={
                        <ListaFilmesComTabela
                            filmes={filmes}
                            onEdit={handleEditFilme}
                            onDelete={handleDeleteFilme}
                        />
                    }
                />
                <Route path="/sobre" element={<About />} /> {/* Rota para Sobre */}
                <Route path="/sair" element={<Sair />} /> {/* Rota para Sair */}
            </Routes>
        </Router>
    );
};

export default App;
