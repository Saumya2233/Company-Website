export default function BlogPage() {
  const blogs = [
    {
      title: "AI in Healthcare Revolution",
      description:
        "Discover how AI-powered healthcare systems improve patient management and hospital automation.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      category: "AI Solutions",
    },
    {
      title: "Future of SaaS Platforms",
      description:
        "Explore scalable SaaS architectures and modern cloud-based business systems.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      category: "SaaS Products",
    },
    {
      title: "Next.js for Enterprise Apps",
      description:
        "Learn why Next.js is becoming the preferred framework for scalable applications.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      category: "Web Development",
    },
    {
      title: "Automation in Logistics",
      description:
        "AI and automation are helping logistics businesses optimize workflows efficiently.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      category: "Automation",
    },
    {
      title: "Modern Mobile App Trends",
      description:
        "Explore mobile app experiences, AI integrations, and future-ready interfaces.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile Apps",
    },
  ];

  return (
    <section className="section-lg section-lavender relative overflow-hidden">
      <div className="glow-primary-lg right-[-120px] top-[-120px] bg-[var(--primary)]/15" />
      <div className="glow-secondary bottom-[-120px] left-[-120px] h-80 w-80" />

      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <span className="badge-primary font-semibold">
            Latest Insights & Articles
          </span>

          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[var(--text-primary)] md:text-3xl">
            Explore Premium Tech Blogs &
            <span className="text-[var(--primary)]"> Industry Insights</span>
          </h2>

          <p className="body-copy-lg mt-6 max-w-3xl">
            Discover AI trends, SaaS strategies, modern web technologies, mobile
            app innovations, and digital transformation insights from MXpertz.
          </p>
        </div>

        {/* Scroll Blogs */}
        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative min-w-[280px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl md:min-w-[320px]"
            >
              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Category */}
                <div className="absolute left-6 top-6 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm font-medium text-white">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold leading-snug transition duration-300 group-hover:text-[var(--secondary)]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
                    {blog.description}
                  </p>

                  <button className="btn mt-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md hover:bg-[var(--primary)] hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
