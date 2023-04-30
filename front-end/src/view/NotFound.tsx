import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl font-semibold text-gray-100">404</h1>
                <p className="text-xl text-gray-100 mt-4">Page non trouvée</p>
                <p className="text-gray-400 mt-2">
                    La page que vous recherchez n'existe pas.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white font-semibold px-6 py-3 mt-6 rounded-md"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
