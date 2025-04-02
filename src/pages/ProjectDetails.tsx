import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { Project } from '../types/project';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const project = id ? projectsData[id as keyof typeof projectsData] as Project : null;

    if (!project) {
        return <div className="container mx-auto px-4 py-8">Project not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button 
                onClick={() => navigate(-1)}
                className="mb-6 text-gray-600 hover:text-gray-800 flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
            </button>

            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>

            {project.status && (
                <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Status: {project.status}
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700">{project.fullDescription}</p>
            </div>

            {project.team && project.team.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Team</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.team.map((member, index) => (
                            <li key={index} className="text-gray-700">{member}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.collaborator && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Industry Collaborator</h2>
                    <p className="text-gray-700">{project.collaborator}</p>
                </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.impact && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Impact</h2>
                    <p className="text-gray-700">{project.impact}</p>
                </div>
            )}

            <div className="flex gap-4">
                {project.link && (
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        View Publication
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </a>
                )}
                
                <Link 
                    to="/contact" 
                    className="inline-flex items-center border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                    Collaborate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails; 