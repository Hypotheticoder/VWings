import SectionHeading from "@/components/common/section-heading";
import AnimatedCounter from "@/components/common/animated-counter";
import { placementStats } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";
import AirlineCarousel from "./airline-carousel";

export default function PlacementHighlights() {
  return (
    <section className="py-20 md:py-28 bg-white text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Launching Careers Sky-High"
          subtitle="Our Unrivaled Placement Record"
        />
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          <MotionDiv initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }}>
            <h3 className="font-headline text-5xl md:text-6xl text-primary font-bold">
              <AnimatedCounter end={placementStats.pilotsPlaced} />+
            </h3>
            <p className="mt-2 text-muted-foreground text-lg">Pilots Placed</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{delay:0.2}}>
            <h3 className="font-headline text-5xl md:text-6xl text-primary font-bold">
              <AnimatedCounter end={placementStats.partnerAirlines} />+
            </h3>
            <p className="mt-2 text-muted-foreground text-lg">Partner Airlines</p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{delay:0.4}}>
            <h3 className="font-headline text-5xl md:text-6xl text-primary font-bold">
              <AnimatedCounter end={placementStats.yearsOfExcellence} />
            </h3>
            <p className="mt-2 text-muted-foreground text-lg">Years of Excellence</p>
          </MotionDiv>
        </MotionDiv>
        <AirlineCarousel />
      </div>
    </section>
  );
}
