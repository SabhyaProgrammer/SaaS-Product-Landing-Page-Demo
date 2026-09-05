import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faqData';

const AccordionItem = ({ faq, isOpen, toggle }) => {
    return (
        <div className="border-b border-border last:border-0">
            <button
                className="w-full text-left py-6 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md group"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-6">
                    {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors relative">
                    <span className={`absolute bg-current w-0.5 h-full transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                    <span className="absolute bg-current h-0.5 w-full" />
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed pr-8">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about the product and billing.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-surface border border-border rounded-2xl shadow-sm p-4 md:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQAccordion;
