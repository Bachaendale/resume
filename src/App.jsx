import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import MyStack from './components/MyStack';

import Footer from './components/Footer';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Projects />
                <MyStack />
            </main>
            <Footer />
        </div>
    );
}

export default App;
