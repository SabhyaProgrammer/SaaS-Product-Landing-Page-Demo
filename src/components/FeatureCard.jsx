import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
    const Icon = feature.icon;

    return (
        <motion.div
            className={`card flex flex-col group hover:-translate-y-1 ${feature.featured ? 'md:col-span-2 md:flex-row items-center gap-8' : 'items-start gap-4'
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className={`rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${feature.featured ? 'w-16 h-16 md:w-32 md:h-32 mb-4 md:mb-0' : 'w-12 h-12 mb-2'
                }`}>
                <Icon size={feature.featured ? 48 : 24} strokeWidth={1.5} className={feature.featured ? 'hidden md:block' : ''} />
                <Icon size={24} strokeWidth={1.5} className={feature.featured ? 'block md:hidden' : 'hidden'} />
            </div>

            <div>
                <h3 className={`font-bold text-foreground mb-2 ${feature.featured ? 'text-2xl' : 'text-lg'
                    }`}>
                    {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
