"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, MapPin, Clock } from "lucide-react";
import { jobResponsibilities } from "@/data/jobDetails";
import { motionTiming, premiumEase } from "@/constants/motion";

export default function JobModal({ isOpen, onClose, job, onApply }) {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: motionTiming.modal, ease: premiumEase }}
            className="fixed left-1/2 top-1/2 z-[101] w-[95%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-white p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-full bg-[#A572CF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#A572CF]">
                  Career Opportunity
                </span>

                <h2 className="mt-5 text-2xl  text-body-primary">
                  {job.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tags */}
            {/* <div className="mt-7 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-[#A572CF]/10 px-4 py-2 text-sm font-medium text-[#A572CF]">
                <Briefcase size={16} />
                {job.type}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#E87779]/10 px-4 py-2 text-sm font-medium text-[#E87779]">
                <MapPin size={16} />
                {job.location}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                <Clock size={16} />
                {job.level}
              </div>
            </div> */}

            {/* Description */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-body-primary">
                Job Description
              </h3>

              <p className="mt-4 leading-8 text-body-secondary">
                {job.desc}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-body-primary">
                Responsibilities
              </h3>

              <ul className="mt-5 space-y-4">
                {jobResponsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-secondary"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#A572CF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button onClick={onApply} className="btn btn-gradient btn-lg">
                Apply Now
              </button>

              <button
                onClick={onClose}
                className="btn btn-outline-primary btn-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
