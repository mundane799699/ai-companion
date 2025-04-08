"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: isAnnual ? 9 : 12,
      features: [
        "Up to 5 projects",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Community access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: isAnnual ? 29 : 39,
      features: [
        "Unlimited projects",
        "100GB storage",
        "Advanced analytics",
        "Priority email support",
        "Team collaboration",
        "API access",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: isAnnual ? 99 : 129,
      features: [
        "Unlimited everything",
        "1TB storage",
        "Custom analytics",
        "24/7 phone & email support",
        "Advanced team management",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative bg-gray-100 p-1 rounded-lg flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`${
                !isAnnual ? "bg-white shadow-sm" : "bg-transparent"
              } relative py-2 px-6 rounded-md text-sm font-medium transition-all duration-200 ease-in-out`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`${
                isAnnual ? "bg-white shadow-sm" : "bg-transparent"
              } relative py-2 px-6 rounded-md text-sm font-medium transition-all duration-200 ease-in-out`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.popular
                  ? "border-2 border-indigo-500"
                  : "border border-gray-200"
              }`}
            >
              <div className="p-6">
                {plan.popular && (
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                    Most Popular
                  </span>
                )}
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-4 rounded-md text-center font-medium ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                  }`}
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
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="mt-2 text-base text-gray-500">
            Need a custom plan?{" "}
            <a
              href="#"
              className="text-indigo-600 font-medium hover:text-indigo-500"
            >
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
