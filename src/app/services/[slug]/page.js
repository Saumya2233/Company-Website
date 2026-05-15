import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/service"
import { notFound } from "next/navigation";
import { CheckCircle, Code2, Users, Clock, ShieldCheck } from "lucide-react";
import { images } from "@/constant/image";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-white pt-[28px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f7ff] py-24">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="container-custom relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-medium text-[var(--primary)]">
              {service.title}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl">
              Professional {service.title} Services for Modern Businesses
            </h1>

            <p className="mt-6 text-[16px] leading-8 text-[var(--text-secondary)]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/25 transition hover:-translate-y-1"
              >
                Hire Now
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={
                service.image ||
                "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              }
              alt={service.title}
              width={700}
              height={520}
              className="h-[430px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -left-6 rounded-3xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Expert Team
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Skilled developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="container-custom relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">
                What We Provide
              </span>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
                Complete{" "}
                <span className="text-[var(--primary)]">{service.title}</span>{" "}
                solutions built for modern businesses.
              </h2>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[var(--text-secondary)]">
                We create scalable, secure, and high-performing digital
                solutions tailored to your business goals. From planning and
                architecture to deployment and long-term support, our team
                ensures every product is optimized for performance, user
                experience, and future growth.
              </p>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-3xl font-bold text-[var(--primary)]">
                    99%
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Client Satisfaction
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-3xl font-bold text-[var(--primary)]">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Technical Support
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-3xl font-bold text-[var(--primary)]">
                    100+
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Successful Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                service.features || [
                  "Responsive Design",
                  "Clean Code Structure",
                  "Performance Optimization",
                  "API Integration",
                  "Testing & QA",
                  "Long-Term Support",
                ]
              ).map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/30 hover:shadow-[var(--shadow-primary)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                    <CheckCircle size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                    {feature}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    High-quality implementation focused on scalability,
                    performance, security, and seamless user experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative overflow-hidden bg-[#f8f7ff] py-20">
        {/* Background Blur */}
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[var(--primary)]/15 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-[var(--secondary)]/15 blur-3xl" />

        <div className="container-custom relative">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Cards */}
            <div className="grid gap-5">
              {[
                {
                  title: "Expert Development Team",
                  desc: "Experienced developers following modern architecture, clean coding standards, and scalable development practices.",
                  icon: Users,
                },
                {
                  title: "Fast & Transparent Delivery",
                  desc: "Smooth execution with proper planning, milestone tracking, timely updates, and agile workflows.",
                  icon: Clock,
                },
                {
                  title: "Quality Testing & Support",
                  desc: "Reliable testing, optimization, maintenance, and long-term support for stable business growth.",
                  icon: ShieldCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-5 rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[var(--shadow-primary)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            

            {/* Right Content */}
            <div>
            

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
                Trusted technology partner for{" "}
                <span className="text-[var(--primary)]">
                  modern digital solutions
                </span>
                .
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
                We help startups, enterprises, and growing businesses transform
                ideas into scalable digital products with premium design, clean
                development, strong architecture, and long-term support.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[var(--primary)]">
                    50+
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Successful Projects
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[var(--primary)]">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Technical Support
                  </p>
                </div>
              </div>

              {/* CTA */}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="btn btn-primary btn-lg">
              <Link href="/contact" ></Link>
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-black  bg-black" Link="/contact">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src={images.section}
            alt="Section Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Optional Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Button */}
        </div>
      </section>
    </main>
  );
}
