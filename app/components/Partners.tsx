"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

import Autoplay from "embla-carousel-autoplay"
import * as motion from "motion/react-client"

export default function Partners() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                // delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className='w-full flex flex-col mb-8 gap-2'>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    direction: "ltr"
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}

                className=""
            >
                <CarouselContent>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-3/5 md:basis-1/2 lg:basis-1/9">
                            <div className="h-14 px-2 py-2 bg-gray-100 flex items-center justify-center ">
                                <Image className=' h-2/4 w-fit invert-25 ' src="/icons/google.png" alt='logo' width={100} height={100} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>


            <Carousel
                dir='rtl'
                opts={{
                    align: "end",
                    direction: "rtl",
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}

                className=""
            >
                <CarouselContent >
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className=" basis-2/5 md:basis-1/2 lg:basis-1/8">
                            <div className="px-2 h-14 bg-gray-100 flex items-center justify-center ">
                                <Image className=' h-2/4 w-fit  ' src="/icons/youtube.png" alt='logo' width={100} height={100} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </motion.div >
    )
}
