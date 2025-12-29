export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#f0f9e8] rounded-[3rem] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-dark font-bold font-rajdhani text-xs tracking-wider">
                  ECO-FRIENDLY MISSION
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-dark mb-6">
                Committed to a <br />
                <span className="text-accent">
                  Greener Future
                </span>
              </h2>

              <p className="text-gray-700 font-dm-sans text-lg mb-8 leading-relaxed">
                At Ekoteck, we don&apos;t just sell plastic; we promote a circular
                economy. By reintegrating post-consumer waste into the supply
                chain, we reduce the demand for virgin plastics and lower carbon
                footprints across the industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-dark font-bold text-lg">
                      Reduce Landfill Waste
                    </h4>
                    <p className="text-sm text-gray-500">
                      Diverting thousands of tons annually.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-dark font-bold text-lg">
                      Lower Energy Use
                    </h4>
                    <p className="text-sm text-gray-500">
                      Recycling uses significantly less energy than producing
                      virgin plastic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-100 lg:h-auto min-h-125">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2513&auto=format&fit=crop")', // Nature/Recycling fusion
                }}
              ></div>
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>

              {/* SVG Recycling Icon Overlay */}
              <div className="absolute bottom-0 left-0 p-12 drop-shadow-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-32 h-32 opacity-80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
