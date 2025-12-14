import SectionHeading from "@/components/common/section-heading";
import { whyChooseUsItems } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ShapeBlur from "../common/shape-blur";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  const primaryColor = fullConfig.theme.colors.primary.DEFAULT.replace(
    /hsl\(([^)]+)\)/,
    (match, hsl) => {
      const [h, s, l] = hsl
        .split(" ")
        .map((val: string) => val.trim().replace("%", ""));
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  );

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Elevate Advantage"
          subtitle="Why Aspiring Pilots Choose Us"
        />
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyChooseUsItems.map((item, index) => (
            <MotionDiv key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden h-full text-center bg-card/60 backdrop-blur-xl border-primary/20 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  {/* <ShapeBlur
                    className="w-full h-full pointer-events-none"
                    variation={0}
                    shapeSize={2.1}
                    roundness={0.22}
                    borderSize={0.03}
                    circleSize={0.34}
                    circleEdge={0.6}
                    color={primaryColor}
                  /> */}
                </div>
                <CardHeader className="relative items-center p-6 z-10">
                  <div className="inline-flex p-3 bg-primary/20 text-primary rounded-full mb-4 items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="pt-2 text-card-foreground/80">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
