import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Admin Dashboard",
    category: "Web Application",
    desc: "A scalable dashboard built for managing users, analytics, subscriptions and business operations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    results: [
      "45% faster workflow",
      "Real-time analytics",
      "Role based access",
    ],
  },
  {
    title: "AI Hiring Platform",
    category: "AI Automation",
    desc: "A smart hiring system that helps companies shortlist candidates and manage recruitment faster.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    results: [
      "60% time saved",
      "Automated screening",
      "Better candidate tracking",
    ],
  },
  {
    title: "E-commerce Website",
    category: "Online Store",
    desc: "A modern e-commerce website with product listing, cart, checkout and admin management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    results: ["Responsive UI", "Fast checkout", "SEO optimized"],
  },
];

const stats = [
  {
    title: "Projects Delivered",
    value: "50+",
    icon: CheckCircle,
  },
  {
    title: "Client Growth",
    value: "3x",
    icon: TrendingUp,
  },
  {
    title: "Happy Clients",
    value: "30+",
    icon: Users,
  },
  {
    title: "Faster Delivery",
    value: "40%",
    icon: Clock,
  },
];

export default function CaseStudyPage() {
  return (
    <main className="bg-white pt-[38px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f7ff] py-24">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="container-custom relative text-center">
          <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-medium text-[var(--primary)]">
            Case Studies
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl">
            Real projects, real solutions and measurable business impact.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[var(--text-secondary)]">
            Explore how we help startups and businesses build modern websites,
            dashboards, SaaS products, AI tools and digital platforms.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-12 relative z-10">
        <div className="container-custom">
          <div className="grid gap-5 rounded-[30px] bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#f8f7ff] p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-5">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">
              Featured Work
            </span>

            <h2 className="mt-5 text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
              Projects we have built for modern businesses.
            </h2>
          </div>

          <div className="mt-14 grid gap-8">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="grid overflow-hidden rounded-[34px] border border-gray-100 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] lg:grid-cols-2"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={550}
                    className="h-[360px] w-full object-cover lg:h-full"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)]">
                    {item.category}
                  </span>

                  <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-8 text-[var(--text-secondary)]">
                    {item.desc}
                  </p>

                  <div className="mt-7 grid gap-3">
                    {item.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle
                          size={20}
                          className="text-[var(--primary)]"
                        />
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                  >
                    Discuss Similar Project
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-white py-10">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[40px] bg-[#101828] px-8 py-20 text-center text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] md:px-16">
            {/* Glow Effects */}
            <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
              {/* Small Badge */}
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-purple-200 backdrop-blur-md">
                Let’s Build Together
              </span>

              {/* Heading */}
              <h2 className="mt-7 text-4xl font-semibold leading-tight md:text-6xl">
                Build your next digital success story with Mxpertz.
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                From SaaS products to modern websites, AI automation and
                scalable business platforms — we help brands grow with powerful
                technology.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-primary)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--primary-dark)]"
                >
                  Start Project
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#111827]"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
