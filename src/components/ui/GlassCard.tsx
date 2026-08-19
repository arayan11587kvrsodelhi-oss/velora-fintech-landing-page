import { motion, HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  gradientBorder?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  gradientBorder = false,
  ...props
}) => {
  return (
    <motion.div
      className={twMerge(
        'relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300',
        'bg-velora-surface/70 border border-velora-border',
        hoverEffect && 'hover:bg-velora-surface-light/80 hover:border-velora-border-bright hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40',
        glow && 'shadow-[0_0_30px_-5px_rgba(0,229,163,0.15)] border-velora-accent/30',
        gradientBorder && 'before:absolute before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-velora-accent/40 before:to-transparent before:-z-10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
