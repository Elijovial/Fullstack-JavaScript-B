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
<<<<<<< HEAD
    <section
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#fff8e7] text-black"
      } p-8`}
    >
      <div className="max-w-6xl mx-auto text-center mt-10">
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            darkMode ? "bg-gray-900 text-slated-100" : " text-blue-900"
          }`}
        >
          Why Choose Us
        </h2>
        <p className="mt-6 mb-6 text-slate-500 max-w-xl mx-auto">
=======
    <section className="bg-[#fff8e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Why Choose Us
        </h2>
        <p className="mt-4 text-blue-900 max-w-xl mx-auto">
>>>>>>> d99b16c696e4f573802c8e6c38ba733a9cdaa040
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
              <span className="text-3xl font-extrabold text-slate-200">
                {number}
              </span>
<<<<<<< HEAD
              <div className="w-12 h-12 rounded-xl bg-[#0047FF]/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#638df8]" />
=======
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#D4AF37]" />
>>>>>>> d99b16c696e4f573802c8e6c38ba733a9cdaa040
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
