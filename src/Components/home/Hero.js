import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8">
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="absolute right-[-120px] top-32 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="mb-5 inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">
            Software Development & Tech Hiring Company
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-black md:text-6xl">
            Build digital products with expert{" "}
            <span className="gradient-text">software teams.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
            We help businesses create modern websites, web apps, mobile apps, AI
            solutions, and also connect companies with skilled interns and tech
            professionals.
          </p>

        

          <div className="mt-8 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--primary)]" />
              Web Apps
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--primary)]" />
              AI Solutions
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[var(--primary)]" />
              Tech Hiring
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-gray-100 bg-white p-4 shadow-2xl">
            <div className="rounded-[24px] bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/15 p-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">
                      Project Dashboard
                    </p>
                    <h3 className="text-2xl font-bold text-black">
                      Smart Business Solutions
                    </h3>
                  </div>
                  <div className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white">
                    Live
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Website Development",
                    "SaaS Product Design",
                    "Internship & Hiring Support",
                    "AI Automation Solutions",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <span className="font-semibold text-black">{item}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--primary)] shadow-sm">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-black p-5 text-white shadow-xl md:block">
            <h4 className="text-3xl font-bold">50+</h4>
            <p className="text-sm text-white/70">Projects Delivered</p>
          </div>

          <div className="absolute -right-4 -top-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block">
            <h4 className="text-3xl font-bold gradient-text">20+</h4>
            <p className="text-sm text-[var(--text-muted)]">Tech Roles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
