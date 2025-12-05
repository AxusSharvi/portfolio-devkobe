import React from 'react';
import { Mail, MapPin, Calendar, ArrowRight, Linkedin, Github, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import profile from '../Images/profile.jpg'
function Hero() {
    return (
        <section className="min-w-[50%] bg-gradient-to-b from-white to-gray-50 py-12 md:py-24">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 p-4 items-center ">

                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            AVAILABLE FOR WORK
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-gray-900 leading-tight">
                                Hi, I'm a <span className="text-blue-600">Web Developer</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                                I have 3+ years of experience working on useful and mindful products together with university students and Instructores
                            </p>
                        </div>

                        {/* Contact Button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-300 font-medium text-lg">
                                Contact Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>


                    </div>

                    {/* Right Column - Brands & Image Placeholder */}
                    <div className="space-y-10 gap-4 sm:flex smm:flex-col md:flex items-center justify-center">
                        {/* Brands Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-2xl text-gray-900">devkobe</p>
                                    <p className="text-gray-600">Cebu, Philippines</p>
                                </div>
                            </div>
                            <p className="text-gray-600">Recent Projects</p>

                            {/* Brands Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { name: "EnerGreen", color: "bg-green-100 text-green-800" },
                                    { name: "LiBorrow", color: "bg-orange-100 text-orange-800" },
                                    { name: "SubDivi", color: "bg-blue-100 text-blue-800" },
                                    { name: "Finance", color: "bg-yellow-100 text-yellow-800" },

                                ].map((brand, index) => (
                                    <div
                                        key={index}
                                        className={`${brand.color} aspect-square rounded-2xl flex items-center justify-center p-4 text-center font-bold text-sm md:text-base transition-transform hover:scale-105`}
                                    >
                                        {brand.name}
                                    </div>
                                ))}
                            </div>
                            {/* Location & Contact Info */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row gap-6">


                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Web Developer</p>
                                            <p className="text-gray-600">UI/UX Expert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image/Illustration Placeholder */}
                        <div className='flex flex-col'>
                            <div className="relative">
                                <div>
                                    <img src={profile} alt="" className='h-100 w-105 rounded-lg' />
                                </div>

                            </div>

                            {/* Social Media Icons */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 w-full max-w-md">
                                    <h3 className="text-gray-700 font-medium mb-4 text-center lg:text-left">Connect with me</h3>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                                        {[
                                            { icon: Linkedin, color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white", label: "LinkedIn" },
                                            { icon: Github, color: "bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white", label: "GitHub", href: "https://github.com/AxusSharvi" },
                                            { icon: Instagram, color: "bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white", label: "Instagram" },
                                            { icon: Twitter, color: "bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white", label: "Twitter" },
                                            { icon: Facebook, color: "bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white", label: "Facebook" },
                                            { icon: Youtube, color: "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white", label: "YouTube" },
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href} // 1. Use the href here
                                                target="_blank"    // 2. Opens in new tab (recommended)
                                                rel="noopener noreferrer" // 3. Security best practice
                                                className={`${social.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative`}
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                <span className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {social.label}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "3+", label: "Years Experience(University))" },
                            { value: "10+", label: "Projects Completed" },
                            { value: "10+", label: "Happy Instructors" },
                            { value: "5+", label: "Awards Won(Dean's List)" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-gray-600 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;