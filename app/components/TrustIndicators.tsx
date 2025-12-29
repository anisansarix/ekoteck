export default function TrustIndicators() {
  const indicators = [
    {
      text: "Global Industrial Standards",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.433c-1.342.949-2.108 2.686-2.025 4.324.032.617.275 1.205.698 1.638M4 4h.01"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.875 19.5h-.75a2.25 2.25 0 0 1-2.25-2.25V13.5a2.25 2.25 0 0 1 2.25-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      text: "Premium Quality Control",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
      text: "Sustainable Supply Chain",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
    },
    {
      text: "Bulk Order Capability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3.75h3m-3 0h-3m-3 0h-3m3 3.75h3m-3 0h-3m-3 0h-3M3.75 7.5h16.5M3.75 7.5V4.875a1.5 1.5 0 011.5-1.5h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 013.257-.151 17.902 17.902 0 013.257.151c-.04.62.469 1.124 1.09 1.124H18.75a1.5 1.5 0 011.5 1.5V7.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-accent py-8 relative -mt-4 z-30 shadow-lg mx-4 md:mx-12 rounded-t-xl md:rounded-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 px-4 md:px-12">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#0E1714] font-rajdhani font-bold text-lg hover:scale-105 transition-transform cursor-default"
            >
              <div className="p-2 bg-black/10 rounded-full">{item.icon}</div>
              <span className="uppercase tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
