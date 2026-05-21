"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/home";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section bg-surface-soft">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div>
            <span className="badge-primary text-xs font-semibold tracking-[4px]">
              FAQ
            </span>

            <h2 className="heading-section mt-6">
              Questions?
              <br />
              <span className="font-medium text-body-secondary">
                We’ve got answers.
              </span>
            </h2>

            <p className="body-copy-sm mt-5 max-w-xl text-[15px]">
              Clear answers before you start building your next website, SaaS
              product or AI-powered platform with Mxpertz.
            </p>

            {/* Contact Box */}
            <div className="mt-10 rounded-[22px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-body-secondary">
                Still confused?
              </p>

              <h3 className="mt-3 text-xl font-semibold text-body-primary">
                Let’s discuss your project.
              </h3>

              <button className="btn btn-primary btn-sm mt-6 font-medium">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <h3 className="text-base font-semibold text-body-primary p-3">
                      {item.question}
                    </h3>

                    <span className="flex-center h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary">
                      {isOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                      <p className="body-copy-sm text-[15px]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
