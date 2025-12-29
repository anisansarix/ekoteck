import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "LD Plastic",
      code: "LDPE",
      desc: "Low-Density Polyethylene suitable for film applications and flexible packaging. Clean, sorted, and processed for industrial use.",
      icon: "https://images.unsplash.com/photo-1606037150583-fb842a55bae7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "HD Plastic",
      code: "HDPE",
      desc: "High-Density Polyethylene offering strength and durability. Ideal for pipe manufacturing, containers, and sturdy plastic goods.",
      icon: "https://images.unsplash.com/photo-1721622248593-c24c83b830c7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shredded Plastic",
      code: "MIXED",
      desc: "Pre-shredded plastic materials ready for immediate melting and molding. Available in various colors and grades.",
      icon: "https://images.unsplash.com/photo-1563174530-b45df9598860?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Raffia Plastic",
      code: "PP",
      desc: "Polypropylene Raffia grade material, perfect for woven sacks, ropes, and industrial textiles branding.",
      icon: "https://images.unsplash.com/photo-1680357680725-f350480aee35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-rajdhani font-bold text-lg uppercase tracking-wider mb-2 block">
            Our Materials
          </span>
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-dark mb-4">
            Industrial Grade{" "}
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-(--color-accent-green)/30 transform -skew-x-12 rounded-sm"></span>
              <span className="relative">Plastic Solutions</span>
            </span>
          </h2>
          <p className="text-gray-600 font-dm-sans text-lg">
            We supply high-quality recycled plastic grades tailored for
            manufacturing efficiency and product durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${product.icon}")` }}
                ></div>
                <div className="absolute top-4 right-4 z-20 text-dark bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold font-rajdhani border border-gray-200">
                  {product.code}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow relative">
                {/* Floating Icon Placeholder */}
                <div className="absolute -top-6 left-6 bg-accent w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#0E1714]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.75h3m-3 0h-3m-3 0h-3m3 3.75h3m-3 0h-3m-3 0h-3M3.75 7.5h16.5M3.75 7.5V4.875a1.5 1.5 0 011.5-1.5h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 013.257-.151 17.902 17.902 0 013.257.151c-.04.62.469 1.124 1.09 1.124H18.75a1.5 1.5 0 011.5 1.5V7.5"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-rajdhani font-bold text-dark mt-2 mb-3 group-hover:text-accent transition-colors inline-flex items-center gap-2">
                  {product.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-6 grow">
                  {product.desc}
                </p>

                <Link
                  href="#contact"
                  className="text-dark font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors font-rajdhani border-t border-gray-100 pt-4 flex items-center justify-between"
                >
                  Request Quote
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
