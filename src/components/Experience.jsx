import React from 'react';

const Experience = () => {
    const achievements = [
        "Engineered a full-stack Smart Sales System with Django & React.",
        "Developed a custom Dairy Management System using Django REST.",
        "Built responsive React frontend for a modern fitness application."
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">
                    <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    Key Achievements
                </h2>
                <div className="timeline">
                    <div className="timeline-item fade-in-up">
                        <div className="card">
                            <h3 className="card-title">Project Highlights</h3>
                            <p className="card-subtitle">2023 - Present</p>
                            <ul className="achievement-list" style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                {achievements.map((item, index) => (
                                    <li key={index} style={{
                                        position: 'relative',
                                        paddingLeft: '1.5rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: '1.6'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--color-accent-primary)',
                                            fontWeight: 'bold'
                                        }}>▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
