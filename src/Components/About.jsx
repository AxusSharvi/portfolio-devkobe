import {
    Palette,
    Code,
    Globe,
    Layers,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mission Statement */}
                <div className=" mb-16 md:mb-20 bg-[#2E9FB1] rounded-lg">
                    <h2 className="text-2xl text-white p-10 md:text-2xl lg:text-4xl text-gray-900 mb-6">
                        My mission is to assist startups and enterprises in creating an emotional bond between their products and satisfied, engaged customers.
                    </h2>
                    <p className="text-gray-600 max-w-full text-white px-10 pb-5 md:text-2xl">
                        Delivering comprehensive solutions that transform ideas into exceptional digital experiences
                    </p>
                </div>

                <div className='md:flex '>

                    {/* How Can I Assist You? */}
                    <div className="text-center md:text-left mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            How May I Assist You?
                        </h2>

                    </div>
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* UI Design */}
                        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                        <Palette className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-400">01</span>
                                            <h3 className="text-xl font-bold text-gray-900">UI Design</h3>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-gray-600 mb-6">
                                We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 group"
                            >
                                View UI Projects
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        {/* Development */}
                        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Code className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-400">02</span>
                                            <h3 className="text-xl font-bold text-gray-900">Development</h3>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-gray-600 mb-6">
                                Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group"
                            >
                                Explore Development Work
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        {/* Graphic Design */}
                        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-400">03</span>
                                            <h3 className="text-xl font-bold text-gray-900">Graphic Design</h3>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-gray-600 mb-6">
                                We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand's identity.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 group"
                            >
                                See Design Portfolio
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        {/* Branding */}
                        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                        <Layers className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-400">04</span>
                                            <h3 className="text-xl font-bold text-gray-900">Branding</h3>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-gray-600 mb-6">
                                We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 group"
                            >
                                View Branding Projects
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                    </div>
                </div>
                {/* CTA Section */}
                <div className="mt-16 md:mt-20 text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to bring your vision to life?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create something extraordinary that resonates with your audience and drives results.
                        </p>
                        <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 active:scale-95 transition-all duration-300">
                            Start a Project
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;