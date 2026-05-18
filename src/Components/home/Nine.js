import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { clientLogos, happyClientReview, happyClientStats } from "@/data/home";

export default function HappyClients() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ff] py-5">
      <div className="glow-primary-lg left-[-120px] top-20" />
      <div className="glow-secondary right-[-120px] bottom-20 h-80 w-80 bg-[var(--secondary)]/20" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[3px] text-[var(--primary)] shadow-sm">
            <Sparkles size={15} />
            HAPPY CLIENTS
          </span>

          <h2 className="heading-section-lg mt-6 font-semibold">
            Trusted by growing companies
            <br />
            building faster with us
          </h2>

          <p className="body-copy-sm mx-auto mt-5 max-w-2xl text-[15px]">
            Startups and businesses trust Mxpertz to build scalable products,
            hire skilled developers and launch digital solutions faster.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-16 grid overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-2xl lg:grid-cols-[1fr_0.9fr]">
          {/* Left Review */}
          <div className="relative p-8 md:p-12">
            <Quote className="absolute right-10 top-10 h-20 w-20 text-[var(--primary)]/10" />

            <div className="flex items-center gap-4">
              <img
                src={happyClientReview.image}
                alt={happyClientReview.name}
                className="h-16 w-16 rounded-full object-cover ring-4 ring-[var(--primary)]/10"
              />

              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {happyClientReview.name}
                </h3>
                <p className="text-sm text-secondary">
                  {happyClientReview.role}
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-xl leading-9 text-[var(--text-primary)]">
              {happyClientReview.quote}
            </p>

            <button className="btn btn-primary btn-md mt-10 py-4 font-medium">
              View Case Study
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Stats */}
          <div className="relative bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/10 p-8 md:p-12">
            <div className="grid h-full gap-5 sm:grid-cols-2">
              {happyClientStats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur"
                >
                  <h3 className="text-4xl font-semibold text-[var(--primary)]">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {clientLogos.map((item) => (
            <div
              key={item}
              className="rounded-full border border-gray-100 bg-white px-6 py-3 text-sm font-medium text-secondary shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
