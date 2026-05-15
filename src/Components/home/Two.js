import {
  Globe,
  Smartphone,
  Brain,
  Users,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern responsive websites and scalable web applications for businesses.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with clean UI and smooth performance.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered tools, automation systems, and smart business integrations.",
    icon: Brain,
  },
  {
    title: "Tech Hiring",
    description:
      "Hire skilled developers, interns, and dedicated tech teams easily.",
    icon: Users,
  },
  {
    title: "Dashboard Systems",
    description:
      "Admin panels, CRM dashboards, analytics, and business management systems.",
    icon: LayoutDashboard,
  },
  {
    title: "QA & Testing",
    description:
      "Manual and automated testing solutions for reliable software delivery.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Shape */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-black md:text-5xl">
            Smart digital services for modern companies
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            We provide complete software development, AI integration, hiring,
            and digital transformation services for startups and enterprises.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/20 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)]/10 transition-all duration-300 group-hover:bg-[var(--primary)]">
                  <Icon className="h-8 w-8 text-[var(--primary)] transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-black">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:translate-x-1">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
