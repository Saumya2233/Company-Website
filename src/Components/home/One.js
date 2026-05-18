import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/constant/image";
import { useRouter } from "next/navigation";
import { landingHeroContent } from "@/data/home";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-[78px]">
      {/* Decorative Images */}
      <Image
        src={images.circle1}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-28 top-[22%] z-0 opacity-55"
      />

      <Image
        src={images.circle2}
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute -right-16 top-[16%] z-0 rotate-3 opacity-55"
      />

      <Image
        src={images.circle5}
        alt=""
        width={300}
        height={220}
        className="pointer-events-none absolute left-[16%] top-[78%] z-0 -rotate-6 opacity-25"
      />

      <Image
        src={images.circle4}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -right-28 bottom-[16%] z-0 opacity-45"
      />

      <Image
        src={images.circle6}
        alt=""
        width={55}
        height={55}
        className="pointer-events-none absolute right-[33%] top-[30%] z-0 rotate-12 opacity-35"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="badge-primary mb-6 px-6 font-semibold">
          {landingHeroContent.badge}
        </span>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-black md:text-6xl lg:text-7xl">
          {landingHeroContent.title}
        </h1>

        <p className="body-copy mx-auto mt-7 max-w-3xl text-base md:text-lg">
          {landingHeroContent.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 pb-3">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              router.push(landingHeroContent.actions[0].href);
            }}
          >
            {landingHeroContent.actions[0].label} <ArrowRight size={18} />
          </button>

          <button
            className="btn border btn-sm"
            onClick={() => {
              router.push(landingHeroContent.actions[1].href);
            }}
          >
            {landingHeroContent.actions[1].label} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
