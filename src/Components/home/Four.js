import { images } from "@/constant/image";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const points = [
  "Pre-vetted skilled developers",
  "Flexible hiring models",
  "Fast onboarding process",
  "Dedicated project support",
];

export default function HireTalent() {
    const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-white p-8">
      {/* Blur Background */}
      <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
              Hire Talent
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl">
              Hire dedicated developers for your next big project
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Build your remote tech team with experienced developers, designers
              and AI engineers ready to scale your business faster.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-5">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="text-base font-medium text-[var(--text-primary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
              >
                Hire Developers
              </button>

              <button className="flex items-center gap-2 rounded-full border border-gray-200 px-7 py-4 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                Explore Talent
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={images.frame1}
              alt="Team"
              width={700}
              height={700}
              className="h-[520px] w-full   "
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 rounded-3xl bg-white p-6 shadow-2xl">
              <h3 className="text-4xl font-extrabold text-[var(--primary)]">
                100+
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                Skilled Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
