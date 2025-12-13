import SectionHeading from "@/components/common/section-heading";
import TrainingTimeline from "@/components/home/training-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Admissions Process"
          subtitle="Your Journey to Our Cockpit"
        />
      </div>
      <TrainingTimeline />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Card className="max-w-4xl mx-auto bg-card border-primary/50 text-center">
            <CardHeader>
                <CardTitle className="font-headline text-4xl">Ready to Take Off?</CardTitle>
                <CardDescription className="text-lg">
                    Our enrollment advisors are ready to help you navigate the admissions process and answer all your questions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button size="lg" asChild>
                    <Link href="/contact">Contact an Advisor</Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
