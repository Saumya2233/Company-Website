import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/constant/image";

export default function Hero() {
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
          Software Development • AI Solutions • Tech Hiring
        </span>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-black md:text-6xl lg:text-7xl">
          Building Digital Solutions That Help Businesses Grow
        </h1>

        <p className="body-copy mx-auto mt-7 max-w-3xl text-base md:text-lg">
          Mxpertz creates modern websites, web applications, AI-powered
          products, and connects companies with skilled interns and tech
          professionals.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 pb-3">
          <Link
            href="/contact"
            className="btn btn-dark btn-lg"
          >
            Get Started <ArrowRight size={18} />
          </Link>

          <Link
            href="/services"
            className="btn btn-outline btn-lg text-black shadow-md"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
