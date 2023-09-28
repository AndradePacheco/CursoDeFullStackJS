import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
    return(
        <div>
            <p>Página não encontrada!</p>
            <Link to="/">Voltar à página Inicial</Link>
        </div>
    )
}

export default NotFoundScreen;