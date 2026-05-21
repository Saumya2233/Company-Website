"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constant/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  developmentProcess,
  serviceCards,
  serviceIndustries,
} from "@/data/servicesPage";

const technologies = [
  {
    name: "React",
    image: images.react,
  },
  {
    name: "Next.js",
    image: images.next,
  },
  {
    name: "Node.js",
    image: images.node,
  },
  {
    name: "MongoDB",
    image: images.mongo,
  },
  {
    name: "Express.js",
    image: images.express,
  },
  {
    name: "Tailwind CSS",
    image: images.tailwind,
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <span className="eyebrow tracking-widest">
              What We Offer
            </span>

            <h2 className="heading-section-lg mt-3 font-bold">
              Our Software Development Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-body-secondary">
              From idea to deployment, we provide complete digital solutions
              with clean design, modern technology, and reliable development.
            </p>
          </div>

          <div className="content-stack grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="card-feature group p-7 hover:border-primary/40"
                >
                  <div className="icon-bubble-lg icon-bubble-hover mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>

                  <p className="body-copy-sm mt-3">
                    {service.desc}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    <section className="relative bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#A572CF]">
            Tech Stack
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-black">
            Technologies We Work With
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We use modern and scalable technologies to build fast, secure, and
            high-performance digital products.
          </p>
        </div>

        {/* STACK GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                group
                rounded-2xl
                border border-zinc-200
                bg-white
                px-5 py-7
                transition-all duration-300
                hover:border-[#A572CF]/40
                hover:-translate-y-1
              "
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative h-12 w-12">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-4 text-[15px] font-semibold text-black">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-20 border-t border-zinc-200 pt-8">
          <p className="text-sm text-zinc-500">
            Our stack is carefully selected for scalability, performance, and
            seamless user experiences.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
