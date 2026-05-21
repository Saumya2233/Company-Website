import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="section-lg section-lavender relative overflow-hidden">
      <div className="glow-primary-lg right-[-120px] top-[-120px] bg-primary/15" />
      <div className="glow-secondary bottom-[-120px] left-[-120px] h-80 w-80" />

      <div className="container-custom">
        {/* Heading */}
        <div className="section-heading">
          <span className="badge-primary font-semibold">
            Latest Insights & Articles
          </span>

          <h2 className="mt-6 max-w-4xl text-2xl font-semibold leading-tight text-body-primary md:text-3xl">
            Explore Premium Tech Blogs &
            <span className="text-primary"> Industry Insights</span>
          </h2>

          <p className="body-copy-lg mt-6 max-w-3xl">
            Discover AI trends, SaaS strategies, modern web technologies, mobile
            app innovations, and digital transformation insights from MXpertz.
          </p>
        </div>

        {/* Scroll Blogs */}
        <div className="content-stack flex snap-x gap-6 overflow-x-auto pb-6 scrollbar-hide md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative min-w-[min(280px,calc(100vw-48px))] snap-center overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl md:min-w-[320px]"
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
                <div className="absolute left-6 top-6 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm font-medium text-white">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold leading-snug transition duration-300 group-hover:text-secondary">
                    {blog.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
                    {blog.description}
                  </p>

                  <button className="btn mt-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md hover:bg-primary hover:text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Content */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <span className="badge-primary">Why Read Our Blogs</span>

          <h3 className="mt-5 text-3xl font-bold leading-tight text-body-primary md:text-4xl">
            Learn, Explore & Stay Ahead In Technology
          </h3>

          <p className="body-copy-lg mt-6 leading-8 text-body-secondary">
            Our blogs are crafted to help startups, developers and businesses
            understand the latest trends in AI, SaaS, web development, mobile
            applications and digital transformation. We share practical
            insights, expert strategies and modern technology solutions that
            help brands grow faster in the digital world.
          </p>

          <p className="body-copy mt-4 leading-8 text-body-secondary">
            From product development tips to scalable architecture and UI/UX
            best practices, MXpertz delivers valuable knowledge that keeps your
            business future-ready and innovation-driven.
          </p>
        </div>
      </div>
    </section>
  );
}
