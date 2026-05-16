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
      <div className="glow-primary-lg right-[-120px] top-20 bg-[var(--primary)]/10" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="badge-primary font-semibold">
              Hire Talent
            </span>

            <h2 className="heading-section-lg mt-6">
              Hire dedicated developers for your next big project
            </h2>

            <p className="body-copy-lg mt-6">
              Build your remote tech team with experienced developers, designers
              and AI engineers ready to scale your business faster.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-5">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-center h-10 w-10 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
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
              className="btn btn-primary btn-md py-4"
              >
                Hire Developers
              </button>

              <button className="btn btn-outline btn-md py-4">
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
              className="h-[420px] w-full   "
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 rounded-3xl bg-white p-6 shadow-2xl mb-4">
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
