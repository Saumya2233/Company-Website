"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cpu, Globe, Layers } from "lucide-react";

const technologies = [
  {
    name: "React",
    description:
      "Interactive UI development with component-based architecture.",
    icon: Code2,
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework for production-ready applications.",
    icon: Globe,
  },
  {
    name: "Node.js",
    description: "Scalable backend services and APIs using JavaScript runtime.",
    icon: Server,
  },
  {
    name: "MongoDB",
    description: "Flexible NoSQL database for modern applications.",
    icon: Database,
  },
  {
    name: "Express.js",
    description: "Fast and minimal backend framework for APIs.",
    icon: Layers,
  },
  {
    name: "AI & APIs",
    description: "Integration of AI models and third-party services.",
    icon: Cpu,
  },
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-[#030206] text-white px-6 py-20">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Technologies We Use</h1>
        <p className="mt-6 text-zinc-400 text-lg">
          We build modern, scalable and high-performance digital products using
          industry-leading technologies.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition">
                <Icon size={22} />
              </div>

              {/* TITLE */}
              <h2 className="mt-5 text-xl font-semibold">{tech.name}</h2>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {tech.description}
              </p>

              {/* glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/5 via-transparent to-rose-500/5" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
