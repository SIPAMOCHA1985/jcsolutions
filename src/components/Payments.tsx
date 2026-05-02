const paymentMethods = [
  {
    title: "Credit & Debit Cards",
    items: ["Visa", "Mastercard", "American Express", "Discover"],
  },
  {
    title: "Digital Payments",
    items: ["Stripe", "Square", "Zelle", "Cash App", "Apple Pay"],
  },
  {
    title: "Financing Available",
    items: ["0% Interest Plans", "Monthly Installments", "Flexible Terms", "Quick Approval"],
  },
  {
    title: "Traditional",
    items: ["Personal Check", "Bank Transfer", "Wire Transfer", "ACH"],
  },
];

export default function Payments() {
  return (
    <section id="payments" className="bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-14 py-28">
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] font-medium tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Flexible Options
          </p>
          <h2 className="font-serif font-medium text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            We Accept
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
          {paymentMethods.map((p) => (
            <div key={p.title} className="bg-[#0f0f0f] p-10">
              <h3 className="font-serif text-lg font-medium text-white mb-6">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span className="font-sans text-sm font-light text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#C9A96E]/20 p-10 text-center">
          <p className="font-sans text-[10px] font-medium tracking-[0.4em] uppercase text-[#C9A96E] mb-3">
            Special Offer
          </p>
          <h3 className="font-serif text-2xl font-medium text-white mb-3">
            0% Interest Financing Available
          </h3>
          <p className="font-sans text-sm font-light text-white/40 max-w-xl mx-auto">
            Start your project today with flexible monthly payments. Subject to approval. Ask us about financing options during your free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
