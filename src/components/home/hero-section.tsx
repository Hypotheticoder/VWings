import Link from "next/link";
import { MotionDiv, MotionH1 } from "@/components/common/motion-components";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        // It's recommended to host your own video. This is a placeholder.
        src="https://videos.pexels.com/video-files/3844645/3844645-hd_1920_1080_25fps.mp4"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-background/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
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
            className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80"
          >
            <p>
              Join the elite ranks of aviation professionals with our world-class training programs.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
