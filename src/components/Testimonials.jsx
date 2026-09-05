import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/testimonialsData';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Loved by independent professionals.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Don't just take our word for it. Here's what freelancers are saying about Flowlog.
                    </p>
                </motion.div>

                {/* Desktop Grid / Mobile Scroll */}
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
