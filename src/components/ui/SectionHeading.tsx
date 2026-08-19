import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlightText?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  highlightText,
  center = true,
  className,
}) => {
  return (
    <div className={twMerge('max-w-3xl mb-16', center && 'mx-auto text-center', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velora-accent/10 border border-velora-accent/20 text-velora-accent text-xs font-semibold tracking-wide uppercase mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-velora-accent animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
      >
        {title}{' '}
        {highlightText && (
          <span className="text-accent-gradient block sm:inline">{highlightText}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-velora-muted font-normal leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
