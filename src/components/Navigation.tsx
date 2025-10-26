import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 sm:gap-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-2 sm:p-4 rounded-lg">
      <Link to="/projects" className="text-black hover:bg-gray-200 transition duration-300 ease-in-out transform rounded-md p-1.5 sm:p-2 text-sm sm:text-base">Research</Link>
      <Link to="/consultation" className="text-black hover:bg-gray-200 transition duration-300 ease-in-out transform rounded-md p-1.5 sm:p-2 text-sm sm:text-base">Consultation</Link>
      <Link to="/contact" className="bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out transform rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base">Get in touch</Link>
    </nav>
  );
};

export default Navigation;
