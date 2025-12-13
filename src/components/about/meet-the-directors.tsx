"use client";

import { useEffect, useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/common/scroll-stack";
import SectionHeading from "@/components/common/section-heading";
import { directors } from "@/lib/data";
import Image from "next/image";

export default function MeetTheDirectors() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
                title="Meet Our Leadership"
                subtitle="The Visionaries Behind Elevate"
            />
        </div>
        <ScrollStack useWindowScroll={true} itemDistance={-50} itemStackDistance={20} >
            {directors.map((director, index) => (
                <ScrollStackItem key={index} itemClassName="bg-card/80 backdrop-blur-xl border border-primary/20">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full">
                        <div className="relative w-full h-64 md:h-full rounded-2xl overflow-hidden">
                           <Image
                                src={director.image.imageUrl}
                                alt={`Portrait of ${director.name}`}
                                data-ai-hint={director.image.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:col-span-2 text-left">
                            <h3 className="font-headline text-3xl font-bold text-primary">{director.name}</h3>
                            <p className="text-lg font-semibold text-foreground/80 mb-4">{director.title}</p>
                            <p className="text-foreground/90">{director.bio}</p>
                        </div>
                   </div>
                </ScrollStackItem>
            ))}
        </ScrollStack>
    </section>
  );
}
