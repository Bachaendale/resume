import React from 'react';
import Dock from "@/components/ui/dock";
import { Home, User, Trophy, GraduationCap, Folder, Layers } from "lucide-react";

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { icon: Home, label: "Home", onClick: () => scrollToSection('home') },
        { icon: User, label: "About", onClick: () => scrollToSection('about') },
        { icon: Trophy, label: "Experience", onClick: () => scrollToSection('experience') },
        { icon: GraduationCap, label: "Education", onClick: () => scrollToSection('education') },
        { icon: Folder, label: "Projects", onClick: () => scrollToSection('projects') },
        { icon: Layers, label: "My Stack", onClick: () => scrollToSection('stack') },
    ];

    return (
        <div className="fixed top-3 left-0 right-0 z-50 pointer-events-none flex justify-center px-2 sm:top-6 sm:px-0">
            <Dock items={navItems} className="pointer-events-auto" />
        </div>
    );
};

export default Header;
