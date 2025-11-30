import React from 'react';
import { Github, Mail, FileText } from 'lucide-react';

const Footer = () => {
    const links = [
        { icon: Github, href: "https://github.com/Bachaendale", label: "GitHub" },
        { icon: Mail, href: "mailto:asebacha5@gmail.com", label: "Email" },
        { icon: FileText, href: "/resume.png", label: "Resume", download: true }
    ];

    return (
        <footer className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 p-2 rounded-full border border-white/10 bg-[#0a0a0f]/90 backdrop-blur-md shadow-xl ring-1 ring-white/5">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        aria-label={link.label}
                    >
                        <link.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
