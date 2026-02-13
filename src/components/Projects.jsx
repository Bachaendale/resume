import React from 'react';

const Projects = () => {
    const techLogos = {
        'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        'Django REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'Convex': 'https://cdn.simpleicons.org/convex/f97316'
    };

    const projects = [
        {
            title: 'Smart Sales System',
            period: '2023 - Present',
            description: 'Full-stack sales platform engineered with Django and React for streamlined operations.',
            technologies: ['Django', 'React', 'PostgreSQL']
        },
        {
            title: 'Dairy Company Management System',
            period: '2023',
            description: 'Developed a custom business solution using Django REST Framework and React for streamlined operations.',
            technologies: ['Django REST', 'React', 'MySQL']
        },
        {
            title: 'Website for Justice Constructions',
            period: '2025',
            description: 'Built a modern business website for Justice Constructions with a fast React JS frontend and Convex-powered backend workflows.',
            technologies: ['React JS', 'Convex']
        },
        {
            title: 'Fitness Company Frontend',
            period: '2023',
            description: 'Collaborated on a React-based frontend, creating responsive components for a fitness application.',
            technologies: ['React', 'CSS', 'JavaScript']
        },
        {
            title: 'Portfolio Websites',
            period: '2022 - Present',
            description: 'Built and optimized responsive portfolio websites using HTML, CSS, and JavaScript.',
            technologies: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">
                    <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Projects
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card fade-in-up">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-date">{project.period}</p>
                            <p className="card-description">{project.description}</p>
                            <div className="project-tech-list">
                                {project.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="project-tech-badge">
                                        {techLogos[tech] ? (
                                            <img src={techLogos[tech]} alt={tech} className="project-tech-logo" />
                                        ) : (
                                            <span className="project-tech-fallback">{tech.charAt(0)}</span>
                                        )}
                                        <span className="project-tech-name">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
