import React, { useState, useEffect } from 'react';

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
        <div className="flex items-center justify-center min-h-[70vh]">
            <section className="hero text-center">
                <h1 className="text-4xl font-bold mb-2">{text}</h1>
                <p className="text-xl">Exploring how to design less frustrating interfaces</p>
            </section>
        </div>
    );
};

export default Home;
