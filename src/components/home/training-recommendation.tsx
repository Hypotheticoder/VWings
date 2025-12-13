"use client";

import { useActionState, use } from "react";
import { getTrainingRecommendation, type RecommendationState } from "@/app/actions";
import SectionHeading from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Lottie from "lottie-react";
import planeAnimation from "../../../public/lottie/plane-animation.json";
import { MotionDiv } from "../common/motion-components";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? "Analyzing..." : "Get My Recommendation"}
    </Button>
  );
}

function LoadingIndicator() {
    const { pending } = useFormStatus();
    if (!pending) return null;

    return (
        <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 flex flex-col items-center justify-center text-center"
        >
            <Lottie animationData={planeAnimation} className="w-40 h-40" />
            <p className="text-lg font-medium text-primary mt-4">Our experts are charting your course...</p>
        </MotionDiv>
    );
}

export default function TrainingRecommendation() {
  const initialState: RecommendationState = {};
  const [state, dispatch] = useActionState(getTrainingRecommendation, initialState);

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Find Your Perfect Path"
          subtitle="Personalized AI-Powered Recommendations"
        />
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border-primary/50 shadow-2xl shadow-primary/10">
          <form action={dispatch}>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Your Aviation Future</CardTitle>
              <CardDescription>Tell us about your goals, and our AI will suggest the best training programs for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="careerGoals" className="text-lg">What are your career goals?</Label>
                <Textarea
                  id="careerGoals"
                  name="careerGoals"
                  placeholder="e.g., 'I want to become a commercial airline pilot flying long-haul international routes.'"
                  className="min-h-[100px] bg-card/80"
                  required
                />
                {state.errors?.careerGoals && (
                  <p className="text-sm text-destructive">{state.errors.careerGoals[0]}</p>
                )}
              </div>
              <div className="space-y-4">
                <Label className="text-lg">What is your current experience level?</Label>
                <RadioGroup name="experienceLevel" defaultValue="beginner" className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner (No prior flight experience)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate (Some flight hours / PPL)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="experienced" id="experienced" />
                    <Label htmlFor="experienced">Experienced (CPL or higher)</Label>
                  </div>
                </RadioGroup>
                {state.errors?.experienceLevel && (
                  <p className="text-sm text-destructive">{state.errors.experienceLevel[0]}</p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <SubmitButton />
               {state.message && !state.recommendation && (
                <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <p>{state.message}</p>
                </div>
              )}
            </CardFooter>
            <LoadingIndicator />
          </form>

          {state.recommendation && (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 border-t border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <h3 className="font-headline text-2xl text-green-400">Your Recommended Path</h3>
              </div>
              <div className="prose prose-invert max-w-none text-card-foreground/90 whitespace-pre-wrap">
                <p>{state.recommendation}</p>
              </div>
            </MotionDiv>
          )}
        </Card>
      </div>
    </section>
  );
}
