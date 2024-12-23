import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Filmes App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn btn-link nav-link" onClick={() => window.location.href = '/'}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link nav-link" onClick={() => window.location.href = '/'}>Sobre</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
