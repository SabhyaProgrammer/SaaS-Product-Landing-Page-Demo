import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../data/statsData';

const StatCounter = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const end = parseInt(value, 10);
            let startTime = null;

            const increment = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                // easing function: easeOutQuart
                const easeOut = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOut * end));

                if (progress < 1) {
                    window.requestAnimationFrame(increment);
                } else {
                    setCount(end);
                }
            };

            window.requestAnimationFrame(increment);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2 tracking-tight">
                {count}{typeof value === 'string' && value.includes('+') ? '+' : (value === 99 ? '%' : '+')}
            </div>
            <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">
                {label}
            </div>
        </div>
    );
};

const SocialProofStrip = () => {
    return (
        <section className="py-16 md:py-24 bg-surface-alt border-y border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {statsData.map((stat) => (
                        <StatCounter key={stat.id} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProofStrip;
