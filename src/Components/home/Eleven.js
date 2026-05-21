"use client";

import Image from "next/image";
import { images } from "../../constant/image";

const partners = [
  {
    name: "Microsoft",
    logo: images.c1,
  },
  {
    name: "Cranium",
    logo: images.c2,
  },
  {
    name: "Pigment",
    logo: images.c3  ,
  },
  {
    name: "Databricks",
    logo: images.c4   ,
  },
  {
    name: "Snowflake",
    logo: images.c5,
  },
  {
    name: "NiCE",
    logo: images.c6,
  },
  {
    name: "Twilio",
    logo: images.c5,
  },
];

export default function StrategicPartnerships() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] py-20">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#A572CF]/20 to-[#E87779]/20 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#364343]">
            Strategic Partnerships
          </span>

          <h4 className="mt-8 text-2xl font-bold leading-tight text-[#1F3B63] md:text-4xl">
            You gain the strength of our global technology partnerships, helping
            you modernize, scale, and lead with confidence.
          </h4>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-[#4A5568] md:text-xl">
            We match the partners to your transformation goals, ensuring secure,
            and future-ready solutions.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex h-[100px] w-[280px] items-center justify-center rounded-[28px] bg-white shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={120}
                className="h-auto max-h-[82px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
