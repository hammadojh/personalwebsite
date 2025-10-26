import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center gap-3">
          <p className="text-xs sm:text-sm text-gray-500 flex-shrink-0 m-0 leading-none">&copy; {new Date().getFullYear()} OH. All rights reserved.</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="https://x.com/hammadojh" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="https://www.linkedin.com/in/ohammad/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
            <a href="https://github.com/hammadojh" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
