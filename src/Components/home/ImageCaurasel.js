"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constant/image";
import { cinematicHeroTalents } from "@/data/home";
import { motionTiming, premiumEase } from "@/constants/motion";

export default function PremiumHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d0914] font-sans text-white">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.025, 1],
            opacity: [0.32, 0.42, 0.32],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-20%] aspect-square w-[120%] -translate-x-1/2 rounded-full bg-primary/35 blur-[140px]"
        />

        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-20%] top-[10%] aspect-square w-[50%] rounded-full bg-secondary/20 blur-[120px]"
        />
      </div>

      <nav className="relative z-10 mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/90">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>

          
        </div>

        <button className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition duration-300 hover:border-secondary hover:bg-secondary/10">
          Contact Us
        </button>
      </nav>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-12 pt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionTiming.section,
            ease: premiumEase,
          }}
          viewport={{ once: true }}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[68px]"
        >
          More growth, <span className="text-secondary">less work</span>
          <span className="mt-2 block font-semibold">Get your time back</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: motionTiming.section,
            ease: premiumEase,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/60 sm:text-lg"
        >
          Time is money, and our automation solutions help you save both.
          Automate your most repetitive tasks, reduce operational costs, and
          watch your team&apos;s productivity soar.
        </motion.p>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: premiumEase,
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mt-12 flex w-max gap-6 px-6 pb-24 md:mx-auto md:gap-8"
      >
        {cinematicHeroTalents.map((talent, index) => (
          <motion.div
            key={talent.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTiming.card,
              delay: index * 0.06,
              ease: premiumEase,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className={`group relative h-[340px] w-[250px] shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-2xl transition ${talent.offset}`}
          >
            <span className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-black/70 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#bde0fe] backdrop-blur-md">
              {talent.role}
            </span>

            <Image
              src={images[talent.imageKey]}
              alt={talent.name}
              fill
              sizes="250px"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-7 left-6 right-6 z-30">
              <h3 className="text-3xl font-semibold">{talent.name}</h3>
              <p className="mt-2 text-base font-medium text-white/80">
                {talent.prev}
              </p>
            </div>

            <div className="absolute inset-0 rounded-[30px] ring-0 ring-[#bde0fe]/60 transition group-hover:ring-2" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
