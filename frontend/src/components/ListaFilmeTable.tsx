import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { deleteFilmeThunk } from '../features/filmes/filmesSlice';

interface ListaFilmesComTabelaProps {
    onEdit: (id: number) => void;
}

const ListaFilmesComTabela: React.FC<ListaFilmesComTabelaProps> = ({ onEdit }) => {
    const dispatch = useDispatch<AppDispatch>();
    const filmes = useSelector((state: RootState) => state.filmes.filmes);
    const loading = useSelector((state: RootState) => state.filmes.loading);
    const error = useSelector((state: RootState) => state.filmes.error);

    const handleDelete = (id: number) => {
        dispatch(deleteFilmeThunk(id))
            .unwrap()
            .then(() => alert('Filme deletado com sucesso!'))
            .catch((err) => alert(`Erro ao deletar filme: ${err}`));
    };

    if (loading) {
        return <div className="text-center mt-4">Carregando filmes...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center mt-4">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">Gerenciar Filmes</h1>
            <table className="table table-striped">
                <thead className="bg-primary text-white">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Ano</th>
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
                                onClick={() => onEdit(filme.id)}
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
        </div>
    );
};

export default ListaFilmesComTabela;
