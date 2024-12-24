import React, { useState } from 'react';

interface FormFilmeProps {
    onSubmit: (filme: { id?: number; title: string; genre: string; release_year: number }) => void;
    initialData?: {
        id?: number;
        title: string;
        genre: string;
        release_year: number;
    };
}

const FormFilme: React.FC<FormFilmeProps> = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [genre, setGenre] = useState(initialData?.genre || '');
    const [release_year, setReleaseYear] = useState(initialData?.release_year?.toString() || '');

    const resetForm = () => {
        setTitle('');
        setGenre('');
        setReleaseYear('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const filmeData = { id: initialData?.id, title, genre, release_year: parseInt(release_year) };
        onSubmit(filmeData);
        resetForm();
    };

    const handleCancel = () => {
        resetForm();
    };

    return (
        <div className="container mt-4">
            <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
                <div className={`card-header ${initialData ? 'bg-warning' : 'bg-primary'} text-white text-center`}>
                    <h3>{initialData ? 'Editar Filme' : 'Adicionar Filme'}</h3>
                </div>
                <div className="card-body">
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
                                value={release_year}
                                onChange={(e) => setReleaseYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">
                                {initialData ? 'Salvar Alterações' : 'Adicionar Filme'}
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormFilme;
