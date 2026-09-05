import React from 'react';

const PricingCard = ({ plan, isAnnual }) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

    return (
        <div className={`card relative flex flex-col h-full ${plan.isPopular
                ? 'border-primary ring-1 ring-primary shadow-glow scale-100 md:scale-105 z-10'
                : 'border-border scale-100 mt-4 md:mt-0'
            }`}>
            {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-bold uppercase tracking-wider text-white bg-primary px-3 py-1 rounded-full">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 h-10">{plan.tagline}</p>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold text-foreground">${price}</span>
                <span className="text-slate-500">/mo</span>
            </div>

            <div className="mb-8">
                <a
                    href="#"
                    className={`block w-full text-center py-3 px-4 rounded-full font-medium transition-all duration-300 ${plan.isPopular
                            ? 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-glow'
                            : 'bg-surface-alt text-foreground hover:bg-border'
                        }`}
                >
                    Get Started
                </a>
            </div>

            <div className="flex-1 flex flex-col gap-4">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Includes:</p>
                {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        {feature.included ? (
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
