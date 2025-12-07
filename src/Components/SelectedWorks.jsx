import EnerGreen from '../Images/EnerGreen.png'

function SelectedWorks() {
    return (
        <section id="about" className="md:w-[50%] bg-gray-50 ">
            <div className="w-full mt-10 items-start md:flex mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:w-md md:mr-3 md:flex-row justify-between items-end mb-12">
                    <div className="">
                        <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
                            Portfolio
                        </span>
                        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Selected Work
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Showcasing innovative solutions in IoT and Artificial Intelligence.
                        </p>
                    </div>
                    {/* Optional: 'View All' link could go here */}
                </div>

                {/* Grid Container (Prepped for more items in the future) */}
                <div className="">
                    
                    {/* Project Card */}
                    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        
                        {/* Image Container with Zoom Effect */}
                        <div className="relative h-64 overflow-hidden bg-gray-100">
                            <div className="absolute inset-0 bg-gray-900/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                                src={EnerGreen} 
                                alt="EnerGreen Dashboard" 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                            />
                            
                            {/* Floating Badge on Image */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-800 shadow-sm border border-white/50">
                                    Featured
                                </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="flex flex-col flex-grow p-6">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-md border border-green-100">
                                    IoT
                                </span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                                    AI
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                EnerGreen Monitoring System
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                An AI-powered and IoT-based solution designed to track, analyze, and optimize energy consumption in real-time.
                            </p>

                            {/* Footer / Action Button */}
                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                <a 
                                    href="https://energreen-ai-powered-iot-based.web.app/" 
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                                >
                                    Visit Site
                                    {/* Arrow Icon that moves on hover */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>

                                {/* Live Status */}
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-xs font-medium text-gray-600">Live Demo</span>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default SelectedWorks