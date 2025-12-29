export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-rajdhani font-bold text-lg uppercase tracking-wider mb-2 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-dark mb-6 leading-tight">
              Leading the Way in <br />
              <span className="text-gray-500">
                Industrial Plastic Recycling
              </span>
            </h2>

            <p className="text-gray-600 font-dm-sans text-lg mb-6 leading-relaxed">
              Ekoteck Enterprise is a premier supplier of recyclable plastic
              materials, serving the manufacturing and industrial sectors. We
              specialize in sourcing, sorting, and processing high-quality
              plastic waste, turning it into valuable raw resources like LD, HD,
              and Raffia grades.
            </p>

            <p className="text-gray-600 font-dm-sans text-lg mb-8 leading-relaxed">
              Our commitment to the circular economy ensures that tonnes of
              plastic are diverted from landfills and reintroduced into the
              production cycle every year. We partner with industries to provide
              consistent, quality-controlled materials that meet your production
              standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-rajdhani font-bold text-2xl text-dark mb-2">
                  1000+ Tonnes
                </h4>
                <p className="text-sm font-dm-sans text-gray-500">
                  Recycled Annually
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-rajdhani font-bold text-2xl text-dark mb-2">
                  Premium Quality
                </h4>
                <p className="text-sm font-dm-sans text-gray-500">
                  99% Pure Material
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-dark font-rajdhani font-bold text-lg hover:text-accent transition-colors group">
              Learn more about our process
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Image/Visuals */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-125 w-full bg-gray-200 group">
              {/* Main Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=2671&auto=format&fit=crop")', // Plastic bottles/recycling center
                }}
              ></div>

              {/* Floating Elements */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-50">
                <p className="font-rajdhani font-bold text-dark">
                  LD / HD / Shredded
                </p>
                <p className="text-xs text-gray-500">All Grades Available</p>
              </div>

              <div className="absolute bottom-8 right-8 bg-accent p-6 rounded-full shadow-lg animate-bounce duration-3000">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#0E1714]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            </div>

            {/* Background decorative blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-(--color-accent-green)/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
