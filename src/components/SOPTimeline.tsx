const steps = [
  {
    num: "01",
    title: "Letter of Intent",
    desc: "Buyer submits LOI and Company Profile to initiate the procurement process.",
  },
  {
    num: "02",
    title: "Full Corporate Offer",
    desc: "Hypia issues a Full Corporate Offer (FCO) with verified terms and conditions.",
  },
  {
    num: "03",
    title: "Sale & Purchase Agreement",
    desc: "Both parties negotiate and sign the Sale & Purchase Agreement (SPA).",
  },
  {
    num: "04",
    title: "Banking Instruments",
    desc: "Buyer's bank issues a non-operative SBLC/DLC in favour of the seller.",
  },
  {
    num: "05",
    title: "Proof of Product",
    desc: "Hypia provides Proof of Product (POP) documentation to activate the banking instrument.",
  },
  {
    num: "06",
    title: "Loading & Inspection",
    desc: "Crude is loaded at the Nigerian terminal with SGS inspection and quality certification.",
  },
  {
    num: "07",
    title: "Payment & Title Transfer",
    desc: "Payment via MT103 against shipping documents and full Title Transfer to buyer.",
  },
];

const SOPTimeline = () => {
  return (
    <section id="sop" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.25em] font-semibold">
              Standard Operating Procedures
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Transaction Process
          </h2>
          <p className="font-body text-slate-light max-w-2xl mx-auto text-lg">
            A structured, compliant, and transparent seven-step process from
            initial engagement to title transfer.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gold/20" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 md:gap-8">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-navy-light border-2 border-gold/40 flex items-center justify-center">
                  <span className="font-display text-gold font-bold text-sm md:text-base">
                    {step.num}
                  </span>
                </div>
                {/* Content */}
                <div className="pt-2 md:pt-3 pb-2">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-slate-light text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOPTimeline;
