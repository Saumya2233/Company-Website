import { ArrowRight, Clock, CalendarClock, Timer } from "lucide-react";

const hiringOptions = [
  {
    title: "Full Time",
    subtitle: "Hiring",
    icon: Clock,
  },
  {
    title: "Part Time",
    subtitle: "Hiring",
    icon: CalendarClock,
  },
  {
    title: "Hourly",
    subtitle: "Hiring",
    icon: Timer,
  },
];

export default function HireDevelopersBanner() {
  return (
    <section className="relative overflow-hidden bg-white ">
      <div className="relative w-full overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
          alt="Developers working"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center text-white lg:px-10">
          <h4 className="max-w-5xl text-3xl font-extrabold md:text-6xl">
            Scale Your Product with Certified Developers and Fresh Ideas
          </h4>

          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-200 md:text-lg">
            Flexible engagement — full-time, part-time or hourly — aligned to
            your timezone with weekly reporting.
          </p>

          {/* Hiring Cards */}
          <div className="mt-10 grid w-full max-w-4xl gap-5 md:grid-cols-3">
            {hiringOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl bg-white px-6 py-5 text-left shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-black">
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

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--primary-dark)]">
            Hire Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
