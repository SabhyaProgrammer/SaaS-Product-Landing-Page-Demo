import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../data/featuresData';
import FeatureCard from './FeatureCard';

const FeatureGrid = () => {
    return (
        <section id="features" className="py-20 md:py-32 bg-surface-alt">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="max-w-2xl mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Everything you need. <br className="hidden md:block" />
                        <span className="text-primary">Nothing you don't.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Built purposefully for independent creators and consultants who want to spend their time working, not doing admin.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
