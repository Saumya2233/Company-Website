import { images } from "@/constant/image";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { hireTalentPoints, hireTalentStat } from "@/data/home";

export default function HireTalent() {
    const router = useRouter();
  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Blur Background */}
      <div className="glow-primary-lg right-[-120px] top-20 bg-primary/10" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="badge-primary font-semibold">
              Hire Talent
            </span>

            <h2 className="heading-section mt-6">
              Hire dedicated developers for your next big project
            </h2>

            <p className="body-copy-lg mt-6">
              Build your remote tech team with experienced developers, designers
              and AI engineers ready to scale your business faster.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-5">
              {hireTalentPoints.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-center h-3 w-10 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="text-base font-medium text-body-primary">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/contact")}
              className="btn btn-primary btn-md"
              >
                Hire Developers
              </button>

              <button className="btn btn-outline btn-md">
                Explore Talent
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={images.workImage}
              alt="Team"
              width={700}
              height={700}
              className="h-auto max-h-[420px] w-full object-contain"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 rounded-3xl bg-white p-5 shadow-2xl sm:-bottom-8 sm:-left-6 sm:mb-4 sm:p-6">
              <h3 className="text-4xl font-extrabold text-primary">
                {hireTalentStat.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-body-secondary">
                {hireTalentStat.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
