import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingData } from '../data/pricingData';
import PricingCard from './PricingCard';

const PricingTiers = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="py-20 md:py-32 bg-surface-alt">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        No surprise fees or complicated tier structures. Pay for what you need.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center p-1 bg-slate-200/60 rounded-full border border-slate-300/50">
                        <button
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white text-foreground shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                }`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-white text-foreground shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                }`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Annually <span className="text-primary text-xs ml-1 font-bold">-20%</span>
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {pricingData.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="h-full"
                        >
                            <PricingCard plan={plan} isAnnual={isAnnual} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTiers;
