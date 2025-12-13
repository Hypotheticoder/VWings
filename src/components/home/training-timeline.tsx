import SectionHeading from "@/components/common/section-heading";
import { trainingTimelineSteps } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function TrainingTimeline() {
  return (
    <section className="py-20 md:py-28 bg-transparent text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your Journey to Command"
          subtitle="From Aspirant to Airline Pilot"
        />
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          <MotionDiv
            className="space-y-16 md:space-y-0 md:grid md:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {trainingTimelineSteps.map((step, index) => (
              <MotionDiv
                key={index}
                className={cn(
                  "relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8",
                  index % 2 !== 0 && "md:grid-cols-[1fr_auto_1fr]"
                )}
                variants={itemVariants}
              >
                {/* Content */}
                <div className={cn(
                  "text-left md:text-right",
                  index % 2 !== 0 && "md:col-start-3 md:text-left"
                )}>
                  <h3 className="font-headline text-2xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-foreground/80">{step.description}</p>
                </div>

                {/* Icon */}
                <div className={cn(
                  "hidden md:block relative",
                   index % 2 === 0 ? "col-start-2" : "col-start-2"
                )}>
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center border-2 border-primary/50 shadow-lg">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Mobile Icon */}
                 <div className="md:hidden flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border-2 border-primary/50 shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                   <div className="w-full h-px bg-primary/20"></div>
                </div>


                {/* Spacer */}
                <div className="hidden md:block"></div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
