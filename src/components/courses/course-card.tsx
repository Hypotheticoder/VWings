import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionArticle } from "@/components/common/motion-components";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  course: {
    id: string;
    title: string;
    description: string;
    image: ImagePlaceholder;
  };
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

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <MotionArticle
      variants={itemVariants}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-xl border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
        <div className="relative w-full h-48">
          <Image
            src={course.image.imageUrl}
            alt={course.image.description}
            data-ai-hint={course.image.imageHint}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
          <CardDescription className="pt-2 text-card-foreground/80">{course.description}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button variant="link" className="text-primary hover:text-primary" asChild>
            <Link href={`/courses#${course.id}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </MotionArticle>
  );
}
