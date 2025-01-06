import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="container">
                <div className="row text-center">

                    <div className="col-md-4 mb-4">
                        <a href="/adicionar-filme">
                            <div className="card shadow">
                                <div className="card-body">
                                    <i className="fas fa-square-plus fa-3x text-primary"></i><br />
                                    <h4>Adicionar Filme</h4>

                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 mb-4">
                        <a href="/gerenciar-filmes">
                            <div className="card shadow">
                                <div className="card-body">
                                    <i className="fa-solid fa-list fa-3x"></i><br />
                                    <h4>Gerenciar Filmes</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 mb-4">
                        <a href="/sair">
                            <div className="card shadow">
                                <div className="card-body">
                                    <i className="fa-solid fa-right-from-bracket fa-3x text-danger"></i><br />
                                    <h4>Sair</h4>

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
