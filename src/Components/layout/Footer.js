import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {images} from "@/constant/image"
import {
  footerCompany,
  footerContactItems,
  footerLegalLinks,
  footerLinkGroups,
  footerSocialLinks,
} from "@/data/footer";

const footerContactIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export default function Footer() {
  return (
    <footer className="bg-[#08050f] pt-14 text-white md:pt-20">
      <div className="container-custom">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
                                       src={images.whitelogo}
                                       alt="Mxpertz Infolabs"
                                       fill
                                       priority
                                       className="object-contain transition-all duration-300"
                                   />

            <p className="mt-4 text-sm leading-7 text-white/60">
              {footerCompany.description}
            </p>

            <div className="mt-6 flex gap-3">
              {footerSocialLinks.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex-center h-10 w-10 rounded-full bg-white/10 text-white transition hover:bg-primary"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinkGroups).map(([title, items]) => (
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
              {footerContactItems.map((item) => {
                const Icon = footerContactIcons[item.type];

                return (
                  <p key={item.label} className="flex gap-3">
                    <Icon size={18} className="text-primary" />
                    {item.value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 md:flex-row">
          <p>{footerCompany.copyright}</p>

          <div className="flex gap-6">
            {footerLegalLinks.map((item) => (
              <span key={item} className="cursor-pointer hover:text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
