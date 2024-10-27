import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="text-black hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 rounded-md p-2">OH</Link>
                </h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
