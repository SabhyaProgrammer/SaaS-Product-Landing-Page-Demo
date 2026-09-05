import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card h-full flex flex-col justify-between hover:-translate-y-1 group">
            <div className="mb-8">
                <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                </p>
            </div>

            <div className="flex items-center gap-4 border-t border-border pt-4">
                <img
                    src={testimonial.avatarSrc}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/20 object-cover"
                />
                <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
