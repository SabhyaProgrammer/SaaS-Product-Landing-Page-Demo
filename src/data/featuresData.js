import { Timer, FileText, Zap, CreditCard, Bell, PieChart } from 'lucide-react';

export const featuresData = [
    {
        id: 1,
        icon: Timer,
        title: "One-Click Time Tracking",
        description: "No more guessing how long a task took. Click once to start, again to stop, and instantly map time directly to client projects.",
        featured: false
    },
    {
        id: 2,
        icon: FileText,
        title: "Beautiful, Smart Invoices",
        description: "Look like the premium professional you are. Generate stunning, customizable invoices in 5 seconds that clients actually want to pay.",
        featured: true
    },
    {
        id: 3,
        icon: Zap,
        title: "Automated Follow-ups",
        description: "Never send an awkward 'just checking in' email again. Flowlog gently reminds clients when an invoice is due, or past due.",
        featured: false
    },
    {
        id: 4,
        icon: CreditCard,
        title: "Frictionless Payments",
        description: "Get paid twice as fast. Accept credit cards, Apple Pay, and ACH directly on your invoice via a seamless Stripe integration.",
        featured: true
    },
    {
        id: 5,
        icon: Bell,
        title: "Read Receipts for Invoices",
        description: "Know exactly when a client views your invoice. Say goodbye to the 'I didn't see your email' excuse forever.",
        featured: false
    },
    {
        id: 6,
        icon: PieChart,
        title: "Tax-Ready Reporting",
        description: "Instantly see your most profitable projects and clients. Export clean CSVs for your accountant at tax time with zero manual math.",
        featured: false
    }
];
