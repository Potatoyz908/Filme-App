import React from 'react';
import FormFilme from "../components/FormFIlme";
import ListaFilmes from "../components/ListaFIlmes";

const App: React.FC = () => {
    return (
        <div>
            <FormFilme />
            <ListaFilmes />
        </div>
    );
};

export default App;
