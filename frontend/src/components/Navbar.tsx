import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="fa-solid fa-film"></i> Filmes App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-house"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adicionar-filme">
                                <i className="fa-solid fa-square-plus"></i> Adicionar Filme
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gerenciar-filmes">
                                <i className="fa-solid fa-list"></i> Gerenciar Filmes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">
                                <i className="fa-solid fa-circle-info"></i> Sobre
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
