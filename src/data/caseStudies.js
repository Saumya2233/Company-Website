import { CheckCircle, Clock, TrendingUp, Users } from "lucide-react";

export const caseStudies = [
  {
    title: "SaaS Admin Dashboard",
    category: "Web Application",
    desc: "A scalable dashboard built for managing users, analytics, subscriptions and business operations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    results: ["45% faster workflow", "Real-time analytics", "Role based access"],
  },
  {
    title: "AI Hiring Platform",
    category: "AI Automation",
    desc: "A smart hiring system that helps companies shortlist candidates and manage recruitment faster.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    results: ["60% time saved", "Automated screening", "Better candidate tracking"],
  },
  {
    title: "E-commerce Website",
    category: "Online Store",
    desc: "A modern e-commerce website with product listing, cart, checkout and admin management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    results: ["Responsive UI", "Fast checkout", "SEO optimized"],
  },
];

export const caseStudyStats = [
  { title: "Projects Delivered", value: "50+", icon: CheckCircle },
  { title: "Client Growth", value: "3x", icon: TrendingUp },
  { title: "Happy Clients", value: "30+", icon: Users },
  { title: "Faster Delivery", value: "40%", icon: Clock },
];
