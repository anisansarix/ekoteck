import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-dark relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-(--color-accent-green)/5 -skew-x-12 transform translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--color-accent-green)/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-rajdhani font-bold text-white mb-6 leading-tight">
          Ready to Optimize Your <br />
          <span className="text-accent">
            Material Supply?
          </span>
        </h2>

        <p className="text-gray-300 font-dm-sans text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Partner with Ekoteck Enterprise for reliable, high-quality recycled
          plastic solutions. Let&apos;s build a sustainable future together.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="mailto:ekoteck32@gmail.com"
            className="bg-accent hover:bg-[#8ccb41] text-[#0E1714] font-rajdhani font-bold text-xl py-5 px-10 rounded-full transition-all hover:shadow-[0_0_30px_rgba(169,222,89,0.5)] transform hover:-translate-y-1 w-full md:w-auto"
          >
            Get a Quote
          </Link>
          <Link
            href="tel:+919998126775"
            className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-[#0E1714] font-rajdhani font-bold text-xl py-5 px-10 rounded-full transition-all transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-2"
          >
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
