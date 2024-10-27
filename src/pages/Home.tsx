import React, { useState, useEffect } from 'react';

const projects = [
    {
        title: "PureConnect",
        description: "A localized social media system designed to increase awareness and connectedness in environmental justice communities.",
        link: "https://dl.acm.org/doi/10.1145/3544548.3581160"
    },
    {
        title: "Impact of Work from Home",
        description: "Investigating the effects of remote work on productivity, work-life balance, and digital tool usage to improve the work-from-home experience.",
        link: "https://dl.acm.org/doi/10.1145/3491102.3517542"
    },
    {
        title: "Impact of Cultural Differences",
        description: "Exploring how cultural backgrounds influence user interactions with digital interfaces and developing culturally sensitive design principles.",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580891"
    }
];

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
                <p className="text-xl">Exploring how humans interact with tech</p>
            </section>

            <section className="intro mb-8">
                <h3 className="text-2xl font-semibold mb-4">Specifically..</h3>
                <p>
                    I'm an assistant professor in KFUPM, specializing in <span className="font-semibold">Human-Computer Interaction</span>.
                    My work focuses on <span className="font-semibold">understanding</span> how people <span className="font-semibold">interact</span> with <span className="font-semibold">digital products</span>, analyzing their <span className="font-semibold">behaviors</span>, <span className="font-semibold">pain points</span>, and <span className="font-semibold">needs</span>. By leveraging these insights, I aim to design more <span className="font-semibold">usable</span>, <span className="font-semibold">intuitive</span>, and <span className="font-semibold">less frustrating</span> digital interfaces. This research contributes to creating products that enhance <span className="font-semibold">user experience</span>, improve <span className="font-semibold">efficiency</span>, and ultimately lead to more <span className="font-semibold">satisfying interactions</span> between humans and technology.
                </p>
            </section>

            <section className="projects mb-8">
                <h3 className="text-2xl font-semibold mb-4">For instance..</h3>
                <p className="mb-4">I've worked on several projects that aim to make digital products more usable and less frustrating.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={index}
                            className="p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex flex-col h-full"
                            onClick={() => window.open(project.link, '_blank')}>
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
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
