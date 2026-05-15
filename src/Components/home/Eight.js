"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we start?",
    answer:
      "We can start with a quick discovery call, understand your requirements and define the roadmap before development begins.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we work with startups, businesses and enterprises to build scalable digital products.",
  },
  {
    question: "Can you build AI automation systems?",
    answer:
      "Yes, we build AI-powered tools, automation workflows and smart integrations.",
  },
  {
    question: "Do you provide dedicated developers?",
    answer:
      "Yes, you can hire developers on full-time, part-time or hourly basis.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Node.js, Firebase, PostgreSQL and modern cloud technologies.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f8f7ff] py-8">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-xs font-semibold tracking-[4px] text-[var(--primary)]">
              FAQ
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--text-primary)] md:text-4xl">
              Questions?
              <br />
              <span className="font-medium text-[var(--text-secondary)]">
                We’ve got answers.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)]">
              Clear answers before you start building your next website, SaaS
              product or AI-powered platform with Mxpertz.
            </p>

            {/* Contact Box */}
            <div className="mt-10 rounded-[22px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Still confused?
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">
                Let’s discuss your project.
              </h3>

              <button className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]">
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
                    <h3 className="text-base font-semibold text-[var(--text-primary)] p-3">
                      {item.question}
                    </h3>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      {isOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                      <p className="text-[15px] leading-7 text-[var(--text-secondary)]">
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
