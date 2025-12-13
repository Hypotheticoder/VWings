import SectionHeading from "@/components/common/section-heading";
import { MotionDiv } from "@/components/common/motion-components";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import WhyChooseUs from "@/components/home/why-choose-us";
import PlacementHighlights from "@/components/home/placement-highlights";
import MeetTheDirectors from "@/components/about/meet-the-directors";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'course-atpl');

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Elevate Aviation"
          subtitle="Pioneering the Future of Pilot Training"
        />
        <MotionDiv
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg space-y-4">
              <p>
                  Founded on the principle of excellence, Elevate Aviation has been at the forefront of pilot training for over 15 years. We believe in a holistic approach, combining rigorous academic theory with intensive, real-world flight experience. Our mission is to not just create licensed pilots, but to cultivate the next generation of aviation leaders.
              </p>
              <p>
                  Our state-of-the-art facilities, modern fleet, and a team of world-class instructors provide an unparalleled learning environment. We are committed to the success of every student, offering personalized mentorship and career guidance from day one until they secure a position at a major airline.
              </p>
               <p>
                  At Elevate, your dream of flying is our mission. We provide the tools, the training, and the network to turn your aspirations into a lifelong career above the clouds.
              </p>
          </div>
          {heroImage && (
             <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="object-cover"
                />
             </div>
          )}
        </MotionDiv>
      </div>
      <MeetTheDirectors />
       <div className="mt-20">
        <WhyChooseUs />
      </div>
       <div className="mt-0">
        <PlacementHighlights />
      </div>
    </div>
  );
}
