import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center space-x-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 rounded-lg">
      <Link to="/research" className="text-black hover:bg-gray-200 transition duration-300 ease-in-out transform rounded-md p-2">Research</Link>
      <Link to="/blog" className="text-black hover:bg-gray-200 transition duration-300 ease-in-out transform rounded-md p-2">Blog</Link>
      <Link to="/contact" className="bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out transform rounded-md p-2">Get in touch</Link>
    </nav>
  );
};

export default Navigation;
