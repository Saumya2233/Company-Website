import { ArrowRight } from "lucide-react";
import { hiringBanner } from "@/data/home";

export default function HireDevelopersBanner() {
  return (
    <section className=" relative overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src={hiringBanner.image}
          alt="Developers working"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="container-page relative z-10 flex min-h-[440px] flex-col items-center justify-center py-12 text-center text-white md:min-h-[520px] md:py-16">
          <h4 className="max-w-5xl text-3xl font-bold md:text-4xl">
            Scale Your Product with Certified Developers <br /> and Fresh Ideas
          </h4>

          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-200 md:text-lg">
            Flexible engagement — full-time, part-time or hourly — aligned to
            your timezone with weekly reporting.
          </p>

          {/* Hiring Cards */}
          <div className="mt-10 grid w-full max-w-4xl gap-5 md:grid-cols-3">
            {hiringBanner.options.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl bg-white px-6 py-5 text-left shadow-2xl"
                >
                  <div className="flex-center h-12 w-14 rounded-full bg-primary/15 text-primary">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="text-sm font-medium text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Hire only what you need — scale up or down with predictable billing
            and direct developer access.
          </p>

          <button className="btn btn-primary btn-lg mt-8 font-bold">
            Hire Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
