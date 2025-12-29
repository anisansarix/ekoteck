export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Sourcing",
      desc: "Collecting high-quality post-consumer and industrial plastic waste.",
    },
    {
      num: "02",
      title: "Sorting",
      desc: "Rigorous separation by polymer type and grade to ensure purity.",
    },
    {
      num: "03",
      title: "Processing",
      desc: "Shredding, washing, and extruding into raw material forms.",
    },
    {
      num: "04",
      title: "Quality Check",
      desc: "Testing for melt flow index, density, and consistency.",
    },
    {
      num: "05",
      title: "Delivery",
      desc: "Timely dispatch to your manufacturing facility.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-rajdhani font-bold text-lg uppercase tracking-wider block mb-2">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-dark">
            Our Process
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-dark text-accent flex items-center justify-center font-rajdhani font-bold text-2xl mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform border-4 border-gray-100">
                  {step.num}
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-dm-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
