import React from 'react';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor\'s Degree, Computer Science',
            institution: 'American College of Technology',
            date: '2022-2025',
            description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices. Focused on full-stack development with emphasis on Python, Django, and React.'
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">
                    <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    Education
                </h2>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item fade-in-up">
                            <div className="card">
                                <h3 className="card-title">{edu.degree}</h3>
                                <p className="card-subtitle">{edu.institution}</p>
                                <p className="card-date">{edu.date}</p>
                                <p className="card-description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
