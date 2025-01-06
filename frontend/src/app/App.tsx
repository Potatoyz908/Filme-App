import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFilme, fetchFilmes } from '../features/filmes/filmesSlice';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Sair from './Sair';
import FormFilme from '../components/FormFilme';
import ListaFilmesComTabela from '../components/ListaFilmeTable';
import EditarFilme from '../components/EditarFilme';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppDispatch } from './store';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/filmes';

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [filmeParaEditar, setFilmeParaEditar] = useState<number | null>(null);

    useEffect(() => {
        dispatch(fetchFilmes());
    }, [dispatch]);

    const handleAddFilme = async (filme: { title: string; genre: string; release_year: number }) => {
        try {
            // Attempting to send a POST request to the API with the new movie data
            const response = await axios.post(`${API_URL}/add_filme`, filme);
            // Dispatching the added movie to the Redux store
            dispatch(addFilme(response.data));
            // Alerting the user about the successful addition of the movie
            alert('Filme adicionado com sucesso!');
        } catch (error: any) {
            // Handling errors in case the API call fails
            // Displaying a generic error message to the user
            alert('Erro ao adicionar filme.');
        }
    };

    const handleEdit = (id: number) => {
        setFilmeParaEditar(id);
    };

    const handleCloseEdit = () => {
        setFilmeParaEditar(null);
    };

    return (
            <Router>
                <Navbar />
                <div className=" mt-4">
                    {filmeParaEditar ? (
                            <EditarFilme filmeId={filmeParaEditar} onClose={handleCloseEdit} />
                    ) : (
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/adicionar-filme" element={<FormFilme onSubmit={handleAddFilme} />} />
                                <Route
                                        path="/gerenciar-filmes"
                                        element={<ListaFilmesComTabela onEdit={handleEdit} />}
                                />
                                <Route path="/sobre" element={<About />} />
                                <Route path="/sair" element={<Sair />} />
                            </Routes>
                    )}
                </div>
            </Router>
    );
};

export default App;
