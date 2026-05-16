"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot, FaClock, FaFilter } from "react-icons/fa6";
import { Search, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Indore",
    level: "Junior",
    desc: "Build responsive websites and SaaS interfaces using React, Next.js and Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    level: "Mid Level",
    desc: "Create APIs, authentication systems, dashboards and scalable backend services.",
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Indore",
    level: "Fresher",
    desc: "Design clean landing pages, SaaS dashboards, mobile screens and user-friendly interfaces.",
  },
  {
    title: "AI Automation Engineer",
    type: "Contract",
    location: "Remote",
    level: "Mid Level",
    desc: "Build AI workflows, automation tools, chatbots and smart business systems.",
  },
];

const filters = ["All", "Full Time", "Internship", "Contract", "Remote"];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : activeFilter === "Remote"
        ? jobs.filter((job) => job.location === "Remote")
        : jobs.filter((job) => job.type === activeFilter);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf7ff] to-[#fff7f5] pb-24 pt-32">
        {/* Background Blur */}
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#A572CF]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-[#E87779]/20 blur-3xl" />

        <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-[#A572CF]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#A572CF]">
              Careers at Mxpertz
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-[var(--text-primary)]">
              Build your future with a team that creates meaningful digital
              products.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-8 text-[var(--text-secondary)]">
              We are building modern web platforms, SaaS applications, AI
              workflows, dashboards and scalable digital experiences for
              startups and businesses worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn btn-outline-primary btn-lg">
                <a href="#jobs" >
                  Open Positions
                </a>
              </button>

              <button className="btn btn-outline-primary btn-lg">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-3xl font-bold text-[#A572CF]">25+</h3>
                <p className="mt-2 text-sm text-secondary">
                  Team Members
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#E87779]">120+</h3>
                <p className="mt-2 text-sm text-secondary">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#A572CF]">10+</h3>
                <p className="mt-2 text-sm text-secondary">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#E87779]">100%</h3>
                <p className="mt-2 text-sm text-secondary">
                  Remote Friendly
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Half Cut Shape */}
            <div className="absolute bottom-[-40px] left-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-[#A572CF] to-[#E87779] opacity-30 blur-3xl" />

            <div className="relative overflow-hidden rounded-tl-[220px] rounded-bl-[220px] border border-white/40 bg-white shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                  alt=""
                  className="h-56 w-full object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  alt=""
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section  id="jobs" className="bg-white py-12">
        <div className="container-custom">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase  text-[#A572CF]">
                Open Positions
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)]">
                Explore career opportunities
              </h2>
            </div>

            <p className="body-copy-sm max-w-lg text-[16px]">
              Join our growing team and work on modern technologies, scalable
              products and innovative digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            {/* Job Card */}
            <div className="card-job">
              <div className="flex items-start gap-5">
                <div className="flex-center h-16 w-16 rounded-2xl bg-[#A572CF]/10 text-2xl">
                  💼
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    Sales Executive
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="tag-primary">
                      Full Time
                    </span>

                    <span className="tag-secondary">
                      Remote
                    </span>

                    <span className="tag-muted">
                      1-3 Years
                    </span>
                  </div>
                </div>
              </div>

              <button className="btn btn-gradient btn-md">
                Apply Now
              </button>
            </div>

            {/* Job Card */}
            <div className="card-job">
              <div className="flex items-start gap-5">
                <div className="flex-center h-16 w-16 rounded-2xl bg-[#E87779]/10 text-2xl">
                  📦
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    Product Manager
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="tag-primary">
                      Full Time
                    </span>

                    <span className="tag-secondary">
                      Hybrid
                    </span>

                    <span className="tag-muted">
                      2-5 Years
                    </span>
                  </div>
                </div>
              </div>

              <button className="btn btn-gradient btn-md">
                Apply Now
              </button>
            </div>

            {/* Job Card */}
            <div className="card-job">
              <div className="flex items-start gap-5">
                <div className="flex-center h-16 w-16 rounded-2xl bg-[#A572CF]/10 text-2xl">
                  💻
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    MERN Stack Developer
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="tag-primary">
                      Full Time
                    </span>

                    <span className="tag-secondary">
                      On Site
                    </span>

                    <span className="tag-muted">
                      1-4 Years
                    </span>
                  </div>
                </div>
              </div>

              <button className="btn btn-gradient btn-md">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
