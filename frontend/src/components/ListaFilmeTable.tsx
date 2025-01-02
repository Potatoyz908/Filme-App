import React, { useState } from 'react';
import EditarFilme from './EditarFilme';

interface Filme {
    id: number;
    title: string;
    genre: string;
    release_year: number;
}

interface ListaFilmesComTabelaProps {
    filmes: Filme[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => Promise<void>;
}

const ListaFilmesComTabela: React.FC<ListaFilmesComTabelaProps> = ({ filmes, onEdit, onDelete }) => {
    const [filmeParaEditar, setFilmeParaEditar] = useState<number | null>(null);

    const handleEdit = (id: number) => {
        setFilmeParaEditar(id);
        onEdit(id);
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
                                    onClick={() => handleEdit(filme.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => onDelete(filme.id)}
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
