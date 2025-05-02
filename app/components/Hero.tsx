import { ArrowRight, Star } from 'lucide-react'
import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div
            className=' my-10 flex flex-col-reverse sm:grid grid-cols-2 sm:items-center gap-3 px-4 md:px-20 lg:px-45 '>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    // delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className='flex flex-col gap-2'>
                <div className="rating flex gap-0.5 ">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className='text-yellow-400 w-4 h-4 ' />
                    ))}
                </div>
                <span className='text-sm'>Trusted by 1,000+ companies around the world</span>
                <div className=' font-bold text-3xl sm:text-4xl'>Ready to take your business growth to the next level ?</div>
                <p className='text-sm'>Empowering businesses worldwide, trusted by 1,000+ companies. Take your business growth to the next level with our innovative solutions and expert guidance. Let’s help you achieve remarkable success.</p>
                <div className='flex gap-2 my-4'>
                    <Link className='flex items-center gap-2 text-sm py-3 px-6 bg-black hover:bg-amber-400 text-white rounded-sm' href="/">
                        Get in touch <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link className='text-sm py-3 px-6 border-2 border-gray-500 hover:bg-gray-500 hover:text-white  rounded-sm' href="/">
                        Our services
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className='relative'>
                <Image className='w-full h-full' src="/images/team.png" height={400} width={500} alt='hero-image' priority />
            </motion.div>
        </div>
    )
}
