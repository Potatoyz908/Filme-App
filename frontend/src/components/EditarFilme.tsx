import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmeById, updateFilmeThunk } from '../features/filmes/filmesSlice';
import { RootState, AppDispatch } from '../app/store';

interface EditarFilmeProps {
    filmeId: number;
    onClose: () => void;
}

const EditarFilme: React.FC<EditarFilmeProps> = ({ filmeId, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
    const filme = useSelector((state: RootState) =>
        state.filmes.filmes.find(f => f.id === filmeId)
    );
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const error = useSelector((state: RootState) => state.filmes.error);

    useEffect(() => {
        if (!filme) {
            dispatch(fetchFilmeById(filmeId));
        } else {
            setTitle(filme.title);
            setGenre(filme.genre);
            setReleaseYear(filme.release_year.toString());
        }
    }, [dispatch, filme, filmeId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedFilme = { id: filmeId, title, genre, release_year: parseInt(releaseYear) };
        dispatch(updateFilmeThunk({ id: filmeId, updatedFilme }));
        onClose();
    };

    return (
        <div className="container mt-4">
            <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
                <div className="card-header bg-primary text-white text-center">
                    <h3>Editar Filme</h3>
                </div>
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Título</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Gênero</label>
                            <input
                                type="text"
                                className="form-control"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Ano de Lançamento</label>
                            <input
                                type="number"
                                className="form-control"
                                value={releaseYear}
                                onChange={(e) => setReleaseYear(e.target.value)}
                                required
                                min="1"
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">
                                Salvar Alterações
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditarFilme;
