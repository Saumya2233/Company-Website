import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { caseStudies, caseStudyStats } from "@/data/caseStudies";

export default function CaseStudyPage() {
  return (
    <main className="page-main">
      {/* Hero */}
      <section className="section section-soft relative overflow-hidden">
        <div className="glow-primary-lg left-[-120px] top-5" />
        <div className="glow-pink bottom-10 right-[-120px] h-80 w-80" />

        <div className="container-custom relative text-center">
          <span className="badge-primary">Case Studies</span>

          <h1 className="text-3xl font-semibold mx-auto mt-6 max-w-4xl">
            Real projects, real solutions and measurable business impact.
          </h1>

          <p className="body-copy mx-auto mt-6 max-w-2xl">
            Explore how we help startups and businesses build modern websites,
            dashboards, SaaS products, AI tools and digital platforms.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-1  md:-mt-12">
        <div className="container-custom">
          <div className="grid gap-5 rounded-[30px] bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:grid-cols-2 lg:grid-cols-4">
            {caseStudyStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#f8f7ff] p-2 text-center"
                >
                  <div className="icon-bubble mx-auto mb-4">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-3xl font-semibold text-body-primary">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-body-secondary">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Featured Work</span>

            <h2 className="heading-section mt-5">
              Projects we have built for modern businesses.
            </h2>
          </div>

          <div className="content-stack grid gap-8">
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
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {item.category}
                  </span>

                  <h3 className="text-3xl font-semibold text-body-primary">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-8 text-body-secondary">
                    {item.desc}
                  </p>

                  <div className="mt-7 grid gap-3">
                    {item.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-primary" />
                        <span className="text-sm font-medium text-body-primary">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn btn-primary btn-sm btn-lift mt-8 w-fit"
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
      <section className="bg-white pb-4">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[28px] bg-[#101828] px-5 py-10 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:px-8 md:px-12 md:py-14">
            {/* Glow Effects */}
            <div className="glow-primary left-[-100px] top-[-100px] bg-primary/20" />
            <div className="glow-pink bottom-[-120px] right-[-80px] bg-pink-400/10" />

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Small Badge */}
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-200 backdrop-blur-md">
                Let’s Build Together
              </span>

              {/* Heading */}
              <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
                Build your next digital success story with Mxpertz.
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
                From SaaS products to modern websites, AI automation and
                scalable business platforms — we help brands grow with powerful
                technology.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary min-w-[170px] px-6 py-3 text-sm uppercase tracking-wide"
                >
                  Start Project
                </Link>

                <Link
                  href="/#"
                  className="btn min-w-[170px] border border-white/20 bg-white/10 px-6 py-3 text-sm uppercase tracking-wide text-white backdrop-blur-md hover:bg-white hover:text-[#111827]"
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
