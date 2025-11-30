import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="section hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-name fade-in-up">Hi, Bacha Endale</h1>
                        <div className="hero-info fade-in-up">
                            <h2 className="hero-title">Fullstack Developer</h2>
                            <div className="hero-location">
                                <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                        <div className="open-to-work fade-in-up">
                            <span className="status-dot"></span>
                            Open to work
                        </div>
                    </div>
                    <div className="avatar-container fade-in-up">
                        <img src="/bacha.png" alt="Bacha Endale" className="avatar" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
