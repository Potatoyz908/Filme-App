import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmes, deleteFilme as apiDeleteFilme } from '../features/filmes/filmesAPI';
import { setFilmes, deleteFilme } from '../features/filmes/filmesSlice';
import { RootState } from '../app/store';
import EditarFilme from './EditarFilme';

const ListaFilmes: React.FC = () => {
    const dispatch = useDispatch();
    const filmes = useSelector((state: RootState) => state.filmes.filmes);
    const [filmeParaEditar, setFilmeParaEditar] = useState<number | null>(null);

    useEffect(() => {
        fetchFilmes().then(data => dispatch(setFilmes(data)));
    }, [dispatch]);

    const handleDelete = async (id: number) => {
        await apiDeleteFilme(id);
        dispatch(deleteFilme(id));
    };

    return (
        <div>
            <h1>Lista de Filmes</h1>
            <ul>
                {filmes.map(filme => (
                    <li key={filme.id}>
                        {filme.title} ({filme.release_year}) - {filme.genre}
                        <button onClick={() => setFilmeParaEditar(filme.id)}>Editar</button>
                        <button onClick={() => handleDelete(filme.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
            {filmeParaEditar !== null && (
                <EditarFilme
                    filmeId={filmeParaEditar}
                    onClose={() => setFilmeParaEditar(null)}
                />
            )}
        </div>
    );
};

export default ListaFilmes;
