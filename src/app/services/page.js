import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Palette,
  ShieldCheck,
  Bot,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constant/image";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive, and SEO-friendly websites using React, Next.js, and clean frontend architecture.",
    icon: Code2,
    href: "/services/ui-ux-design",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance mobile apps with smooth UI, secure APIs, and scalable features.",
    icon: Smartphone,
    href: "/services/ui-ux-design",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful interfaces, wireframes, prototypes, and user-focused digital experiences.",
    icon: Palette,
    href: "/services/ui-ux-design",
  },
  {
    title: "Backend Development",
    desc: "Secure APIs, authentication systems, dashboards, admin panels, and database integrations.",
    icon: Database,
    href: "/services/ui-ux-design",
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud setup, deployment, hosting, server configuration, and scalable infrastructure.",
    icon: Cloud,
    href: "/services/ui-ux-design",
  },
  {
    title: "Software Testing",
    desc: "Manual and automation testing to deliver reliable, secure, and bug-free applications.",
    icon: ShieldCheck,
    href: "/services/ui-ux-design",
  },
  {
    title: "AI & Automation",
    desc: "AI integrations, chatbots, automation tools, and smart workflow optimization.",
    icon: Bot,
    href: "/services/ui-ux-design",
  },
  {
    title: "Data Analytics",
    desc: "Interactive dashboards, business reports, insights, and data-driven decision support.",
    icon: BarChart3,
    href: "/services/ui-ux-design",
  },
];

const process = [
  "Requirement Analysis",
  "Strategy & Planning",
  "UI/UX Design",
  "Development",
  "Testing & Launch",
];

const industries = [
  "Healthcare",
  "Education",
  "E-commerce",
  "Real Estate",
  "Fintech",
  "Logistics",
  "SaaS",
  "Startups",
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[var(--text-primary)]">
      {/* Hero */}
      <section className="gradient-soft relative overflow-hidden px-6 py-24 md:py-32">
        <div className="glow-primary-lg left-[-120px] top-[-120px] bg-[var(--primary)]/25" />
        <div className="glow-primary-lg bottom-[-120px] right-[-120px] bg-[var(--secondary)]/25" />

        <div className="container-custom relative text-center">
          <h1 className="heading-hero mx-auto mt-6 max-w-4xl font-bold">
            Smart Software Services for Modern Businesses
          </h1>

          <p className="body-copy mx-auto mt-6 max-w-2xl text-base md:text-lg">
            We design and develop websites, mobile apps, SaaS platforms,
            dashboards, cloud solutions, AI automation tools, and custom
            software for growing companies.
          </p>

          <div className="mt-9 flex justify-center">
            <button className="btn btn-primary btn-md group">
              Discuss Your Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 ">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <span className="eyebrow tracking-widest">
              What We Offer
            </span>

            <h2 className="heading-section-lg mt-3 font-bold">
              Our Software Development Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-secondary">
              From idea to deployment, we provide complete digital solutions
              with clean design, modern technology, and reliable development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="card-feature group p-7 hover:border-[var(--primary)]/40"
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
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
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

      {/* Process */}
      <section className="gradient-soft-alt px-6 py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow tracking-widest">
                Our Process
              </span>

              <h2 className="heading-section-lg mt-3 font-bold">
                A Simple Process That Delivers Results
              </h2>

              <p className="mt-5 leading-8 text-secondary">
                We follow a clear development workflow to understand your
                requirements, design the right solution, develop it with clean
                code, test it properly, and support you after launch.
              </p>
            </div>

            <div className="space-y-5">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex-center h-12 w-12 rounded-full bg-[var(--primary)] text-lg font-bold text-white shadow-[var(--shadow-primary)]">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pb-10">
        <div
          className="container-custom gradient-primary rounded-[2rem] p-8 text-white shadow-[var(--shadow-primary)] md:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-white">
                Industries We Serve
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
                Building Software for Every Industry
              </h2>

              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white">
                We create custom software solutions for startups, agencies,
                enterprises, and service-based businesses across multiple
                industries.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4 pb-4 m-4">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/20 p-5 font-semibold text-white backdrop-blur"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-white" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      
      
    </main>
  );
}
