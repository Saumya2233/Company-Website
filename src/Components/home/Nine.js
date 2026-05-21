import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { clientLogos, happyClientReview, happyClientStats } from "@/data/home";

export default function HappyClients() {
  return (
    <section className=" p-5 relative overflow-hidden bg-[#fbf7ff]">
      <div className="glow-primary-lg left-[-120px] top-20" />
      <div className="glow-secondary right-[-120px] bottom-20 h-80 w-80 bg-secondary/20" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[3px] text-primary shadow-sm">
            <Sparkles size={15} />
            HAPPY CLIENTS
          </span>

          <h4 className="heading-section mt-6 font-semibold">
            Trusted by growing companies
            <br />
            building faster with us
          </h4>

          <p className="body-copy-sm mx-auto mt-5 max-w-2xl text-[15px]">
            Startups and businesses trust Mxpertz to build scalable products,
            hire skilled developers and launch digital solutions faster.
          </p>
        </div>

        {/* Main Card */}
        <div className="content-stack grid overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-2xl sm:rounded-[36px] lg:grid-cols-[1fr_0.9fr]">
          {/* Left Review */}
          <div className="relative p-6 md:p-12">
            <Quote className="absolute right-6 top-8 h-14 w-14 text-primary/10 md:right-10 md:top-10 md:h-20 md:w-20" />

            <div className="flex items-center gap-4">
              <img
                src={happyClientReview.image}
                alt={happyClientReview.name}
                className="h-16 w-16 rounded-full object-cover ring-4 ring-primary/10"
              />

              <div>
                <h3 className="text-xl font-semibold text-body-primary">
                  {happyClientReview.name}
                </h3>
                <p className="text-sm text-body-secondary">
                  {happyClientReview.role}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-body-primary md:mt-10 md:text-xl md:leading-9">
              {happyClientReview.quote}
            </p>

            <button className="btn btn-primary btn-md mt-10 font-medium">
              View Case Study
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Stats */}
          <div className="relative bg-gradient-to-br from-primary/15 to-secondary/10 p-6 md:p-12">
            <div className="grid h-full gap-5 sm:grid-cols-2">
              {happyClientStats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur"
                >
                  <h3 className="text-4xl font-semibold text-primary">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm text-body-secondary">
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
              className="rounded-full border border-gray-100 bg-white px-6 py-3 text-sm font-medium text-body-secondary shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
