import { ArrowRight } from "lucide-react";
import { industryItems } from "@/data/home";

export default function IndustriesSection() {
  return (
    <section className="section-sm bg-surface-soft">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <div>
            <span className="eyebrow text-xs font-bold">
              Industries
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-body-primary md:text-4xl">
              Sectors
              <br />
              Impacted
            </h2>

            <button className="btn btn-primary btn-sm mt-8">
              Know our process
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {industryItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-transparent p-4 text-center transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex-center h-14 w-14 rounded-full bg-white text-primary shadow-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  {/* Text */}
                  <h3 className="mt-3 text-sm font-semibold text-body-primary">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
