"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot, FaClock } from "react-icons/fa6";
import { Search, MapPin } from "lucide-react";
import JobModal from "@/modals/JobDescriptionsModal";
import ApplyModal from "@/modals/ApplyModal";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [applyModal, setApplyModal] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesFilter =
      activeFilter === "All"
        ? true
        : activeFilter === "Remote"
          ? job.location === "Remote"
          : job.type === activeFilter;

    const search = searchTerm.trim().toLowerCase();
    const matchesSearch =
      search.length === 0 ||
      job.title.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.type.toLowerCase().includes(search) ||
      job.level.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  const openJobDetails = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf7ff] to-[#fff7f5] pb-24 pt-32">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#A572CF]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-[#E87779]/20 blur-3xl" />

        <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="section-tag">Careers at Mxpertz</span>

            <h1 className="heading-xl mt-7 max-w-3xl">
              Build your future with a team that creates meaningful digital
              products.
            </h1>

            <p className="description-lg mt-6 max-w-xl">
              We are building modern web platforms, SaaS applications, AI
              workflows, dashboards and scalable digital experiences for
              startups and businesses worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#jobs" className="btn btn-outline-primary btn-lg">
                Open Positions
              </a>

              <button className="btn btn-outline-primary btn-lg">
                Learn More
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["25+", "Team Members", "#A572CF"],
                ["120+", "Projects Delivered", "#E87779"],
                ["10+", "Countries Served", "#A572CF"],
                ["100%", "Remote Friendly", "#E87779"],
              ].map(([value, label, color]) => (
                <div key={label}>
                  <h3
                    className="text-3xl font-medium leading-none"
                    style={{ color }}
                  >
                    {value}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-[-40px] left-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-[#A572CF] to-[#E87779] opacity-30 blur-3xl" />

            <div className="relative overflow-hidden rounded-bl-[160px] rounded-tl-[160px] border border-white/40 bg-white shadow-2xl md:rounded-bl-[220px] md:rounded-tl-[220px]">
              <div className="grid grid-cols-3 gap-0">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-40 w-full object-cover md:h-56"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jobs" className="relative bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="-mt-28 rounded-[28px] border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur-xl md:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Search jobs
                </label>
                <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 transition focus-within:border-[var(--primary)] focus-within:ring-4 focus-within:ring-[var(--primary)]/10">
                  <Search size={18} className="shrink-0 text-[var(--primary)]" />
                  <input
                    type="text"
                    placeholder="Search by title, location, type, or level"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-full w-full bg-transparent text-sm text-primary outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`h-11 rounded-full px-4 text-sm font-medium transition ${
                      activeFilter === filter
                        ? "bg-[var(--primary)] text-white shadow-[var(--shadow-primary)]"
                        : "border border-gray-200 bg-white text-secondary hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Open Positions</span>
              <h2 className="heading-lg mt-3">Explore career opportunities</h2>
            </div>

            <p className="description-md max-w-xl">
              Find roles designed for people who like clean products, practical
              engineering, and thoughtful collaboration.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job, index) => (
              <motion.article
                key={`${job.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group flex h-full min-h-[330px] flex-col rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A572CF]/15 to-[#E87779]/15 text-xl text-[var(--primary)]">
                    <FaBriefcase />
                  </div>

                  <span className="rounded-full bg-[#A572CF]/10 px-3 py-1.5 text-xs font-medium text-[#A572CF]">
                    {job.level}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="card-title-lg">{job.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                    Mxpertz Infolabs · {job.type}
                  </p>
                </div>

                <p className="description-sm mt-4 line-clamp-3">{job.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E87779]/10 px-3 py-2 text-xs font-medium text-[#E87779]">
                    <FaLocationDot />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
                    <FaClock />
                    {job.type}
                  </span>
                </div>

                <div className="mt-auto pt-7">
                  <button
                    onClick={() => openJobDetails(job)}
                    className="btn btn-outline-primary btn-md w-full"
                  >
                    View More
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="mt-10 rounded-[24px] border border-dashed border-gray-200 bg-gray-50 p-10 text-center">
              <MapPin className="mx-auto text-[var(--primary)]" size={28} />
              <h3 className="mt-4 text-xl font-medium text-primary">
                No roles found
              </h3>
              <p className="description-sm mx-auto mt-2 max-w-md">
                Try a different search term or switch the filter to see more
                available positions.
              </p>
            </div>
          )}
        </div>
      </section>

      <JobModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        job={selectedJob}
        onApply={() => {
          setOpenModal(false);
          setApplyModal(true);
        }}
      />

      <ApplyModal
        isOpen={applyModal}
        onClose={() => setApplyModal(false)}
        job={selectedJob}
      />
    </>
  );
}
