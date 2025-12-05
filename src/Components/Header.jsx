import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header({ refs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleScroll = (section) => {
        refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-100">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Left - Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center group">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative font-bold text-white text-lg tracking-tighter">DK</span>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                                devkobe
                            </div>
                        </a>
                    </div>
                    {/* Center - Desktop Navigation (hidden on mobile) */}
                    <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
                        <div className="flex space-x-6 lg:space-x-8">
                            <a

                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll("hero");
                                }}
                                href="#"
                                className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                Home
                            </a>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll("about");
                                }} href="#"
                                className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                About
                            </a>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll("projects");
                                }}
                                href="#"
                                className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                Projects
                            </a>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll("contact");
                                }}
                                href="#"
                                className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                Contact
                            </a>
                        </div>
                    </nav>

                    {/* Right - Desktop Button (hidden on mobile) */}
                    <div className="hidden md:block">
                        <button className="cursor-pointer px-5 py-2.5 border border-gray-300 bg-gray-900 text-gray-200 font-medium rounded-full hover:text-gray-900 hover:bg-gray-100 hover:border-gray-200 active:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow">
                            Get in Touch
                        </button>
                    </div>

                    {/* Mobile menu button with smooth transitions */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all duration-300 active:scale-95"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            {/* Smooth icon transition */}
                            <div className="relative w-6 h-6">
                                <Menu
                                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                                        }`}
                                />
                                <X
                                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with smooth transition */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-3 space-y-1">
                    <a
                        href="#"
                        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 transform hover:translate-x-1"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("hero");
                            setIsMenuOpen(false);
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 transform hover:translate-x-1"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("about");
                            setIsMenuOpen(false);
                        }}

                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 transform hover:translate-x-1"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("projects");
                            setIsMenuOpen(false);
                        }}

                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 transform hover:translate-x-1"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("contact");
                            setIsMenuOpen(false);
                        }}
                    >
                        Contact
                    </a>
                    <div className="pt-4 pb-3 border-t border-gray-100">
                        <button
                            className="w-full px-4 py-3 border border-gray-300 text-gray-100 bg-gray-900 font-medium rounded-lg hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;