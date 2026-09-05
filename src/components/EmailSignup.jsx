import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    // Placeholder function for future backend integration
    const submitEmailSignup = async (e) => {
        e.preventDefault();
        if (!email) {
            setStatus('error');
            setErrorMsg('Email is required');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setStatus('error');
            setErrorMsg('Please enter a valid email address');
            return;
        }

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <form onSubmit={submitEmailSignup} className="relative w-full max-w-md mx-auto">
            {status === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 text-green-100 border border-green-500/30 rounded-xl p-4 text-center"
                >
                    <div className="font-bold mb-1 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thanks for subscribing!
                    </div>
                    <div className="text-sm">Check your inbox to confirm.</div>
                </motion.div>
            ) : (
                <div className="flex border border-white/20 bg-white/10 rounded-full p-1.5 backdrop-blur-md focus-within:ring-2 focus-within:ring-white/50 focus-within:bg-white/15 transition-all w-full shadow-2xl">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-transparent border-none text-white placeholder:text-white/60 px-4 focus:outline-none w-full min-w-0"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                        }}
                        disabled={status === 'loading'}
                        aria-label="Email address for newsletter"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-white text-primary font-bold px-6 py-2.5 rounded-full hover:bg-slate-100 transition-colors flex-shrink-0 flex items-center gap-2"
                    >
                        {status === 'loading' ? (
                            <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : "Join Waitlist"}
                    </button>
                </div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-0 right-0 text-red-300 text-sm font-medium text-center"
                >
                    {errorMsg}
                </motion.div>
            )}
        </form>
    );
};

export default EmailSignup;
