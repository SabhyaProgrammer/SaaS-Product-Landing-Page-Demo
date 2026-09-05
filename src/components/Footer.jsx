import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-foreground text-slate-300 py-12 md:py-16 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl">
                                F
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-white">
                                Flowlog
                            </span>
                        </a>
                        <p className="text-slate-400 text-sm max-w-xs mt-2">
                            Lightweight invoicing and time-tracking designed specifically for modern freelancers.
                        </p>
                        <div className="flex gap-4 mt-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white" aria-label="Twitter">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white mb-2">Product</h4>
                        <a href="#features" className="text-sm hover:text-white transition-colors">Features</a>
                        <a href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Changelog</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Integrations</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white mb-2">Resources</h4>
                        <a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Blog</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Help Center</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Community</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-white mb-2">Legal</h4>
                        <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Flowlog Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Powered by simplicity.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
