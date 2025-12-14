import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/courses/course-card";
import SectionHeading from "@/components/common/section-heading";
import { courses } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";
import CardSwap, { SwapCard } from "@/components/home/card-swap";
import Image from "next/image";

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
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small/medium view: heading above grid */}
        <div className="lg:hidden">
          <SectionHeading
            title="Flagship Programs"
            subtitle="Chart Your Course to the Cockpit"
          />
          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </MotionDiv>
        </div>

        {/* Large view: two-column layout — left: cards, right: right-middle heading */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative">
            <CardSwap
              width={420}
              height={320}
              cardDistance={70}
              verticalDistance={52}
              delay={4500}
              pauseOnHover
            >
              {courses.map((course) => (
                <SwapCard
                  key={course.id}
                  customClass="w-[420px] h-[320px] shadow-2xl"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={course.image.imageUrl}
                      alt={course.image.description}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute left-4 right-4 bottom-4 text-white">
                      <h3 className="font-headline text-2xl">{course.title}</h3>
                      <p className="mt-2 text-sm text-white/90">
                        {course.description}
                      </p>
                      <div className="mt-4">
                        <Button size="sm" asChild>
                          <Link href={`/courses#${course.id}`}>Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwapCard>
              ))}
            </CardSwap>
          </div>

          <div className="flex flex-col justify-center items-end text-right">
            <SectionHeading
              title="Flagship Programs"
              subtitle="Chart Your Course to the Cockpit"
              className="text-right mb-0"
            />
            <div className="mt-6">
              <Button size="lg" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* bottom centered button removed (kept right-column button for large screens) */}
      </div>
    </section>
  );
}
