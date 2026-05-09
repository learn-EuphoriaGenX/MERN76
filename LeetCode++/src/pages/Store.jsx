import React, { useState } from 'react';
import Button from '../components/common/Button';
import { Check, Star, Zap } from 'lucide-react';

function Store() {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

    const plans = [
        {
            id: 1,
            name: "Free",
            price: 0,
            period: "/forever",
            description: "Perfect for getting started",
            features: [
                "Basic problem solving",
                "Community access",
                "5 submissions per day",
                "Basic analytics",
            ],
            buttonText: "Current Plan",
            popular: false,
            disabled: true,
        },
        {
            id: 2,
            name: "Pro",
            price: billingCycle === 'monthly' ? 12 : 99,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Best for serious coders",
            features: [
                "Unlimited submissions",
                "Advanced problem sets",
                "AI hints & explanations",
                "Contest participation",
                "Detailed performance analytics",
                "Ad-free experience",
            ],
            buttonText: "Upgrade to Pro",
            popular: true,
            disabled: false,
        },
        {
            id: 3,
            name: "Premium",
            price: billingCycle === 'monthly' ? 29 : 249,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "For competitive programmers",
            features: [
                "Everything in Pro",
                "Private 1:1 mentoring",
                "Early access to new features",
                "Mock interviews",
                "Certificate of completion",
                "Priority support",
            ],
            buttonText: "Go Premium",
            popular: false,
            disabled: false,
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Header */}
                <div className="flex flex-col  md:flex-row md:items-end xl:items-center justify-center gap-6 mb-12 ">
                    <div>
                        <h1 className="text-4xl font-bold text-center text-orange-400">Premium</h1>
                        <p className="text-gray-400 mt-2">Get started with a LeetCode Subscription that works for you.</p>
                    </div>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-10" id='premium'>
                    <div className="bg-[#1f1f1f] rounded-2xl p-1 flex">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${billingCycle === 'monthly'
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${billingCycle === 'yearly'
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Yearly
                            <span className="text-emerald-400 text-xs font-bold">SAVE 30%</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-[#1f1f1f] border rounded-3xl p-8 transition-all hover:-translate-y-2 ${plan.popular
                                ? 'border-orange-500 shadow-2xl shadow-orange-500/20'
                                : 'border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-6 py-1.5 rounded-full flex items-center gap-1">
                                    <Star size={16} />
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                                <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>

                                <div className="mt-6">
                                    <span className="text-5xl font-bold">
                                        {plan.price === 0 ? 'Free' : `$${plan.price}`}
                                    </span>
                                    <span className="text-gray-400">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="text-emerald-400 mt-0.5" size={20} />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-4 text-lg font-semibold rounded-2xl ${plan.popular
                                    ? 'bg-orange-500 hover:bg-orange-600 text-black'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                disabled={plan.disabled}
                            >
                                {plan.buttonText}
                            </Button>

                            {plan.id === 2 && (
                                <p className="text-center text-emerald-400 text-sm mt-4">
                                    7 days free trial
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Merchandise Section */}
                <div className="mt-20" id='merchandise'>
                    <h2 className="text-2xl font-semibold mb-8">Merchandise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-4 hover:border-orange-500/30 transition group">
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center">
                                    <Zap size={48} className="text-orange-400 group-hover:scale-110 transition" />
                                </div>
                                <h4 className="font-medium">Premium Hoodie</h4>
                                <p className="text-orange-400 font-semibold mt-1">$49.99</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Store;