import React from 'react';
import { motion } from 'framer-motion';
import EmailSignup from './EmailSignup';

const FinalCTA = () => {
    return (
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-white/10 blur-[100px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-black/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight leading-tight">
                        Stop doing admin. <br className="hidden md:block" />
                        Start doing the work you love.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Join 2,500+ freelancers who have reclaimed their time and accelerated their cash flow with Flowlog.
                    </p>

                    <div className="flex justify-center mb-16">
                        <a href="#pricing" className="bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:bg-slate-50 transition-colors shadow-2xl hover:scale-105 active:scale-95 duration-300">
                            Start your 14-day free trial
                        </a>
                    </div>

                    <div className="border-t border-white/20 pt-16">
                        <h3 className="text-xl font-bold mb-6 text-white">Not ready to dive in? Join the newsletter.</h3>
                        <EmailSignup />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
