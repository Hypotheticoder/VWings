'use client';

import Image from "next/image";
import { airlineLogos } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function AirlineCarousel() {
    return (
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {airlineLogos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                  <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-28 aspect-video">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      data-ai-hint={logo.imageHint}
                      width={140}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
    )
}
