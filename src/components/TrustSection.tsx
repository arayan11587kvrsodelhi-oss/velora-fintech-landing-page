import { motion } from 'framer-motion';
import { trustCompanies } from '../data/fintechData';
import { ShieldCheck, Cpu, Globe2, Layers, Zap } from 'lucide-react';

const icons = [Cpu, Layers, ShieldCheck, Globe2, Zap];

export const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 border-y border-velora-border/50 bg-velora-surface/30 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-velora-bg via-transparent to-velora-bg pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-velora-accent">
            Institutional Trust
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-300 mt-2">
            Built for the way modern money moves.
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-center">
          {trustCompanies.map((company, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="group p-5 rounded-2xl bg-velora-surface/40 border border-velora-border hover:border-velora-accent/40 hover:bg-velora-surface-light/60 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-velora-accent/10 border border-white/5 group-hover:border-velora-accent/30 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-velora-accent transition-colors" />
                </div>
                <span className="text-sm font-extrabold tracking-wider text-slate-300 group-hover:text-white font-mono">
                  {company.name}
                </span>
                <span className="text-[10px] text-velora-muted font-medium mt-0.5 tracking-tight">
                  {company.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
