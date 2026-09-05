import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Track Time or Add Line Items",
            description: "Hit start on the built-in timer, or just type what you did. Flowlog formats everything into clean, itemized lists automatically."
        },
        {
            number: "02",
            title: "Send in 5 Seconds",
            description: "Review your beautiful, brand-matched invoice. Click send, and we'll deliver it directly to your client's inbox with a secure payment link."
        },
        {
            number: "03",
            title: "Get Paid Autopiloted",
            description: "Clients click the link, pay via Stripe (Card, ACH, Apple Pay), and the money lands in your account. If they forget, we follow up for you."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        How it works
                    </h2>
                    <p className="text-lg text-slate-600">
                        We've stripped away everything you don't need, leaving a frictionless three-step process that gets you paid faster.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 -z-10 bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="w-20 h-20 rounded-full bg-surface border-4 border-background flex items-center justify-center shadow-lg shadow-primary/10 mb-6 text-2xl font-bold text-primary font-display relative z-10">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
