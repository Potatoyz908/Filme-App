import React from 'react';

const Sobre: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>Sobre o Filmes App</h2>
                        </div>
                        <div className="card-body">
                            <p className="lead text-justify">
                                O <strong>Filmes App</strong> é uma aplicação web desenvolvida para ajudar na
                                gestão de filmes. Ela foi projetada para fornecer uma interface simples e intuitiva
                                para gerenciar sua coleção de filmes, permitindo que você adicione, edite e exclua
                                informações de filmes de forma rápida e eficiente.
                            </p>
                            <p className="text-justify">
                                Com funcionalidades robustas e uma interface amigável, o Filmes App oferece:
                            </p>
                            <ul>
                                <li>Adicionar novos filmes à coleção;</li>
                                <li>Visualizar e gerenciar todos os filmes cadastrados;</li>
                                <li>Editar informações de filmes existentes;</li>
                                <li>Excluir filmes da coleção quando necessário.</li>
                            </ul>
                            <p className="text-justify">
                                Este projeto foi desenvolvido como uma solução prática para armazenar e organizar
                                informações sobre filmes, sendo ideal para cinéfilos, organizadores de eventos ou
                                qualquer pessoa que queira manter controle sobre sua lista de filmes.
                            </p>
                            <p className="text-center">
                                <em>"Gerencie seus filmes de maneira prática e eficiente com o Filmes App!"</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
