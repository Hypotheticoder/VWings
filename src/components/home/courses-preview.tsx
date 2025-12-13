import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/courses/course-card";
import SectionHeading from "@/components/common/section-heading";
import { courses } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function CoursesPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Flagship Programs"
          subtitle="Chart Your Course to the Cockpit"
        />
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </MotionDiv>
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
