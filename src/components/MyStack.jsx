import React from 'react';

const MyStack = () => {
    const stackCategories = [
        {
            category: 'Programming Languages',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            technologies: [
                {
                    name: 'JavaScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                },
                {
                    name: 'Python',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                },
                {
                    name: 'TypeScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                },
                {
                    name: 'C++',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
                }
            ]
        },
        {
            category: 'Frontend Development',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            technologies: [
                {
                    name: 'HTML5',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    name: 'CSS3',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                },
                {
                    name: 'JavaScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                },
                {
                    name: 'TypeScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                },
                {
                    name: 'React',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                },
                {
                    name: 'Next.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                },
                {
                    name: 'Vite',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
                },
                {
                    name: 'Django',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
                }
            ]
        },
        {
            category: 'Backend Development',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            ),
            technologies: [
                {
                    name: 'Node.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                },
                {
                    name: 'MongoDB',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                },
                {
                    name: 'MySQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                },
                {
                    name: 'PostgreSQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                },
                {
                    name: 'SQLite',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
                },
                {
                    name: 'Convex',
                    logo: 'https://cdn.simpleicons.org/convex/f97316'
                }
            ]
        },
        {
            category: 'Design & Tools',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            ),
            technologies: [
                {
                    name: 'Figma',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                },
                {
                    name: 'Git',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                },
                {
                    name: 'Docker',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                }
            ]
        }
    ];

    return (
        <section id="stack" className="section">
            <div className="container">
                <h2 className="section-title">
                    <svg className="section-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                    My Stack
                </h2>
                <div className="stack-content">
                    {stackCategories.map((category, catIndex) => (
                        <div key={catIndex} className="stack-category">
                            <h3 className="stack-category-title">
                                <span className="stack-category-icon">{category.icon}</span>
                                {category.category}
                            </h3>
                            <div className="stack-grid">
                                {category.technologies.map((tech, index) => (
                                    <div key={index} className="stack-badge">
                                        <img src={tech.logo} alt={tech.name} className="stack-logo" />
                                        <span className="stack-name">{tech.name}</span>
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

export default MyStack;
