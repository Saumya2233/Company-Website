"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/constant/image";

const landingHeroContent = {
  badge: "Software Development • AI Solutions • Tech Hiring",
  title: "Building Digital Solutions That Help Businesses Grow",
  description:
    "Mxpertz creates modern websites, web applications, AI-powered products, and connects companies with skilled interns and tech professionals.",
  actions: [
    { label: "Get Started", href: "/contact", variant: "primary" },
    { label: "Explore Services", href: "/services", variant: "outline" },
  ],
};

export default function Hero() {
  const router = useRouter();

  const words = ["Build", "Scale", "Grow"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      const currentScroll = window.scrollY;

      // Hero section tak hi animation
      const maxScrollDistance = 500;

      const progress = Math.min(currentScroll / maxScrollDistance, 1);

      setScrollProgress(progress);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[130vh] w-full overflow-hidden bg-[#030206] pt-[90px] text-white border-b border-white/5 "
    >
      {/* Decorative Images */}
      <Image
        src={images.circle1}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-28 top-[22%] z-0 opacity-55"
      />

      <Image
        src={images.circle2}
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute -right-16 top-[16%] z-0 rotate-3 opacity-55"
      />

      <Image
        src={images.circle5}
        alt=""
        width={300}
        height={220}
        className="pointer-events-none absolute left-[16%] top-[78%] z-0 -rotate-6 opacity-55"
      />

      <Image
        src={images.circle4}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -right-28 bottom-[16%] z-0 opacity-55"
      />

      {/* Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

      {/* ORB */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div
          style={{
            width: isScrolling ? `${460 + scrollProgress * 900}px` : "460px",

            height: isScrolling ? `${460 - scrollProgress * 260}px` : "460px",

            transform: isScrolling
              ? `translate(${scrollProgress * 18}vw, ${
                  scrollProgress * -40
                }px) rotate(${scrollProgress * -3}deg)`
              : "translate(0px, 0px)",

            borderRadius: isScrolling ? "180px" : "50%",

            filter: isScrolling ? "blur(28px)" : "blur(50px)",

            background: isScrolling
              ? "radial-gradient(circle at center, #E87779 12%, rgba(232,119,121,0.50) 45%, transparent 75%)"
              : "radial-gradient(circle at center, #A572CF 18%, rgba(165,114,207,0.40) 55%, transparent 82%)",

            boxShadow: isScrolling
              ? "0 0 110px rgba(232, 119, 121, 0.85)"
              : "0 0 170px rgba(165, 114, 207, 0.65)",

            opacity: isScrolling ? 0.92 : 0.75,
          }}
          className="absolute transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center select-none">
        {/* Badge */}
        <span className="mb-8 inline-flex items-center gap-2.5 bg-gradient-to-r from-white/10 to-white/5 px-5 py-2 rounded-full text-xs font-semibold tracking-wider backdrop-blur-2xl border border-white/10 text-purple-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E87779] animate-pulse" />
          {landingHeroContent.badge}
        </span>

        {/* Heading */}
        <h1 className="max-w-5xl mx-auto overflow-hidden text-5xl font-bold leading-[1.25] md:text-6xl lg:text-7xl tracking-tight">
          Building{" "}
          <span className="relative inline-flex h-[1.2em] min-w-[220px] items-center justify-center overflow-hidden align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 1.04,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute whitespace-nowrap bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          Digital Solutions That Help Businesses Grow
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-base text-zinc-400 md:text-lg font-medium leading-relaxed">
          {landingHeroContent.description}
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5 pb-4">
          <button
            className="group flex items-center gap-2 px-7 py-3.5 border border-zinc-800 hover:border-zinc-600 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl font-semibold backdrop-blur-md"
            onClick={() => router.push("/services")}
          >
            Explore Services
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
