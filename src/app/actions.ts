"use server";

import { recommendTraining } from "@/ai/flows/training-recommendation-tool";
import { z } from "zod";

const FormSchema = z.object({
  careerGoals: z.string().min(10, {
    message: "Please describe your career goals in at least 10 characters.",
  }),
  experienceLevel: z.enum(["beginner", "intermediate", "experienced"]),
});

export type RecommendationState = {
  message?: string | null;
  recommendation?: string | null;
  errors?: {
    careerGoals?: string[];
    experienceLevel?: string[];
  };
};

export async function getTrainingRecommendation(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = FormSchema.safeParse({
    careerGoals: formData.get("careerGoals"),
    experienceLevel: formData.get("experienceLevel"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
    };
  }

  try {
    const { recommendedPrograms } = await recommendTraining({
        careerGoals: validatedFields.data.careerGoals,
        experienceLevel: validatedFields.data.experienceLevel,
    });
    
    return {
      message: "Success!",
      recommendation: recommendedPrograms,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while getting your recommendation. Please try again.",
    };
  }
}
