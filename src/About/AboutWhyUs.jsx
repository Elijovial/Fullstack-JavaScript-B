import React from "react";
import {
  FiPackage,
  FiShield,
  FiTag,
  FiGlobe,
  FiHeadphones,
  FiRefreshCw,
} from "react-icons/fi";

const REASONS = [
  {
    number: "01",
    icon: FiPackage,
    title: "High Quality Products",
    body: "Every item is checked against our own standard before it ever reaches the catalog.",
  },
  {
    number: "02",
    icon: FiShield,
    title: "Secure Checkout",
    body: "Payments are encrypted end to end, so you can buy with confidence every time.",
  },
  {
    number: "03",
    icon: FiTag,
    title: "Fair, Honest Pricing",
    body: "No inflated list prices or fake discounts — just the true cost, always.",
  },
  {
    number: "04",
    icon: FiGlobe,
    title: "Ships Worldwide",
    body: "From our warehouse to your door, wherever you are, with tracked delivery.",
  },
  {
    number: "05",
    icon: FiRefreshCw,
    title: "Easy Returns",
    body: "Changed your mind? Send it back within 30 days, no questions asked.",
  },
  {
    number: "06",
    icon: FiHeadphones,
    title: "Support That Answers",
    body: "Real people, real fast — our team responds within a few hours, every day.",
  },
];

export default function AboutWhyUs({ darkMode }) {
  return (
    <section
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-8`}
    >
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Why Choose Us
        </h2>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Everything about how we sell is built around trust — in the product,
          the price, and the process.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map(({ number, icon: Icon, title, body }) => (
          <div
            key={number}
            className="bg-white rounded-2xl border border-slate-100 p-8 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-3xl font-extrabold text-slate-100">
                {number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#0047FF]/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#0047FF]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
