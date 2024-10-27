import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('omarjh@kfupm.edu.sa');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const contactLinks = [
    {
      name: 'Email',
      url: 'mailto:omarjh@kfupm.edu.sa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      description: 'Send me an email',
      onClick: handleEmailClick
    },
    {
      name: 'Twitter',
      url: 'https://x.com/hammadojh',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
      ),
      description: 'Follow me on Twitter'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ohammad/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      ),
      description: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hammadojh',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      ),
      description: 'Check out my projects'
    }
    // ,
    // {
    //   name: 'Snapchat',
    //   url: 'https://www.snapchat.com/add/hammadojh',
    //   icon: (

    //   ),
    //   description: 'Add me on Snapchat'
    // }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-4">I'm always open to collaboration and new opportunities. Feel free to reach out if you'd like to discuss research, projects, or just have a chat about HCI and digital product design.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {contactLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 pb-1 border rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex flex-col justify-between h-full relative" onClick={link.onClick}>
            <div className="mb-2">
              {link.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">{link.name}</h4>
              <p className="text-gray-600">{link.description}</p>
            </div>
            {link.name === 'Email' && emailCopied && (
              <div className="absolute bg-black text-white px-2 py-1 rounded-lg flex items-center right-4 top-4">
                Email copied!
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
