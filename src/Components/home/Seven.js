"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/home";

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
    <section className="pt-8 pb-8 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <span className="badge-primary font-semibold">
              Testimonials
            </span>

            <h2 className="heading-section mt-3">
              What our clients say
            </h2>

            <p className="body-copy mt-2">
              Trusted by startups and businesses for building modern digital
              products and scalable solutions.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex-center h-10 w-10 rounded-full border border-gray-200 bg-white text-body-primary shadow-sm transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex-center h-10 w-10 rounded-full bg-primary text-white shadow-sm transition hover:bg-primary-dark"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll Cards */}
        <div
          ref={scrollRef}
          className="content-stack flex snap-x gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[min(340px,calc(100vw-48px))] snap-center rounded-[30px] border border-gray-100 bg-white p-5 shadow-lg sm:p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 leading-7 text-body-secondary">
                &quot;{item.review}&quot;
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-body-primary">
                    {item.name}
                  </h3>

                  <p className="text-sm text-body-secondary">
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
