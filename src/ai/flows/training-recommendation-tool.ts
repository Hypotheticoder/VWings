'use server';
/**
 * @fileOverview Recommends aviation training programs based on user goals and experience.
 *
 * - recommendTraining - A function that handles the training program recommendation process.
 * - TrainingRecommendationInput - The input type for the recommendTraining function.
 * - TrainingRecommendationOutput - The return type for the recommendTraining function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrainingRecommendationInputSchema = z.object({
  careerGoals: z
    .string()
    .describe('Description of the users career goals in the aviation industry.'),
  experienceLevel: z
    .string()
    .describe('The users level of experience (e.g., beginner, some experience, experienced).'),
});
export type TrainingRecommendationInput = z.infer<typeof TrainingRecommendationInputSchema>;

const TrainingRecommendationOutputSchema = z.object({
  recommendedPrograms: z
    .string()
    .describe('A list of recommended aviation training programs and why they are suitable.'),
});
export type TrainingRecommendationOutput = z.infer<typeof TrainingRecommendationOutputSchema>;

export async function recommendTraining(
  input: TrainingRecommendationInput
): Promise<TrainingRecommendationOutput> {
  return recommendTrainingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'trainingRecommendationPrompt',
  input: {schema: TrainingRecommendationInputSchema},
  output: {schema: TrainingRecommendationOutputSchema},
  prompt: `You are an expert aviation training advisor.

Based on the users career goals and experience level, recommend the most suitable aviation training programs.
Explain why each program is a good fit for the user.

Career Goals: {{{careerGoals}}}
Experience Level: {{{experienceLevel}}}`,
});

const recommendTrainingFlow = ai.defineFlow(
  {
    name: 'recommendTrainingFlow',
    inputSchema: TrainingRecommendationInputSchema,
    outputSchema: TrainingRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
