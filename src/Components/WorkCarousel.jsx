import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Local imports
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';

const WorkCarousel = () => {
    // Group images into an array for easier handling
    const slides = [
        { 
            id: 1, 
            src: img1, 
            title: "Project Alpha", 
            category: "Web Development" 
        },
        { 
            id: 2, 
            src: img2, 
            title: "Beta Dashboard", 
            category: "UI/UX Design" 
        },
        { 
            id: 3, 
            src: img3, 
            title: "Gamma App", 
            category: "Mobile" 
        },
        { 
            id: 4, 
            src: img4, 
            title: "Delta Systems", 
            category: "IoT Solution" 
        },
        { 
            id: 5, 
            src: img5, 
            title: "Epsilon Core", 
            category: "AI Integration" 
        },
    ];

    const [curr, setCurr] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    // Auto-slide functionality
    useEffect(() => {
        if (!autoPlay) return;
        const slideInterval = setInterval(next, 5000); // Change every 5 seconds
        return () => clearInterval(slideInterval);
    }, [curr, autoPlay]);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="md:w-[60%] bg-gray-50 mt-10 flex justify-between items-center">
            
            {/* Carousel Container */}
            <div 
                className="relative w-full max-w-4xl mx-auto group px-4 md:px-0"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
            >
                {/* Main Image Frame */}
                <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-900 aspect-video relative border border-gray-200/50">
                    
                    {/* The Sliding Track */}
                    <div 
                        className="flex transition-transform ease-out duration-700 h-full" 
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div key={slide.id} className="min-w-full h-full relative">
                                <img 
                                    src={slide.src} 
                                    alt={slide.title} 
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" 
                                />
                                
                                {/* Overlay Gradient (Makes text readable) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-green-400 text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {slide.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {slide.title}
                                    </h3>
                                    <button className="mt-4 w-fit flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        View Case Study <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Button */}
                <button 
                    onClick={prev} 
                    className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 z-10 hidden md:block"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Button */}
                <button 
                    onClick={next} 
                    className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 z-10 hidden md:block"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Bottom Dots Indicator */}
                <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
                    {slides.map((_, i) => (
                        <div 
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`
                                transition-all duration-300 cursor-pointer rounded-full
                                ${curr === i ? "w-8 h-2 bg-green-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}
                            `}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WorkCarousel;