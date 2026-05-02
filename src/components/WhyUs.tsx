const features = [
  {
    title: "Project Manager Dedicated",
    body: "One PM handles your project from start to finish — coordinating suppliers, vendors, and timelines.",
  },
  {
    title: "Supply Chain Control",
    body: "We manage sourcing, imports, and delivery so materials arrive on time and on budget.",
  },
  {
    title: "Licensed & Insured",
    body: "Fully licensed in the state of Florida. Operating with insurance, compliance, and professionalism.",
  },
  {
    title: "Free Estimates",
    body: "No-cost project estimates — know exactly what to expect before committing to anything.",
  },
  {
    title: "B2B Focused",
    body: "Built for contractors, developers, flippers, and real estate investors. We understand your language.",
  },
  {
    title: "Digital Payments Accepted",
    body: "Credit cards, Stripe, Square, Zelle, bank transfers, and financing options available.",
  },
  {
    title: "On-Time Delivery",
    body: "We don't miss deadlines. Our logistics infrastructure is built around your schedule.",
  },
  {
    title: "Bilingual Team",
    body: "English and Spanish speaking team, serving the diverse Central Florida business community.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] font-medium tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Full Service
          </p>
          <h2 className="font-serif font-medium text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            What We Deliver
          </h2>
          <p className="font-sans text-base font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
            From the first call to the final delivery — we handle every step so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 divide-x divide-y divide-white/10">
          {features.map((f) => (
            <div key={f.title} className="p-8 hover:bg-white/[0.03] transition-colors duration-300">
              <h3 className="font-serif text-base font-medium text-white mb-3">{f.title}</h3>
              <p className="font-sans text-sm font-light text-white/40 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
