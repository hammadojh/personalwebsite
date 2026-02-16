import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Consultation from './pages/Consultation';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import ProposalThiqal from './pages/ProposalThiqal';
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
                        <Route path="/consultation" element={<Consultation />} />
                        <Route path="/blog" element={<Navigate to="/consultation" replace />} />
                        <Route path="/proposal-thiqal" element={<ProposalThiqal />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
};

export default App;
