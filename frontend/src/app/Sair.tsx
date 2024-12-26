import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sair: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

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
