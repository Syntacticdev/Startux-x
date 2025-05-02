"use client"
import { ChevronRight, Menu } from 'lucide-react';
import React, { useState } from 'react';
import * as motion from "motion/react-client"
import Link from 'next/link';

const Header: React.FC = () => {
    const [toggleMobile, setToggleMobile] = useState(false)

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                // delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex relative shadow-xs shadow-black sm:shadow-none   items-center justify-between h-14 py-4 sm:flex-row px-4 sm:px-45 ">
            <Link href="/" className="text-lg font-bold">Startux X</Link>
            <div className={
                `flex justify-between  bg-white fixed top-14 left-0 transform transition-all ease-in-out 
                ${toggleMobile ? "translate-x-0" : "-translate-x-full"} 
                h-screen  w-full z-30 md:bg-transparent p-5
                border border-black border-t-[1px] sm:border-none
                md:relative md:h-fit md:w-fit md:top-0 md:mx-auto md:translate-x-0`
            }>
                <nav className="flex flex-col text-xl sm:text-sm  sm:flex-row gap-4 mt-2 sm:mt-0 ">
                    <Link href="#" className="flex items-center hover:underline"> <ChevronRight className='sm:hidden w-5 h-5' /> Home</Link>
                    <Link href="#" className="flex items-center hover:underline"><ChevronRight className='sm:hidden w-5 h-5' /> About</Link>
                    <Link href="#" className="flex items-center hover:underline"><ChevronRight className='sm:hidden w-5 h-5' /> Services</Link>
                    <Link href="#" className="flex items-center hover:underline"><ChevronRight className='sm:hidden w-5 h-5' /> Contact</Link>
                </nav>
            </div>

            <button className='bg-black text-white p-2 cursor-pointer text-sm rounded-md'>Get in touch</button>
            <button onClick={() => setToggleMobile(!toggleMobile)} className=' flex cursor-pointer sm:hidden'>
                <Menu />
            </button>
        </motion.header>
    );
};

export default Header;