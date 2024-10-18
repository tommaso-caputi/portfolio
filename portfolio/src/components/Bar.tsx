"use client";

import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Bar() {
    const [barWidth, setBarWidth] = useState(0);
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = () => {
        setBarWidth((prevWidth) => prevWidth + 25);
    };

    const handleMouseLeave = () => {
        setBarWidth((prevWidth) => Math.max(prevWidth - 25, 0));
    };

    const handleIconMouseEnter = (icon: any) => {
        setHoveredIcon(icon);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div
                className={`bg-white p-2 rounded-full border z-50 pointer-events-auto relative mx-auto 
                            flex min-h-full h-full items-center px-1 bg-background justify-around
                            [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
                            transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] 
                            transition-all duration-200 ease-in-out`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ width: `${250 + barWidth}px` }}
            >
                {/* Home Icon */}
                <div
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 transition-all duration-300 relative"
                    style={{ width: "40px", height: "40px" }}
                    onMouseEnter={() => handleIconMouseEnter('home')}
                    onMouseLeave={handleIconMouseLeave}
                >
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium 
                                   transition-colors focus-visible:outline-none focus-visible:ring-1 
                                   focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
                                   hover:bg-accent hover:text-accent-foreground rounded-full size-12"
                        data-state="closed"
                        href="/"
                    >
                        <FiHome size="18" />

                    </a>
                    {hoveredIcon === 'home' && popover('Home')}
                </div>
                {/* Blog Icon */}
                <div
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 transition-all duration-300 relative"
                    style={{ width: "40px", height: "40px" }}
                    onMouseEnter={() => handleIconMouseEnter('blog')}
                    onMouseLeave={handleIconMouseLeave}
                >
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
                        data-state="closed"
                        href="/blog"
                    >
                        <SlNotebook size="18" />
                    </a>
                    {hoveredIcon === 'blog' && popover('Blog')}
                </div>
                <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] h-full bg-slate-300"></div>
                {/* Github Icon */}
                <div
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 transition-all duration-300 relative"
                    style={{ width: "40px", height: "40px" }}
                    onMouseEnter={() => handleIconMouseEnter('github')}
                    onMouseLeave={handleIconMouseLeave}
                >
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
                        data-state="closed"
                        href="https://github.com/tommaso-caputi"
                    >
                        <FaGithub size={18} />
                    </a>
                    {hoveredIcon === 'github' && popover('GitHub')}
                </div>
                {/* Linkedin Icon */}
                <div
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 transition-all duration-300 relative"
                    style={{ width: "40px", height: "40px" }}
                    onMouseEnter={() => handleIconMouseEnter('linkedin')}
                    onMouseLeave={handleIconMouseLeave}
                >
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
                        data-state="closed"
                        href="https://linkedin.it/in/tommaso-caputi"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    {hoveredIcon === 'linkedin' && popover('Linkedin')}
                </div>
                {/* Mail Icon */}
                <div
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 transition-all duration-300 relative"
                    style={{ width: "40px", height: "40px" }}
                    onMouseEnter={() => handleIconMouseEnter('mail')}
                    onMouseLeave={handleIconMouseLeave}
                >
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
                        data-state="closed"
                        href="mailto:tommasocaputi85@gmail.com"
                    >
                        <IoIosMail size={24} />
                    </a>
                    {hoveredIcon === 'mail' && popover('Mail')}
                </div>
            </div>
        </div>
    );
}

function popover(name: string) {
    return (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                        p-1.5 rounded shadow-lg text-white bg-black text-sm">
            {name}
        </div>
    );
}