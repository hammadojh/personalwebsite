import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto px-4 py-2 flex flex-row justify-between items-center gap-4">
                <Link to="/" className="text-xl sm:text-2xl font-bold text-black hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 rounded-md p-1.5 sm:p-2 flex-shrink-0">OH</Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
