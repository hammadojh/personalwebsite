import React from 'react';

const Consultation: React.FC = () => {
  const services = [
    {
      title: 'UX Research and Analysis',
      description: 'User research, interviews, and usability testing to uncover pain points.',
    },
    {
      title: 'Interface Design',
      description: 'Design user-centered interfaces based on research principles.',
    },
    {
      title: 'Usability Evaluation',
      description: 'Heuristic evaluations and audits to identify issues.',
    },
    {
      title: 'UX Strategy',
      description: 'Strategic guidance and workshops to build UX capabilities.',
    },
  ];

  const clients = [
    { name: 'Mrsool', href: 'https://mrsool.co' },
    { name: 'Drahim', href: 'https://drahim.com' },
    { name: 'Sweater', href: 'https://sweater.sa' },
    { name: 'Walaplus', href: 'https://walaplus.com' },
    { name: 'Chaizer', href: 'https://chaizer.com' },
    { name: 'Circlys', href: 'https://circlys.com' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">UX Consultation</h1>
        <p className="text-lg">
          I help design digital products that are usable, accessible, and frustration-free.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trusted by</h2>
        <div className="flex flex-wrap gap-3">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
            >
              {client.name}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Consultation;
