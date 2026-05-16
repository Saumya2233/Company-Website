import Image from "next/image";
import { images } from "@/constant/image";
import { Target, Eye, Rocket, Users, Code2, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Modern Software Solutions",
    desc: "We build websites, SaaS platforms, dashboards, mobile apps and AI-powered tools.",
    icon: Code2,
  },
  {
    title: "Dedicated Tech Talent",
    desc: "We help companies hire skilled developers, designers and technical teams.",
    icon: Users,
  },
  {
    title: "Fast & Scalable Delivery",
    desc: "Our process focuses on clean development, smooth delivery and scalable architecture.",
    icon: Rocket,
  },
  {
    title: "Long-Term Support",
    desc: "We provide testing, maintenance, improvements and support after project delivery.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white pt-[38px]">
      {/* Hero */}
      <section className="section-lg section-soft relative overflow-hidden">
        <div className="glow-primary-lg left-[-120px] top-20 bg-[var(--primary)]/15" />

        <div className="container-custom grid-hero relative">
          {/* Left Content */}
          <div>
            <span className="badge-primary">
              About Mxpertz Infolabs
            </span>

            <h1 className="heading-hero mt-6 md:text-5xl">
              We create digital solutions that help businesses grow faster.
            </h1>

            <p className="body-copy mt-6">
              Mxpertz Infolabs is a software development company that helps
              startups, businesses and enterprises build modern digital
              products. We provide web development, mobile apps, SaaS products,
              AI automation, dashboards, cloud solutions, testing and dedicated
              hiring support.
            </p>

            <p className="body-copy mt-4">
              Founded with the vision to make technology simple and accessible,
              we focus on building clean, scalable and business-focused software
              solutions.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={images.frame1}
              alt="Mxpertz team"
              width={700}
              height={600}
              className="h-[480px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-6 rounded-3xl bg-white p-6 shadow-2xl">
              <h3 className="text-4xl font-semibold text-[var(--primary)]">
                50+
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src={images.logo}
                alt="Mxpertz Infolabs"
                width={170}
                height={55}
                className="object-contain"
              />
            </div>

            <span className="eyebrow">
              Who We Are
            </span>

            <h2 className="heading-section mt-5">
              A technology partner for startups and growing companies.
            </h2>
          </div>

          <div>
            <p className="body-copy">
              We work as a complete technology partner, from understanding your
              business idea to planning, designing, developing, testing and
              launching the final product. Our team believes in simple
              communication, clean UI, strong code quality and reliable project
              delivery.
            </p>

            <p className="body-copy mt-4">
              Whether you need a business website, custom dashboard, SaaS
              platform, AI workflow, mobile app or dedicated developers, Mxpertz
              helps you build it with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      {/* Mission Vision */}
      {/* Mission Vision */}
      <section className="section-sm section-soft relative overflow-hidden">
        <div className="glow-primary left-[-120px] top-10" />
        <div className="glow-pink bottom-10 right-[-120px]" />

        <div className="container-custom relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge-primary">
              Mission & Vision
            </span>

            <h2 className="heading-section mt-5">
              Driven by purpose, focused on innovation.
            </h2>

            <p className="body-copy-sm mt-4 text-[15px]">
              We help businesses build reliable digital products with modern
              design, scalable technology and long-term support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[var(--primary)] to-pink-400" />

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25">
                  <Target size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    Our Mission
                  </h3>

                  <p className="body-copy mt-4 text-[15px]">
                    Our mission is to turn business ideas into powerful digital
                    products through clean development, modern technology and
                    reliable support.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2 text-xs font-medium text-[var(--primary)]">
                      Innovation
                    </span>
                    <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-medium text-pink-600">
                      Reliable Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-[28px] bg-[#101828] p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition duration-500 hover:-translate-y-1">
              <div className="absolute right-[-40px] top-[-40px] h-36 w-36 rounded-full bg-[var(--primary)]/30 blur-3xl" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                  <Eye size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">Our Vision</h3>

                  <p className="mt-4 text-[15px] leading-8 text-gray-300">
                    Our vision is to become a trusted technology partner for
                    companies by delivering scalable software, skilled talent
                    and future-ready solutions.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium">
                      Future Ready
                    </span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium">
                      Scalable Tech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-sm">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">
              What Makes Us Different
            </span>

            <h2 className="heading-section mt-6">
              We build with quality, speed and clarity.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="card-feature group rounded-[26px] hover:shadow-xl"
                >
                  <div className="icon-bubble mb-5">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="body-copy-sm mt-3">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
