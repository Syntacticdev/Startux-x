import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="p-5 md:px-20 lg:px-45 pt-20 bg-black ">
            <div className='flex flex-col sm:flex-row gap-2 bg-amber-100 p-5 sm:p-15 sm:-mt-36 rounded-md '>
                <div className='sm:w-2/4'>
                    <span className='text-2xl sm:text-4xl font-bold'>Contact us today for
                        a free consultation</span>
                </div>
                <div className='flex  gap-2 my-4'>
                    <Link className='flex items-center gap-2 text-sm py-3 px-6 bg-black hover:bg-amber-400  text-white rounded-sm' href="/">
                        Get in touch <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link className='text-sm py-3 px-6 border-2 border-gray-500 hover:bg-gray-500 hover:text-white rounded-sm' href="/">
                        Our services
                    </Link>
                </div>
            </div>

            <div className='sm:flex my-8 gap-3'>
                <div className='grid sm:grid-cols-3 sm:w-4/5 '>
                    <div>
                        <h3 className='text-white font-bold my-4 text-sm'>Quick Links</h3>
                        <ul className='grid gap-2'>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Home</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">About Our Company</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Company Teams</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Client Testimonies</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white font-bold my-4 text-sm'>Our Services</h3>
                        <ul className='grid gap-2'>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Project Management</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Process Development</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Operation & Delegation</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Compliance</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Business Analysis</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white font-bold my-4 text-sm'>Contact Us</h3>
                        <ul className='grid gap-2'>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Project Management</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Process Development</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Operation & Delegation</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Compliance</Link>
                            </li>
                            <li className='flex gap-0.5 items-center'>
                                <ChevronRight className='text-white w-5 h-5' />
                                <Link className='text-slate-200 hover:text-blue-200 hover:font-semibold text-sm' href="">Business Analysis</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div>
                        <h3 className='text-white font-bold my-4 text-sm'>Contact Us</h3>
                        <ul className='grid gap-2'>
                            <li className='flex gap-1 items-center'>
                                <div className='border-white border-[1px] p-2 rounded-full'> <MapPin className='text-white rounded-full w-4 h-4' /></div>
                                <span className='text-xs text-slate-200'>123 Business Avenue, Suite 400, New York, NY 10001, USA</span>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <div className='border-white border-[1px] p-2 rounded-full'> <Mail className='text-white rounded-full w-4 h-4' /></div>
                                <Link className='text-xs text-slate-200' href="mailto:support@startux.com" >
                                    support@startux.com
                                </Link>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <div className='border-white border-[1px] p-2 rounded-full'> <Phone className='text-white rounded-full w-4 h-4' /></div>
                                <Link href="tel:+18001234567" className="text-slate-200 hover:text-blue-200 hover:font-semibold text-sm">
                                    +1 (800) 123-4567
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full h-[.3px] my-5 bg-slate-400 ' />

            <div className='flex sm:flex-row flex-col-reverse justify-between items-center gap-1'>
                <Link href="/" className="text-lg text-white font-bold">Startux X</Link>

                <div>
                    <span className='text-slate-200 text-sm'>Copyright &copy; Startux X | Designed by</span> <span className='font-bold text-white '>Eminent</span>
                </div>

                <div className='flex gap-2'>
                    <Link href=""><Image className='bg-white p-2 w-8 h-8 rounded-sm' src="/icons/twitter.png" alt='twitter' width={20} height={20} /></Link>
                    <Link href=""><Image className='bg-white p-2 w-8 h-8 rounded-sm' src="/icons/linkedin.png" alt='linkendin' width={20} height={20} /></Link>
                    <Link href=""><Image className='bg-white p-2 w-8 h-8 rounded-sm' src="/icons/youtube-icon.png" alt='youtube' width={20} height={20} /></Link>
                </div>
            </div>
        </footer>
    )
}
