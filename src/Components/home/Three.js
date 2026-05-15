import { Zap, Brain, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    desc: "We follow a modern development process to deliver projects quickly and efficiently.",
    icon: Zap,
  },
  {
    title: "AI Powered Solutions",
    desc: "Smart AI integrations and automation systems for modern businesses.",
    icon: Brain,
  },
  {
    title: "Experienced Developers",
    desc: "Skilled developers working with React, Next.js, Node.js and scalable technologies.",
    icon: Users,
  },
  {
    title: "Secure & Scalable",
    desc: "Reliable software architecture built for long-term business growth.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white pb-3">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--primary)]/15 blur-3xl" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
              Why Choose Us
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl">
              We create software solutions that help businesses grow faster.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              From websites and mobile apps to AI automation and dashboard
              systems, we focus on building scalable and modern digital
              products.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg"
                >
                  <h3 className="text-4xl font-extrabold text-[var(--primary)]">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[28px] border border-gray-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/30 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
