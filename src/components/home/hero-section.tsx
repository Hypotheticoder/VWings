import Link from "next/link";
import Image from "next/image";
import { MotionDiv, MotionH1 } from "@/components/common/motion-components";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
};

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-gradient-to-br from-background via-background/80 to-primary-foreground/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            <MotionDiv
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left text-foreground"
            >
              <MotionH1
                variants={itemVariants}
                className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
              >
                <span className="block">Your Future</span>
                <span className="block text-primary">Takes Flight</span>
              </MotionH1>
              <MotionDiv
                variants={itemVariants}
                className="mt-6 max-w-xl text-lg md:text-xl text-foreground/80"
              >
                <p>
                  Join the elite ranks of aviation professionals with our world-class training programs, designed to elevate your career from the ground up.
                </p>
              </MotionDiv>
              <MotionDiv
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/courses">
                    Explore Courses <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </MotionDiv>
            </MotionDiv>
            <div className="relative w-full h-[300px] lg:h-[500px] order-first lg:order-last">
                 {heroImage && (
                    <MotionDiv 
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full h-full"
                    >
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            data-ai-hint={heroImage.imageHint}
                            fill
                            className="object-contain"
                            priority
                        />
                    </MotionDiv>
                 )}
            </div>
        </div>
      </div>
    </section>
  );
}
