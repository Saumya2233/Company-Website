"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { serviceCards } from "@/data/servicesPage";

export default function Services() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container || isPaused) return;

    let animationFrame;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="overflow-hidden bg-white p-8">
      <div className="container-custom">
        <div className="section-heading mb-14 text-center">
          <h4 className="mt-6 text-2xl font-bold leading-tight md:text-xl lg:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#A572CF] via-pink-400 to-[#E87779] bg-clip-text text-transparent">
              Software Development
            </span>{" "}
            Services
          </h4>

          <p className="mx-auto mt-4 max-w-2xl text-body-secondary">
            From idea to deployment, we provide complete digital solutions with
            clean design, modern technology, and reliable development.
          </p>
        </div>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth py-4"
        >
          {[...serviceCards, ...serviceCards].map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                onClick={() => setIsPaused(!isPaused)}
                className="group min-w-[320px] rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#A572CF]/40 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A572CF] to-[#E87779] text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {service.desc}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#A572CF]"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
