import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const footerCompany = {
  name: "MXPERTZ",
  description:
    "We build modern websites, mobile apps, SaaS products and AI-powered solutions for growing businesses.",
  copyright: "© 2026 Mxpertz. All rights reserved.",
};

export const footerLinkGroups = {
  Company: ["About Us", "Services", "Case Study", "Portfolio", "Career"],
  Services: [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "SaaS Products",
    "QA Testing",
  ],
};

export const footerSocialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Instagram", icon: FaInstagram },
  { label: "Twitter", icon: FaTwitter },
];

export const footerContactItems = [
  { label: "Email", value: "hello@mxpertz.com", type: "email" },
  { label: "Phone", value: "+91 98765 43210", type: "phone" },
  { label: "Location", value: "Indore, Madhya Pradesh", type: "location" },
];

export const footerLegalLinks = ["Privacy Policy", "Terms & Conditions"];
