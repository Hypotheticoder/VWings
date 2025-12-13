import { MotionDiv, MotionH2 } from "./motion-components";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <MotionDiv
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {subtitle && (
        <MotionH2
          variants={subtitleVariants}
          className="text-lg font-medium text-primary mb-2 font-body"
        >
          {subtitle}
        </MotionH2>
      )}
      <MotionH2
        variants={headingVariants}
        className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
      >
        {title}
      </MotionH2>
    </MotionDiv>
  );
}
