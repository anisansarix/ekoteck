export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Consistent Quality",
      desc: "Our rigorous sorting and grading process ensures you get the exact material specification every time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Sourcing",
      desc: "We actively contribute to the circular economy by sourcing post-consumer and industrial plastic waste.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918"
          />
        </svg>
      ),
    },
    {
      title: "Bulk Supply Capability",
      desc: "Equipped to handle large-scale orders with reliable logistics for seamless industrial delivery.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      desc: "Direct-from-source pricing without compromising on material quality or service reliability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(169,222,89,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Header */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6">
              Why Partner With{" "}
              <span className="text-accent">Ekoteck?</span>
            </h2>
            <p className="text-gray-400 font-dm-sans text-lg mb-8 leading-relaxed">
              We bridge the gap between waste and resource. Our dedicated team
              ensures that your raw material needs are met with precision and
              environmental responsibility.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <blockquote className="text-lg italic text-gray-300 font-dm-sans mb-4">
                &quot;Reliability and consistency are at the core of our operations.&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-bold text-white text-sm">
                    Operations Manager
                  </p>
                  <p className="text-xs text-accent">
                    Ekoteck Enterprise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-5">
                <div className="shrink-0 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-rajdhani font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 font-dm-sans text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
