export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    link?: string;
    category: string;
    status?: string;
    technologies: string[];
    keyFeatures: string[];
    team?: string[];
    collaborator?: string;
    impact: string;
}

export interface ProjectWithId extends Project {
    id: string;
} 