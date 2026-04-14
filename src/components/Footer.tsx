import { MapPin, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark border-t border-gold/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="font-display text-accent-foreground font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-primary-foreground">
                  Hypia
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-light">
                  Oil & Gas Limited
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-slate-light/70 leading-relaxed">
              Strategic energy procurement and technical management, bridging
              consultancy and scientific excellence for institutional buyers
              worldwide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-[0.15em] mb-4">
              Registered Office
            </h4>
            <div className="space-y-3 font-body text-sm text-slate-light/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>51 Chinbrook Road, London, SE12 9TT, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>info@hypiaoilandgas.com</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-[0.15em] mb-4">
              Legal
            </h4>
            <div className="space-y-3 font-body text-sm text-slate-light/80">
              <div className="flex items-start gap-3">
                <Shield size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  UK GDPR compliant. All personal data processed in accordance
                  with the Data Protection Act 2018.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                Minimum contract duration of 12 months. Pricing set at OPEC rates minus an applicable discount agreed at deal closure. Spot deals not available.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-light/50">
            © {new Date().getFullYear()} Hypia Oil and Gas Limited. Company No.
            11615850. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-slate-light/50">
            <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
