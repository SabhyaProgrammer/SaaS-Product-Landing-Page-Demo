import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/heroData';
import ProductMockup from './ProductMockup';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] -z-10" />
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-300/10 blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 backdrop-blur-sm"
                    >
                        Flowlog 2.0 is now live
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        {heroData.headline}
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        {heroData.subheadline}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        <a href="#pricing" className="btn-primary w-full sm:w-auto text-center text-lg px-8 py-4">
                            {heroData.primaryCTA}
                        </a>
                        <a href="#how-it-works" className="btn-secondary w-full sm:w-auto text-center text-lg px-8 py-4">
                            {heroData.secondaryCTA}
                        </a>
                    </motion.div>
                </div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="relative max-w-5xl mx-auto"
                >
                    <ProductMockup />

                    {/* Decorative elements around mockup */}
                    <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>
                        ✨
                    </div>
                    <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 text-4xl animate-bounce" style={{ animationDuration: '4s' }}>
                        💸
                    </div>
                </motion.div>

                {/* Trust indicator */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">
                        {heroData.trustIndicator}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
                        {/* Generic placeholder logos */}
                        <div className="h-8 w-24 bg-slate-300 rounded-md"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded-md clip-path-polygon"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded-md rounded-full"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded-md transform -skew-x-12"></div>
                        <div className="h-8 w-24 bg-slate-300 rounded-md hidden md:block"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
