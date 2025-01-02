import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilme as apiUpdateFilme, fetchFilmes } from '../features/filmes/filmesAPI';
import { updateFilme } from '../features/filmes/filmesSlice';

interface EditarFilmeProps {
    filmeId: number;
    onClose: () => void;
}

const EditarFilme: React.FC<EditarFilmeProps> = ({ filmeId, onClose }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFilmes().then(filmes => {
            const filme = filmes.find((f: any) => f.id === filmeId);
            if (filme) {
                setTitle(filme.title);
                setGenre(filme.genre);
                setReleaseYear(filme.release_year.toString());
            }
        });
    }, [filmeId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedFilme = { title, genre, release_year: parseInt(releaseYear) };
        const response = await apiUpdateFilme(filmeId, updatedFilme);
        dispatch(updateFilme(response));
        onClose();
    };

    return (
        <div className="container mt-4">
            <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
                <div className="card-header bg-primary text-white text-center">
                    <h3>Editar Filme</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Título</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Gênero</label>
                            <input
                                type="text"
                                className="form-control"
                                value={genre}
                                onChange={e => setGenre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Ano de Lançamento</label>
                            <input
                                type="number"
                                className="form-control"
                                value={releaseYear}
                                onChange={e => setReleaseYear(e.target.value)}
                                required
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
