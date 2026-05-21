import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/service"
import { notFound } from "next/navigation";
import { CheckCircle, Code2 } from "lucide-react";
import { images } from "@/constant/image";
import {
  defaultServiceFeatures,
  fallbackServiceImage,
  serviceFeatureStats,
  serviceWhyChooseCards,
  serviceWhyChooseStats,
} from "@/data/serviceDetails";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <main className="page-main">
      {/* Hero */}
      <section className="section-lg section-soft relative overflow-hidden">
        <div className="glow-primary-lg left-[-120px] top-10" />
        <div className="glow-pink bottom-10 right-[-120px] h-80 w-80" />

        <div className="container-custom grid-hero relative">
          <div>
            <span className="badge-primary">
              {service.title}
            </span>

            <h1 className="heading-hero mt-6">
              Professional {service.title} Services for Modern Businesses
            </h1>

            <p className="body-copy mt-6">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn btn-primary btn-md btn-lift"
              >
                Hire Now
              </Link>

              <Link
                href="/portfolio"
                className="btn btn-outline btn-md btn-lift hover:shadow-lg"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={
                service.image || fallbackServiceImage
              }
              alt={service.title}
              width={700}
              height={520}
              className="h-[430px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-4 left-4 rounded-3xl bg-white p-4 shadow-2xl sm:-bottom-7 sm:-left-6 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="icon-bubble">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-body-primary">
                    Expert Team
                  </h3>
                  <p className="text-sm text-body-secondary">
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
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="badge-primary font-semibold uppercase tracking-[3px]">
                What We Provide
              </span>

              <h2 className="heading-section-lg mt-6 max-w-xl font-semibold">
                Complete{" "}
                <span className="text-primary">{service.title}</span>{" "}
                solutions built for modern businesses.
              </h2>

              <p className="body-copy mt-6 max-w-2xl text-[17px]">
                We create scalable, secure, and high-performing digital
                solutions tailored to your business goals. From planning and
                architecture to deployment and long-term support, our team
                ensures every product is optimized for performance, user
                experience, and future growth.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {serviceFeatureStats.map((stat) => (
                  <div key={stat.label} className="card-stat">
                    <h3 className="text-3xl font-bold text-primary">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-sm text-body-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Features */}
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                service.features || defaultServiceFeatures
              ).map((feature, index) => (
                <div
                  key={index}
                  className="card-feature group"
                >
                  <div className="icon-bubble icon-bubble-hover">
                    <CheckCircle size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-body-primary">
                    {feature}
                  </h3>

                  <p className="body-copy-sm mt-3">
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
      <section className="section section-soft relative overflow-hidden">
        {/* Background Blur */}
        <div className="glow-primary left-[-120px] top-[-120px]" />
        <div className="glow-secondary bottom-[-120px] right-[-120px]" />

        <div className="container-custom relative">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Cards */}
            <div className="grid gap-5">
              {serviceWhyChooseCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-5 rounded-[28px] border border-white bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary sm:flex-row sm:p-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-body-primary">
                        {item.title}
                      </h3>

                      <p className="body-copy-sm mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Content */}
            <div>
              <h2 className="heading-section-lg mt-6 font-semibold">
                Trusted technology partner for{" "}
                <span className="text-primary">
                  modern digital solutions
                </span>
                .
              </h2>

              <p className="body-copy mt-6 text-base">
                We help startups, enterprises, and growing businesses transform
                ideas into scalable digital products with premium design, clean
                development, strong architecture, and long-term support.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {serviceWhyChooseStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
                    <h3 className="text-4xl font-bold text-primary">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-sm text-body-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="btn btn-primary btn-lg">
              <Link href="/contact"></Link>
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[350px] md:h-[450px] lg:h-[550px]">
          <Image
            src={images.section}
            alt="Section Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center pt-5 pb-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Build Your Next Digital Product With Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base md:text-lg">
                We help startups and businesses create scalable web and mobile
                solutions with modern technologies.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="btn btn-primary w-full sm:w-auto">
                  Start Your Project
                </button>

                <button className="btn btn-secondary w-full bg-white sm:w-auto">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
