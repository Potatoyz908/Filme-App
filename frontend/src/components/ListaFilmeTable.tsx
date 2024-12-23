import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmes, deleteFilme as apiDeleteFilme } from '../features/filmes/filmesAPI';
import { setFilmes, deleteFilme } from '../features/filmes/filmesSlice';
import { RootState } from '../app/store';
import EditarFilme from './EditarFilme';

const ListaFilmesComTabela: React.FC = () => {
    const dispatch = useDispatch();
    const filmes = useSelector((state: RootState) => state.filmes.filmes);
    const [filmeParaEditar, setFilmeParaEditar] = useState<number | null>(null);

    // Carrega os filmes do backend
    useEffect(() => {
        const loadFilmes = async () => {
            const data = await fetchFilmes();
            dispatch(setFilmes(data));
        };
        loadFilmes();
    }, [dispatch]);

    // Função para excluir filmes
    const handleDelete = async (id: number) => {
        await apiDeleteFilme(id);
        dispatch(deleteFilme(id));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Gerenciar Filmes</h1>
            {filmeParaEditar !== null ? (
                <EditarFilme
                    filmeId={filmeParaEditar}
                    onClose={() => setFilmeParaEditar(null)}
                />
            ) : (
                <table className="table table-striped">
                    <thead className="bg-primary text-white">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Data de Lançamento</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filmes.map((filme) => (
                        <tr key={filme.id}>
                            <td>{filme.id}</td>
                            <td>{filme.title}</td>
                            <td>{filme.genre}</td>
                            <td>{filme.release_year}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-primary mr-2"
                                    onClick={() => setFilmeParaEditar(filme.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(filme.id)}
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListaFilmesComTabela;
