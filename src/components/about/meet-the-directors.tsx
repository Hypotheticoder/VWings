"use client";

import { useEffect, useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/common/scroll-stack";
import SectionHeading from "@/components/common/section-heading";
import { directors } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const cardColors = [
    "bg-violet-600",
    "bg-pink-500",
    "bg-blue-500",
];

export default function MeetTheDirectors() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
        <section className="py-20 md:py-28 bg-background text-foreground">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Meet Our Leadership"
                    subtitle="The Visionaries Behind Elevate"
                />
            </div>
        </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
                title="Meet Our Leadership"
                subtitle="The Visionaries Behind Elevate"
            />
        </div>
        <ScrollStack useWindowScroll={true} itemDistance={-150} itemStackDistance={20} baseScale={0.9} >
            {directors.map((director, index) => (
                <ScrollStackItem 
                    key={index} 
                    itemClassName={cn(
                        "text-white",
                        cardColors[index % cardColors.length]
                    )}
                >
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center h-full">
                        <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden">
                           <Image
                                src={director.image.imageUrl}
                                alt={`Portrait of ${director.name}`}
                                data-ai-hint={director.image.imageHint}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="md:col-span-2 text-left">
                            <h3 className="font-headline text-3xl font-bold text-white/90">{director.name}</h3>
                            <p className="text-lg font-semibold text-white/70 mb-4">{director.title}</p>
                            <p className="text-white/80 max-w-2xl">{director.bio}</p>
                        </div>
                   </div>
                </ScrollStackItem>
            ))}
        </ScrollStack>
    </section>
  );
}
