import React, { useState } from 'react'
import { Send, Mail as MailIcon, User, MessageSquare, Phone, Sparkles } from 'lucide-react'

function Mail() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <section id="contact" className="py-20 md:py-32 mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px] opacity-20"></div>
            </div>

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Heading & Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-orange-300">Let's Connect</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400">
                                Contact with me
                            </span>
                            <br />
                            <span className="text-white">
                                to sizzle your
                            </span>
                            <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400">
                                    project
                                </span>
                                <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-yellow-300 animate-spin-slow" />
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-12 max-w-lg">
                            Let's collaborate to create something extraordinary. Share your vision, and let's bring it to life together.
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                                        <MailIcon className="w-6 h-6 text-orange-300" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Email</div>
                                        <a 
                                            href="mailto:hello@example.com" 
                                            className="text-lg font-medium text-white hover:text-orange-300 transition-colors"
                                        >
                                            hello@example.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-blue-300" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Phone</div>
                                        <a 
                                            href="tel:+1234567890" 
                                            className="text-lg font-medium text-white hover:text-blue-300 transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-6">
                            {[
                                { value: "24h", label: "Response Time" },
                                { value: "50+", label: "Projects" },
                                { value: "100%", label: "Satisfaction" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        {/* Success Message */}
                        {isSubmitted && (
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-gray-300">I'll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        )}

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <User className="w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                            Your Name
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MailIcon className="w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                            Email Address
                                        </label>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Phone className="w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                                            Phone (Optional)
                                        </label>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-white/5 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                                        placeholder="+1 (234) 567-890"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MessageSquare className="w-4 h-4 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                            Your Message
                                        </label>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-5 py-4 bg-white/5 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none"
                                        placeholder="Tell me about your project, timeline, and goals..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full group relative overflow-hidden rounded-xl px-8 py-5 font-semibold transition-all duration-300 ${
                                        isSubmitting 
                                            ? 'bg-gray-600 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 hover:shadow-lg hover:shadow-orange-500/30'
                                    }`}
                                >
                                    <div className="relative flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span className="text-white">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-white">Submit Message</span>
                                                <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </div>
                                    
                                    {/* Button hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </button>

                                {/* Privacy Note */}
                                <p className="text-center text-sm text-gray-400 pt-4">
                                    Your information is secure. I'll never share your details with anyone.
                                </p>
                            </form>
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl rotate-12 blur-sm"></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-sm"></div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <div className="text-center mb-8">
                        <p className="text-gray-400 text-sm font-medium">TRUSTED BY INNOVATIVE TEAMS</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                        {['devkobe'].map((company) => (
                            <div key={company} className="text-gray-400 text-lg font-medium hover:text-gray-300 transition-colors">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS for animation */}
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    )
}

export default Mail