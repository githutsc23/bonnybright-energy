import { Building2, Users, Briefcase } from "lucide-react";

const directors = [
  { name: "Adetokunbo Olufemi Akinjinmi", role: "Founder & Director" },
  { name: "Erreg Ahmed", role: "Director" },
  { name: "Olufemi Micheal Akinjinmi", role: "Director" },
];

const AboutGovernance = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.25em] font-semibold">
              About & Governance
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Corporate Profile
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-gold" size={20} />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Company Details
                </h3>
              </div>
              <dl className="space-y-3 font-body text-sm">
                {[
                  ["Legal Name", "Hypia Oil and Gas Limited"],
                  ["Type", "UK Private Limited Company"],
                  ["Company No.", "11615850"],
                  ["Incorporated", "10 October 2018"],
                  ["Registered Office", "51 Chinbrook Road, London, SE12 9TT, United Kingdom"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="text-foreground font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-gold" size={20} />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  SIC Classifications
                </h3>
              </div>
              <div className="space-y-3 font-body text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">70229</span>
                  <span className="text-foreground font-medium text-right">
                    Management Consultancy Activities
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">74909</span>
                  <span className="text-foreground font-medium text-right">
                    Other Professional, Scientific & Technical Activities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Board */}
          <div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-gold" size={20} />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Board of Directors
                </h3>
              </div>
              <div className="space-y-5">
                {directors.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-gold font-bold text-lg">
                        {d.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body text-foreground font-semibold text-sm">
                        {d.name}
                      </p>
                      <p className="font-body text-muted-foreground text-xs">
                        {d.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGovernance;
