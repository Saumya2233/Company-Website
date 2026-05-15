import {
  BriefcaseBusiness,
  ShoppingBag,
  Building2,
  Coffee,
  HeartPulse,
  WalletCards,
  GraduationCap,
  Truck,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Retail",
    icon: ShoppingBag,
  },
  {
    title: "Real Estate",
    icon: Building2,
  },
  {
    title: "Lifestyle",
    icon: Coffee,
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Finance",
    icon: WalletCards,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Logistics",
    icon: Truck,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f8f7ff] p-6 ">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[4px] text-[var(--primary)]">
              Industries
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--text-primary)] md:text-4xl">
              Sectors
              <br />
              Impacted
            </h2>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]">
              Know our process
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-transparent p-4 text-center transition-all duration-300 hover:border-[var(--primary)]/20 hover:bg-white hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-md transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  {/* Text */}
                  <h3 className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
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
