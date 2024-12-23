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
        <div>
            <h2>Editar Filme</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Gênero"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Ano de Lançamento"
                    value={releaseYear}
                    onChange={e => setReleaseYear(e.target.value)}
                />
                <button type="submit">Salvar Alterações</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditarFilme;
