import CoursesPreview from "@/components/home/courses-preview";
import HeroSection from "@/components/home/hero-section";
import PlacementHighlights from "@/components/home/placement-highlights";
import Testimonials from "@/components/home/testimonials";
import TrainingRecommendation from "@/components/home/training-recommendation";
import TrainingTimeline from "@/components/home/training-timeline";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CoursesPreview />
      <TrainingTimeline />
      <PlacementHighlights />
      <Testimonials />
      <TrainingRecommendation />
    </>
  );
}
