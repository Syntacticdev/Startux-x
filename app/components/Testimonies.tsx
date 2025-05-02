"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'

import Autoplay from "embla-carousel-autoplay"
import TestimonialCard from './TestimonialCard'

export default function Testimonies() {
    return (
        <div className='w-full flex flex-col mb-8 gap-2'>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    direction: "ltr"
                }}
                plugins={[
                    Autoplay({
                        delay: 2200,
                        jump: false,
                        stopOnFocusIn: true
                    }),
                ]}

                className=""
            >

                <CarouselContent>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                            <TestimonialCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Carousel
                dir='ltr'
                opts={{
                    align: "center",
                    loop: true,
                    direction: "ltr"
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        jump: false,
                        stopOnFocusIn: true
                    }),
                ]}

                className=""
            >

                <CarouselContent>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                            <TestimonialCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div >
    )
}
