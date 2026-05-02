export default function WhyUs() {
  return (
    <section id="about" className="bg-white border-b border-[#E5E5E0]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="font-sans text-[9px] font-medium tracking-[0.55em] uppercase text-[#C9A96E] mb-6">
              Why JC Solutions
            </p>
            <h2 className="font-serif font-medium text-[#0A0A0A] leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Where Logistics<br />
              Meets Execution.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed">
              JC Solutions Enterprise LLC bridges the operational gap between material sourcing and final delivery — giving construction companies, developers, and real estate investors a single point of contact for complex, multi-stage projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border border-[#E5E5E0] divide-y md:divide-y-0 md:divide-x divide-[#E5E5E0]">
          {[
            {
              num: "01",
              title: "Project Management",
              body: "Certified project managers with expertise in imports, distribution, and end-to-end process control. Nothing falls through the cracks — ever.",
            },
            {
              num: "02",
              title: "Supply Chain Control",
              body: "We close the gap between material sourcing and job-site delivery — reducing lead times and eliminating costly schedule delays.",
            },
            {
              num: "03",
              title: "B2B Solutions",
              body: "Built for construction, remodeling, flipping, and real estate companies. We understand your timelines, your budgets, and your standards.",
            },
          ].map((p) => (
            <div key={p.num} className="p-10 bg-white hover:bg-[#F7F7F5] transition-colors duration-300">
              <p className="font-serif text-4xl font-light text-[#E5E5E0] mb-8 leading-none">{p.num}</p>
              <h3 className="font-serif text-xl font-medium text-[#0A0A0A] mb-4">{p.title}</h3>
              <p className="font-sans text-sm font-light text-[#6B6B6B] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-[#C9A96E]" />
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#6B6B6B]">
              2774 E Colonial Drive, Suite C #1092, Orlando, FL 32803
            </p>
          </div>
          <a href="#contact"
            className="font-sans text-[10px] font-medium tracking-[0.35em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300">
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
