import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-150 flex items-center overflow-hidden bg-dark text-white">
      {/* Background Image Overlay - Darken significantly for text contrast */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
        }}
      ></div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl pt-20">
          <h1 className="font-rajdhani font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            WE SUPPLY PLASTIC RAW MATERIALS <br />
            TO{" "}
            <span className="text-accent">
              MANUFACTURERS
            </span>
          </h1>

          <p className="font-dm-sans text-base md:text-lg text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Virgin and recycled polymers: HDPE, LDPE, PP, PET, PVC, ABS,
            recycled pellets and more. We buy directly from producers and
            deliver to your factory simple, fast and at fair prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-accent hover:bg-[#8ccb41] text-[#0E1714] font-rajdhani font-bold text-base py-3 px-6 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(169,222,89,0.4)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Contact US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="#products"
              className="bg-transparent border border-gray-400 hover:bg-white/10 text-white font-rajdhani font-bold text-base py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Marketplace
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Floating Card - Bottom Right */}
        <div className="absolute bottom-1 right-4 md:right-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-sm border border-white/10 hidden lg:block">
          <h4 className="font-rajdhani font-bold text-xl text-white mb-2 flex items-center gap-2">
            Eco-Friendly & Sustainable
          </h4>
          <p className="text-gray-300 text-sm font-dm-sans leading-relaxed">
            Innovative waste management solutions designed to reduce
            environmental impact and promote a cleaner planet.
          </p>
        </div>
      </div>
    </section>
  );
}
