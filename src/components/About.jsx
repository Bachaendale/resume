import React from 'react';

const About = () => {
    const focusAreas = ['Full-Stack Web Apps', 'Clean Architecture', 'Team Collaboration', 'Continuous Learning'];

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
                    <article className="about-panel">
                        <p className="about-lead">
                            Computer Science graduate from the American College of Technology, focused on building reliable full-stack products.
                        </p>
                        <p className="about-text">
                            I work mainly with Python, Django, and React to create applications that are maintainable, user-friendly, and built for real business needs.
                            I do my best work in collaborative teams where clean code, ownership, and steady improvement are expected.
                        </p>
                        <div className="about-tags">
                            {focusAreas.map((area) => (
                                <span key={area} className="about-tag">{area}</span>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;
