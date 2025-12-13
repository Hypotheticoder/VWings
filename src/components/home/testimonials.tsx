"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/section-heading";
import { testimonials } from "@/lib/data";
import { MotionDiv } from "@/components/common/motion-components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Voices of Our Graduates"
          subtitle="Real Stories, Real Success"
        />
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-background border-accent/20">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <Avatar className="w-24 h-24 mb-6 border-4 border-primary">
                          <AvatarImage 
                            src={testimonial.image.imageUrl} 
                            alt={testimonial.name}
                            data-ai-hint={testimonial.image.imageHint}
                          />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <blockquote className="text-lg md:text-xl font-medium text-foreground mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-headline text-xl font-bold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
