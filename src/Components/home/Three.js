import { whyChooseFeatures, whyChooseStats } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white pb-3 pt-10">
      <div className="glow-primary-lg -left-32 top-20 bg-[var(--primary)]/15" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="badge-primary font-semibold">
              Why Choose Us
            </span>

            <h2 className="heading-section mt-6 max-w-2xl">
              We create software solutions that help businesses grow faster.
            </h2>

            <p className="body-copy-lg mt-6 max-w-2xl">
              From websites and mobile apps to AI automation and dashboard
              systems, we focus on building scalable and modern digital
              products.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {whyChooseStats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg"
                >
                  <h3 className="text-4xl font-extrabold text-[var(--primary)]">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="card-feature-lg group"
                >
                  <div className="icon-bubble-lg icon-bubble-hover">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[var(--text-primary)]">
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
      </div>
    </section>
  );
}
