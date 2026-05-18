import { Clock, ShieldCheck, Users } from "lucide-react";

export const fallbackServiceImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop";

export const defaultServiceFeatures = [
  "Responsive Design",
  "Clean Code Structure",
  "Performance Optimization",
  "API Integration",
  "Testing & QA",
  "Long-Term Support",
];

export const serviceFeatureStats = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" },
  { value: "100+", label: "Successful Projects" },
];

export const serviceWhyChooseCards = [
  {
    title: "Expert Development Team",
    desc: "Experienced developers following modern architecture, clean coding standards, and scalable development practices.",
    icon: Users,
  },
  {
    title: "Fast & Transparent Delivery",
    desc: "Smooth execution with proper planning, milestone tracking, timely updates, and agile workflows.",
    icon: Clock,
  },
  {
    title: "Quality Testing & Support",
    desc: "Reliable testing, optimization, maintenance, and long-term support for stable business growth.",
    icon: ShieldCheck,
  },
];

export const serviceWhyChooseStats = [
  { value: "50+", label: "Successful Projects" },
  { value: "24/7", label: "Technical Support" },
];
