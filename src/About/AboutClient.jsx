"use client";

import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiUsers,
  FiMessageCircle,
  FiSmile,
  FiMessageSquare,
} from "react-icons/fi";
import { BsQuote } from "react-icons/bs";
import marveImg from "../assets/clients/marve.jpeg";
import michaelImg from "../assets/clients/michael.jpg";
import sundayImg from "../assets/clients/sunday.jpg";
import diriImg from "../assets/clients/diri.jpg";
import miramImg from "../assets/clients/miram.jpg";
const TESTIMONIALS = [
  {
    quote:
      "The team went out of their way to help us get set up. Every question was answered quickly and clearly.",
    name: "Marvelous J",
    role: "CEO",
    image: marveImg,
  },
  {
    quote:
      "Ordering was simple and the product matched exactly what was described. That's rarer than it should be.",
    name: "Michael O",
    role: "Manager",
    image: michaelImg,
  },
  {
    quote:
      "Shipping was fast and support answered a follow-up question the same day. Easy to recommend.",
    name: "Sunday Ozua",
    role: "Software Engineer",
    image: sundayImg,
  },
  {
    quote:
      "Pricing was transparent from the start and there were no surprise fees at checkout.",
    name: "Mr Diri",
    role: "Operations Lead",
    image: diriImg,
  },
  {
    quote:
      "We switched providers mid-project and the onboarding team made the transition painless.",
    name: "Miss Miram",
    role: "Product Owner",
    image: miramImg,
  },
];

const STATS = [
  { icon: FiUsers, value: "5,400+", label: "Happy Customers" },
  { icon: FiMessageCircle, value: "1,250+", label: "Good Reviews" },
  { icon: FiSmile, value: "4,250+", label: "Winning Customers" },
  { icon: FiMessageSquare, value: "500+", label: "New Comments" },
];

// Cycles through a list, exposing the current window + prev/next/jump controls.
function useCarousel(items, visibleCount = 3) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const visible = Array.from(
    { length: visibleCount },
    (_, i) => items[(index + i) % total],
  );

  return {
    index,
    visible,
    prev: () => setIndex((i) => (i - 1 + total) % total),
    next: () => setIndex((i) => (i + 1) % total),
    jump: setIndex,
  };
}

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

function TestimonialCard({ t }) {
  return (
    <>
      {/* Flip mechanics: perspective on the outer wrapper, preserve-3d + rotateY on hover
          for the inner card, backface-hidden on both faces so they don't bleed through. */}
      <style>{`
        .flip-card { perspective: 1200px; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="flip-card h-72">
        <div className="flip-card-inner">
          {/* FRONT */}
          <div className="flip-card-face flex flex-col justify-between h-full bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
            <div>
              <div className="w-11 h-11 rounded-full bg-blue-900 text-white text-sm font-semibold flex items-center justify-center mb-5">
                {initials(t.name)}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {t.quote}
              </p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
              <BsQuote className="text-blue-900 w-6 h-6 opacity-80" />
            </div>
          </div>

          {/* BACK */}
          <div className="flip-card-face flip-card-back rounded-2xl overflow-hidden shadow-sm">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/80">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavButton({ dir, onClick }) {
  const Icon = dir === "prev" ? FiArrowLeft : FiArrowRight;
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      className={`flex items-center justify-center absolute ${dir === "prev" ? "-left-2 md:-left-5" : "-right-2 md:-right-5"} top-[40%] md:top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-400 hover:text-[#0047FF] hover:border-[#0047FF] active:scale-95 transition-all z-10`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

export default function AboutClient() {
  const { index, visible, prev, next, jump } = useCarousel(TESTIMONIALS, 3);

  return (
    <section className="bg-[#fff8e7] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-blue-900" />
          <FiArrowRight className="text-blue-900 rotate-180 w-4 h-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            What Client Say
          </h2>
          <FiArrowRight className="text-blue-900 w-4 h-4" />
          <span className="h-px w-10 bg-blue-900" />
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">
          Explore the world's best and largest catalog of considered goods. We
          want to be part of your everyday, from first order to the next.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => jump(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-blue-900" : "bg-white/70"}`}
            />
          ))}
        </div>

        <NavButton dir="prev" onClick={prev} />
        <NavButton dir="next" onClick={next} />
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-[#fff8e7]" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-none">
                {value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
