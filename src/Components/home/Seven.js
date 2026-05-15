"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "The team delivered an amazing SaaS platform with modern UI and smooth performance.",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Their developers integrated AI automation into our workflow perfectly.",
  },
  {
    name: "Emily Davis",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    review:
      "Excellent communication, clean code and scalable development process.",
  },
  {
    name: "Daniel Smith",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      "Professional team with strong technical knowledge and smooth delivery.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 380;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
              Testimonials
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl">
              What our clients say
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Trusted by startups and businesses for building modern digital
              products and scalable solutions.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[var(--text-primary)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-sm transition hover:bg-[var(--primary-dark)]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll Cards */}
        <div
          ref={scrollRef}
          className="mt-14 flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[340px]  rounded-[30px] border border-gray-100 bg-white p-7 shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}