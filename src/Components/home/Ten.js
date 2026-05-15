import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white p-8">
      {/* Background Blur */}
      <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-5 py-2 text-xs font-semibold tracking-[4px] text-[var(--primary)]">
            CONTACT
          </span>

          <h2 className="mt-6 text-xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
            Let’s build something
           
            amazing 
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-[var(--text-secondary)]">
            Have an idea, project or hiring requirement? Let’s connect and
            discuss how Mxpertz can help your business grow faster.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Contact Info */}
          <div className="rounded-[32px] border border-gray-100 bg-[#faf7ff] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
              Contact Information
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)]">
              Reach out anytime. We usually respond within a few hours.
            </p>

            <div className="mt-10 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>

                  <h4 className="mt-1 font-medium text-[var(--text-primary)]">
                    hello@mxpertz.com
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Phone</p>

                  <h4 className="mt-1 font-medium text-[var(--text-primary)]">
                    +91 98765 43210
                  </h4>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Location
                  </p>

                  <h4 className="mt-1 font-medium text-[var(--text-primary)]">
                    Indore, Madhya Pradesh
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 outline-none transition focus:border-[var(--primary)]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="h-14 w-full rounded-2xl border border-gray-200 px-5 outline-none transition focus:border-[var(--primary)]"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border border-gray-200 p-5 outline-none transition focus:border-[var(--primary)]"
              />
            </div>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]">
              Send Message
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
