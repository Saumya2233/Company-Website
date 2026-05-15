import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const links = {
  Company: ["About Us", "Services", "Case Study", "Portfolio", "Career"],
  Services: [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "SaaS Products",
    "QA Testing",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#08050f] pt-20 text-white">
      <div className="container-custom">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold">MXPERTZ</h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              We build modern websites, mobile apps, SaaS products and
              AI-powered solutions for growing businesses.
            </p>

            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[var(--primary)]"
                  >
                    <Icon size={16} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>

              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-sm text-white/60 transition hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-white/60">
              <p className="flex gap-3">
                <Mail size={18} className="text-[var(--primary)]" />
                hello@mxpertz.com
              </p>

              <p className="flex gap-3">
                <Phone size={18} className="text-[var(--primary)]" />
                +91 98765 43210
              </p>

              <p className="flex gap-3">
                <MapPin size={18} className="text-[var(--primary)]" />
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 md:flex-row">
          <p>© 2026 Mxpertz. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
