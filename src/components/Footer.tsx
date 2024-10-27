import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/research" className="text-gray-600 hover:text-gray-900">Research</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </nav>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} OH. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://x.com/hammadojh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="https://www.linkedin.com/in/ohammad/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
            <a href="https://github.com/hammadojh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
