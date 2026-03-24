import { Droplets, Calendar, DollarSign, BarChart3 } from "lucide-react";

const specs = [
  {
    icon: Droplets,
    label: "Product Grade",
    value: "Premium Nigerian Bonny Light Crude",
    sub: "Light Sweet Crude Oil",
  },
  {
    icon: BarChart3,
    label: "Minimum Quantity",
    value: "2,000,000 Barrels",
    sub: "Per Month",
  },
  {
    icon: Calendar,
    label: "Contract Length",
    value: "12-Month Minimum",
    sub: "Strictly No Spot Deals",
  },
  {
    icon: DollarSign,
    label: "Pricing Structure",
    value: "–$8.00 USD / Barrel",
    sub: "Off OPEC Cost (Gross/Net to Buyer)",
  },
];

const ProductProfile = () => {
  return (
    <section id="product" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.25em] font-semibold">
              Product Profile
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nigerian Bonny Light Crude Oil
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            A premium grade light sweet crude sourced directly from Nigerian
            terminals, delivered under strict institutional-grade contractual terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="group bg-card border border-border rounded-lg p-6 hover:border-gold/40 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-dark flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <spec.icon className="text-gold" size={22} />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {spec.label}
              </p>
              <p className="font-display text-xl font-semibold text-foreground mb-1">
                {spec.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">{spec.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductProfile;
