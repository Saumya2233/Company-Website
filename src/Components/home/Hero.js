"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent } from "@/data/home";

export default function Hero() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8">
      <div className="glow-primary left-[-120px] top-20 bg-[var(--primary)]/20" />
      <div className="glow-secondary right-[-120px] top-32 bg-[var(--secondary)]/20" />

      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="badge-primary mb-5 inline-block font-semibold"
          >
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="max-w-3xl text-4xl font-bold leading-tight text-black md:text-6xl"
          >
            {heroContent.titlePrefix}{" "}
            <span className="gradient-text">{heroContent.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="body-copy-lg mt-6 max-w-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="mt-8 grid gap-3 text-sm text-secondary sm:grid-cols-3"
          >
            {heroContent.highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={18} className="text-[var(--primary)]" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-gray-100 bg-white p-4 shadow-2xl">
            <div className="rounded-[24px] bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/15 p-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted">
                      {heroContent.dashboard.label}
                    </p>

                    <h3 className="text-2xl font-bold text-black">
                      {heroContent.dashboard.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white"
                  >
                    {heroContent.dashboard.status}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  {heroContent.dashboard.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.12,
                        duration: 0.7,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                      }}
                      className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all"
                    >
                      <span className="font-semibold text-black">{item}</span>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--primary)] shadow-sm">
                        0{index + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LEFT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-black p-5 text-white shadow-xl md:block"
          >
            <h4 className="text-3xl font-bold">
              {heroContent.floatingStats[0].value}
            </h4>
            <p className="text-sm text-white/70">
              {heroContent.floatingStats[0].label}
            </p>
          </motion.div>

          {/* RIGHT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="absolute -right-4 -top-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block"
          >
            <h4 className="gradient-text text-3xl font-bold">
              {heroContent.floatingStats[1].value}
            </h4>

            <p className="text-sm text-[var(--text-muted)]">
              {heroContent.floatingStats[1].label}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
