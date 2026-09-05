import React from 'react';

const ProductMockup = () => {
    return (
        <div className="rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-xl p-2 md:p-4 shadow-2xl overflow-hidden relative">
            <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm flex flex-col h-[300px] md:h-[600px]">
                {/* Fake Browser Top Bar */}
                <div className="bg-surface-alt border-b border-border h-10 md:h-12 flex items-center px-4 gap-2 flex-shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto bg-white rounded-md h-6 w-1/2 md:w-1/3 border border-border flex items-center justify-center">
                        <div className="w-32 h-2 bg-slate-200 rounded-sm"></div>
                    </div>
                </div>

                {/* Fake App Layout */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 md:w-48 border-r border-border bg-slate-50 flex flex-col pt-6 px-3 flex-shrink-0">
                        <div className="h-6 w-10 md:w-24 bg-slate-200 rounded-md mb-8"></div>
                        <div className="flex flex-col gap-3">
                            <div className="h-8 w-full bg-primary/10 rounded-md flex items-center px-2 border border-primary/20">
                                <div className="w-4 h-4 rounded-sm bg-primary/80 mr-2"></div>
                                <div className="hidden md:block h-2.5 w-16 bg-primary/60 rounded-sm"></div>
                            </div>
                            <div className="h-8 w-full bg-transparent hover:bg-slate-200 rounded-md flex items-center px-2">
                                <div className="w-4 h-4 rounded-sm bg-slate-300 mr-2"></div>
                                <div className="hidden md:block h-2.5 w-20 bg-slate-300 rounded-sm"></div>
                            </div>
                            <div className="h-8 w-full bg-transparent hover:bg-slate-200 rounded-md flex items-center px-2">
                                <div className="w-4 h-4 rounded-sm bg-slate-300 mr-2"></div>
                                <div className="hidden md:block h-2.5 w-14 bg-slate-300 rounded-sm"></div>
                            </div>
                        </div>

                        <div className="mt-auto mb-4 flex items-center px-2">
                            <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                            <div className="hidden md:block ml-2 w-20 h-3 bg-slate-300 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-white p-4 md:p-8 overflow-hidden flex flex-col gap-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="w-24 md:w-32 h-4 md:h-6 bg-slate-200 rounded-md mb-2"></div>
                                <div className="w-32 md:w-48 h-8 md:h-10 bg-slate-800 rounded-md"></div>
                            </div>
                            <div className="w-24 h-8 md:h-10 bg-primary/90 rounded-lg"></div>
                        </div>

                        {/* Chart Area */}
                        <div className="h-32 md:h-48 border border-border rounded-xl bg-slate-50 flex items-end p-4 md:p-6 gap-2 md:gap-4 relative overflow-hidden">
                            {/* Grid lines */}
                            <div className="absolute top-0 bottom-0 left-0 right-0 border-y border-dashed border-slate-200 opacity-50 flex flex-col justify-between">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            {/* Bars */}
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[40%] relative hover:bg-primary/50 transition-colors cursor-pointer"></div>
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[65%] relative hover:bg-primary/50 transition-colors cursor-pointer"></div>
                            <div className="w-1/6 md:flex-1 bg-primary/20 border-t-2 border-primary rounded-t-md h-[85%] relative hover:bg-primary/50 transition-colors cursor-pointer flex justify-center">
                                <div className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-md hidden md:block">$4,200</div>
                            </div>
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[30%] relative hover:bg-primary/50 transition-colors cursor-pointer"></div>
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[50%] relative hover:bg-primary/50 transition-colors cursor-pointer"></div>
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[95%] relative hover:bg-primary/50 transition-colors cursor-pointer hidden md:block"></div>
                            <div className="w-1/6 md:flex-1 bg-slate-200 rounded-t-md h-[70%] relative hover:bg-primary/50 transition-colors cursor-pointer hidden lg:block"></div>
                        </div>

                        {/* Recent Invoices List */}
                        <div className="flex-1 flex flex-col gap-3 md:gap-4">
                            <div className="w-32 h-4 md:h-5 bg-slate-200 rounded-md"></div>

                            <div className="flex-1 border border-border rounded-xl bg-white overflow-hidden flex flex-col">
                                <div className="h-10 bg-slate-50 border-b border-border flex items-center px-4 md:px-6 gap-4">
                                    <div className="w-4 h-4 rounded-sm bg-slate-200"></div>
                                    <div className="hidden md:block w-32 h-3 bg-slate-200 rounded-sm"></div>
                                </div>

                                {/* Rows */}
                                <div className="h-12 border-b border-border flex items-center px-4 md:px-6 gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="w-4 h-4 rounded-sm border border-slate-300"></div>
                                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
                                        <div className="w-24 h-3.5 bg-slate-700 md:bg-slate-800 rounded-sm"></div>
                                        <div className="w-16 h-4 bg-green-100 border border-green-200 rounded-full flex items-center justify-center">
                                            <div className="w-10 h-2 bg-green-500 rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-12 border-b border-border flex items-center px-4 md:px-6 gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="w-4 h-4 rounded-sm border border-slate-300"></div>
                                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
                                        <div className="w-32 h-3.5 bg-slate-700 md:bg-slate-800 rounded-sm"></div>
                                        <div className="w-16 h-4 bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center">
                                            <div className="w-8 h-2 bg-amber-500 rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-12 flex items-center px-4 md:px-6 gap-4 hover:bg-slate-50 transition-colors hidden md:flex">
                                    <div className="w-4 h-4 rounded-sm border border-slate-300"></div>
                                    <div className="flex-1 flex items-center justify-between">
                                        <div className="w-20 h-3.5 bg-slate-800 rounded-sm"></div>
                                        <div className="w-16 h-4 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center">
                                            <div className="w-6 h-2 bg-slate-400 rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductMockup;
