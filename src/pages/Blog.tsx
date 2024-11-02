import React, { useState } from 'react';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    console.log('Email submitted:', email);
    setEmail('');
  };

  const blogTopics = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Cutting-edge research in computer science',
      description: 'Explore the latest advancements in CS research'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Practical programming tips and tricks',
      description: 'Learn useful coding techniques and best practices'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Insights into emerging technologies',
      description: 'Stay updated on the latest tech trends'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Personal experiences in academia and industry',
      description: 'Gain insights from real-world experiences'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="prose lg:prose-xl">
        <p>
          I'm thrilled to announce that I'll be sharing my thoughts, insights, and experiences here very soon.
          Stay tuned for articles covering a wide range of topics, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
          {blogTopics.map((topic, index) => (
            <div key={index} className="flex items-start p-4 bg-white rounded-lg border">
              {topic.icon}
              <div>
                <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
                <p className="mt-1 text-gray-600">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={`bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-lg ${isInputActive ? 'border-black' : 'border'} mb-8 transition-colors duration-300`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsInputActive(true)}
            onBlur={() => setIsInputActive(false)}
            placeholder="Your Email .."
            className="flex-grow p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Subscribe
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Blog;
