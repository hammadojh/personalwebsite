import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Blog from './pages/Blog';
import './App.css';

const App: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <Router>
            <div style={{ cursor: 'none' }}>
                <div
                    style={{
                        position: 'fixed',
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 9999,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
};

export default App;
