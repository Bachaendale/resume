import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">
                    <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    About Me
                </h2>
                <div className="about-content">
                    <p className="about-text">
                        Computer Science graduate from the American College of Technology with expertise in Python, Django, and React.
                        I specialize in building full-stack applications that are functional, user-friendly, and maintainable.
                    </p>
                    <p className="about-text">
                        I thrive in collaborative environments where clean code and best practices are valued.
                        Always eager to learn new technologies and contribute to team success while growing as a developer.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
