import React from 'react';
import { Github, Mail, FileText } from 'lucide-react';

const Footer = () => {
    const links = [
        { icon: Github, href: "https://github.com/Bachaendale", label: "GitHub" },
        { icon: Mail, href: "mailto:asebacha5@gmail.com", label: "Email" },
        { icon: FileText, href: "/resume.png", label: "Resume", download: true }
    ];

    return (
        <footer className="fixed bottom-3 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:bottom-6 sm:px-0">
            <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/15 bg-[#090f1c]/80 p-1.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-[#090f1c]/65 sm:gap-3 sm:p-2">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                        aria-label={link.label}
                    >
                        <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
