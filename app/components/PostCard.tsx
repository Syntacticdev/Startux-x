import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, AnimatePresence } from "motion/react"

export default function PostCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2
            }}
            className='h-[350px] px-5  py-5 bg-white rounded-sm overflow-hidden'>
            <div className="h-3/5 px-10 rounded-md overflow-hidden w-full relative">
                <Image className='h-full w-full' src="/images/startup-negotiation.jpg" sizes='100%' fill={true} alt='' />
            </div>
            <div className="post_body h-2/5 p-5  sm:py-5">
                <div className='flex items-center gap-3 my-2'>
                    <span className='bg-yellow-100 font-bold rounded-sm px-4 py-2'>Marketing</span>
                    <span>May 1, 2025</span>
                </div>

                <div>
                    <Link className='font-bold line-clamp-2 ' href="">3 marketing tools you should be paying attention to in 2025</Link>
                </div>
            </div>
        </motion.div>
    )
}
