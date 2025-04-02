import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { ProjectWithId } from '../types/project';

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const projects = Object.entries(projectsData).map(([id, project]) => ({
        id,
        ...project
    })) as ProjectWithId[];

    const categoryTitles = {
        'research': 'Published Research',
        'ongoing-research': 'Ongoing Research',
        'course': 'Course Projects'
    };

    const filteredProjects = selectedCategory 
        ? projects.filter(project => project.category === selectedCategory)
        : projects;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">All Projects</h1>

            <div className="flex gap-2 mb-12">
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedCategory === null 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>
                {Object.entries(categoryTitles).map(([category, title]) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${selectedCategory === category 
                                ? 'bg-black text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {title}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                    <div key={project.id}
                        className="p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex flex-col h-full">
                        <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
                            <div className="mb-2">
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                                    {categoryTitles[project.category as keyof typeof categoryTitles]}
                                </span>
                                {project.status && (
                                    <span className="ml-2 bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                                        {project.status}
                                    </span>
                                )}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="mb-4 flex-grow">{project.description}</p>
                            <div className="flex justify-start">
                                <span className="text-gray-600 hover:text-black inline-flex items-center">
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
        </div>
    );
};

export default Projects; 