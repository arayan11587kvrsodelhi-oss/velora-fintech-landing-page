import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-velora-bg border-t border-velora-border/40">
      {/* Background Animated Glows & Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-velora-accent/15 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 md:p-20 rounded-3xl bg-gradient-to-b from-velora-surface/90 via-velora-surface/70 to-velora-surface-light/40 border border-velora-accent/30 shadow-2xl shadow-black/80 backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Top Decorative Sparkle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-velora-accent/10 border border-velora-accent/30 text-velora-accent text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 100,000+ Modern Investors</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
            Take control of <span className="text-accent-gradient">your money.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-velora-muted font-normal max-w-2xl mx-auto leading-relaxed">
            Build better financial habits with a platform designed around you. Zero hidden markup, instant virtual card issuance, and AI-driven growth.
          </p>

          {/* Button CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto glow-accent">
              Get Started Free
            </Button>
            <Button size="lg" variant="secondary" icon={<Zap className="w-5 h-5 text-velora-accent" />} className="w-full sm:w-auto">
              Schedule Live Demo
            </Button>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-12 pt-8 border-t border-velora-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-velora-muted font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-velora-accent" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-velora-accent" />
              <span>60-Second Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-velora-accent" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
