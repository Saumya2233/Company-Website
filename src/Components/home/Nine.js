import { ArrowRight, Quote, Sparkles } from "lucide-react";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "48h", label: "Talent Match" },
  { value: "3x", label: "Faster Growth" },
];

export default function HappyClients() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ff] py-5">
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-[var(--secondary)]/20 blur-3xl" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[3px] text-[var(--primary)] shadow-sm">
            <Sparkles size={15} />
            HAPPY CLIENTS
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
            Trusted by growing companies
            <br />
            building faster with us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)]">
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                alt="Client"
                className="h-16 w-16 rounded-full object-cover ring-4 ring-[var(--primary)]/10"
              />

              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Founder @ NexaFlow
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-xl leading-9 text-[var(--text-primary)]">
              “Mxpertz helped us build and launch our AI dashboard faster than
              expected. The communication, design quality and development
              process were smooth from day one.”
            </p>

            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]">
              View Case Study
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Stats */}
          <div className="relative bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/10 p-8 md:p-12">
            <div className="grid h-full gap-5 sm:grid-cols-2">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur"
                >
                  <h3 className="text-4xl font-semibold text-[var(--primary)]">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["NexaFlow", "CloudPeak", "BrightCRM", "ScaleHub"].map((item) => (
            <div
              key={item}
              className="rounded-full border border-gray-100 bg-white px-6 py-3 text-sm font-medium text-[var(--text-secondary)] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
