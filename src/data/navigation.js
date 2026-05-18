import { services } from "@/data/service";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: services.map((service) => ({
      name: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { name: "Case Study", href: "/caseStudy" },
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/carrer" },
];
