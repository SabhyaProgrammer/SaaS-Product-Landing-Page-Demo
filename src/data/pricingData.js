export const pricingData = [
    {
        id: "starter",
        name: "Starter",
        monthlyPrice: 12,
        annualPrice: 9,
        tagline: "Perfect for part-time freelancers just starting out.",
        isPopular: false,
        features: [
            { label: "Up to 5 active clients", included: true },
            { label: "Unlimited time tracking", included: true },
            { label: "Standard invoice templates", included: true },
            { label: "Automated reminders", included: false },
            { label: "Stripe integration", included: false },
            { label: "Tax reporting", included: false }
        ]
    },
    {
        id: "professional",
        name: "Professional",
        monthlyPrice: 24,
        annualPrice: 19,
        tagline: "Everything you need to run a full-time freelance business.",
        isPopular: true,
        features: [
            { label: "Unlimited active clients", included: true },
            { label: "Unlimited time tracking", included: true },
            { label: "Premium invoice templates", included: true },
            { label: "Automated reminders", included: true },
            { label: "Stripe integration", included: true },
            { label: "Tax reporting", included: false }
        ]
    },
    {
        id: "business",
        name: "Business",
        monthlyPrice: 39,
        annualPrice: 29,
        tagline: "Advanced tools for growing agencies and studios.",
        isPopular: false,
        features: [
            { label: "Unlimited active clients", included: true },
            { label: "Unlimited time tracking", included: true },
            { label: "Premium invoice templates", included: true },
            { label: "Automated reminders", included: true },
            { label: "Stripe integration", included: true },
            { label: "Tax reporting", included: true }
        ]
    }
];
