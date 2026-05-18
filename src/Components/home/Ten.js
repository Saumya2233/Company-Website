import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contactFormFields, contactInfoItems } from "@/data/home";

const contactIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Blur */}
      <div className="glow-primary left-[-100px] top-10 h-56 w-56 bg-[var(--primary)]/10 md:h-72 md:w-72" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-primary-compact text-[10px] md:text-xs">
            CONTACT
          </span>

          <h2 className="heading-section mt-5 sm:text-4xl md:mt-6 md:text-5xl">
            Let’s build something amazing
          </h2>

          <p className="body-copy-sm mt-4 md:text-[15px]">
            Have an idea, project or hiring requirement? Let’s connect and
            discuss how Mxpertz can help your business grow faster.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Left Contact Info */}
          <div className="rounded-3xl border border-gray-100 bg-[#faf7ff] p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
              Contact Information
            </h3>

            <p className="body-copy-sm mt-3 md:mt-4 md:text-[15px]">
              Reach out anytime. We usually respond within a few hours.
            </p>

            <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
              {contactInfoItems.map((item) => {
                const Icon = contactIcons[item.type];

                return (
                  <div key={item.label} className="contact-info-item">
                    <div className="flex-center h-11 w-11 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] md:h-12 md:w-12">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-secondary">{item.label}</p>

                      <h4 className="mt-1 text-sm font-medium text-[var(--text-primary)] md:text-base">
                        {item.value}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="form-card">
            <div className="grid gap-5 md:grid-cols-2">
              {contactFormFields.map((field) => (
              <div key={field.label}>
                <label className="form-label">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="form-input"
                />
              </div>
              ))}
            </div>

            <div className="mt-5">
              <label className="form-label">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="form-input"
              />
            </div>

            <div className="mt-5">
              <label className="form-label">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="form-textarea"
              />
            </div>

            <button className="btn btn-primary btn-md mt-6 w-full sm:w-auto">
              Send Message
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
