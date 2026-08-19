import { Zap, Github, Twitter, Linkedin, Disc as Discord } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Dashboard', href: '#product' },
      { name: 'Security', href: '#security' },
      { name: 'Pricing', href: '#pricing' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
  };

  return (
    <footer className="bg-velora-bg border-t border-velora-border/60 text-slate-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-velora-accent to-velora-accent-teal p-0.5 flex items-center justify-center shadow-lg shadow-velora-accent/20">
                <div className="w-full h-full bg-velora-bg rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-velora-accent" />
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                VELORA
              </span>
            </a>

            <p className="text-velora-muted text-sm leading-relaxed max-w-sm">"Your money. Your momentum."</p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              VELORA is a fictional modern fintech web application designed and built for portfolio demonstration purposes. No actual financial or banking services are provided.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-velora-surface border border-velora-border flex items-center justify-center text-slate-300 hover:text-velora-accent hover:border-velora-accent/40 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-velora-surface border border-velora-border flex items-center justify-center text-slate-300 hover:text-velora-accent hover:border-velora-accent/40 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-velora-surface border border-velora-border flex items-center justify-center text-slate-300 hover:text-velora-accent hover:border-velora-accent/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-velora-surface border border-velora-border flex items-center justify-center text-slate-300 hover:text-velora-accent hover:border-velora-accent/40 transition-colors" aria-label="Discord">
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-velora-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-velora-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-velora-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-velora-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-velora-muted font-mono">
          <div>© 2026 VELORA. Demo project. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Ledger</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
