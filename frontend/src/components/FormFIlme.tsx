import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilme } from '../features/filmes/filmesSlice';
import { createFilme } from '../features/filmes/filmesAPI';

const FormFilme: React.FC = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const novoFilme = await createFilme({ title, genre, release_year: parseInt(releaseYear) });
        dispatch(addFilme(novoFilme));
        setTitle('');
        setGenre('');
        setReleaseYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Gênero" value={genre} onChange={e => setGenre(e.target.value)} />
            <input type="number" placeholder="Ano de Lançamento" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
            <button type="submit">Adicionar Filme</button>
        </form>
    );
};

export default FormFilme;
