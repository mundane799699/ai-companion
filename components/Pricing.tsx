"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: 1.99,
      features: [
        "Create unlimited AI characters (Einstein, Musk, Jobs, etc.)",
        "Customize AI personality, backstory and conversation style",
        "Long-term memory to remember chat history",
        "Custom AI avatars and detailed descriptions",
        "Unlimited conversations with no restrictions",
      ],
      cta: "Get Started",
    },
  ];

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200`}
            >
              <div className="p-6">
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-white">
                    /month
                  </span>
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-4 rounded-md text-center font-medium`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500 dark:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 dark:text-white">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
