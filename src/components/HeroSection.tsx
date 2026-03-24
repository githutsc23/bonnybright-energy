import heroImg from "@/assets/hero-offshore.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Offshore drilling platform at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.25em] font-semibold">
              Established 2018 · UK Registered
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Strategic Energy Procurement &{" "}
            <span className="text-gradient-gold">Technical Management</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-slate-light leading-relaxed mb-4 max-w-2xl">
            Bridging the gap between management consultancy and technical
            scientific excellence since 2018.
          </p>

          <p className="font-body text-base text-slate-light/80 mb-10 max-w-2xl">
            25+ years of combined leadership experience in compliance, finance,
            and energy logistics — delivering premium Nigerian Bonny Light Crude
            to institutional buyers worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#product"
              className="px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded hover:bg-gold-dark transition-colors text-sm tracking-wide"
            >
              View Product Profile
            </a>
            <a
              href="#sop"
              className="px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded hover:bg-gold/10 transition-colors text-sm tracking-wide"
            >
              Our Procedures
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-gold/60" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
