"use client";

import { motion } from "framer-motion";
import { whyChooseFeatures, whyChooseStats } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white pb-3">
      <div className="glow-primary-lg -left-32 top-20 bg-[var(--primary)]/15" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="badge-primary font-semibold"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                letterSpacing: "-8px",
              }}
              whileInView={{
                opacity: 1,
                letterSpacing: "0px",
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              viewport={{ once: true }}
              className="heading-section-lg mt-6 max-w-2xl"
            >
              We create software solutions that help businesses grow faster.
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="body-copy-lg mt-6 max-w-2xl"
            >
              From websites and mobile apps to AI automation and dashboard
              systems, we focus on building scalable and modern digital
              products.
            </motion.p>

            {/* STATS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {whyChooseStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    rotate: 2,
                  }}
                  className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg"
                >
                  <motion.h3
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: 0.7 + index * 0.15,
                      duration: 0.5,
                    }}
                    className="text-4xl font-extrabold text-[var(--primary)]"
                  >
                    {item.value}
                  </motion.h3>

                  <p className="mt-2 text-sm font-medium text-secondary">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    rotateY: 90,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.18,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -12,
                  }}
                  className="card-feature-lg group perspective-[1200px]"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="icon-bubble-lg icon-bubble-hover"
                  >
                    <Icon size={28} />
                  </motion.div>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.2 + index * 0.15,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="mt-6 text-xl font-bold text-[var(--text-primary)]"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.15,
                      duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className="body-copy-sm mt-3"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
