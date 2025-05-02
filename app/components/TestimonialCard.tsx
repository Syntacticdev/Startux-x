import React from 'react'
import Image from 'next/image'

export default function TestimonialCard() {
    return (
        <div className=" min-w-48 h-48 bg-gray-100 shadow-md p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 overflow-hidden rounded-full">
                        <Image src="/images/client.png" alt="client" width={40} height={40} />

                    </div>
                    <div>
                        <h4 className="font-bold text-sm">John Doe</h4>
                        <p className="text-xs text-gray-500">@johndoe</p>
                    </div>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                    </svg>
                </div>
            </div>

            {/* Card Body */}
            <div className="text-sm text-gray-700">
                "Startux X transformed our business with their innovative solutions. Their team is professional, creative, and results-driven!"
            </div>
        </div>
    )
}