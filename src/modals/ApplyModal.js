"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ApplyModal({ isOpen, onClose, job }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="fixed left-1/2 top-1/2 z-[111] max-h-[90vh] w-[calc(100%-24px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] bg-white p-5 shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-5 border-b border-gray-100 pb-5">
              <div>
                <span className="section-tag">Application</span>
                <h2 className="heading-md mt-4">
                  Apply for {job?.title}
                </h2>

                <p className="description-sm mt-2">
                  Fill out the form below to apply.
                </p>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-primary transition hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input"
                  />
                </div>

                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="input"
                  />
                </div>

                <div>
                  <label className="form-label">Resume</label>
                  <input type="file" className="input pt-3" />
                </div>
              </div>

              <div>
                <label className="form-label">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about yourself..."
                  className="min-h-32 w-full resize-none rounded-2xl border border-gray-200 bg-white p-5 text-sm outline-none transition-all duration-300 focus:border-[#A572CF] focus:ring-4 focus:ring-[#A572CF]/10"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline-primary btn-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-gradient btn-lg">
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
