import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sair: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simula uma ação de "logout" e redireciona após 3 segundos
        const timer = setTimeout(() => {
            // Redireciona para a página inicial ou login
            navigate('/');
        }, 3000);

        // Limpa o timer ao desmontar o componente
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="text-primary">Você está saindo...</h1>
                <p className="lead">Obrigado por usar o Filmes App!</p>
                <p>Você será redirecionado em breve.</p>
            </div>
        </div>
    );
};

export default Sair;
