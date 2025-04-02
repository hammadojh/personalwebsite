import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import featuredData from '../data/featured.json';
import { ProjectWithId } from '../types/project';

const projects = featuredData.featured.map(id => ({
    id,
    ...projectsData[id as keyof typeof projectsData]
})) as ProjectWithId[];

const Home: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = "Omar J. Hammad";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(intervalId);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="hero mb-8">
                <h1 className="text-4xl font-bold mb-2">{text}</h1>
                <p className="text-xl">Exploring how to design less frustrating interfaces</p>
            </section>

            <section className="intro mb-8">
                <h3 className="text-2xl font-semibold mb-4">Specifically..</h3>
                <p>
                    I'm an assistant professor in <a href="https://kfupm.edu.sa">KFUPM</a>, specializing in <span className="font-semibold">Human-Computer Interaction</span>.
                    My work focuses on <span className="font-semibold">understanding</span> how people <span className="font-semibold">interact</span> with <span className="font-semibold">digital products</span> by analyzing their <span className="font-semibold">behaviors</span>, <span className="font-semibold">pain points</span>, and <span className="font-semibold">needs</span>. By understanding these, I aim to design more <span className="font-semibold">usable</span>, <span className="font-semibold">intuitive</span>, and <span className="font-semibold">less frustrating</span> digital interfaces.
                </p>
            </section>

            <section className="projects mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">Featured Research</h3>
                    <Link to="/projects" className="text-gray-600 hover:text-black">
                        View all projects →
                    </Link>
                </div>
                <p className="mb-4">I've worked on several projects that aim to make digital products more usable and less frustrating.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div key={project.id}
                            className="p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex flex-col h-full">
                            <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
                                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                                <p className="mb-4 flex-grow">{project.description}</p>
                                <div className="flex justify-start">
                                    <span className="text-gray-600 hover:text-gray-800 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Read more
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
