"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const SideBarLeft = () => {
  const pathname = usePathname()
  return (
    <div className='min-w-[280px] flex flex-col gap-12 p-4 border-r-2'>
        <div className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
      <h1 className='text-xl font-semibold'>Podcast</h1>
        </div>
      <nav className='flex  flex-col gap-4'>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/" ? "border-r-2 border-primary" : ""
          }`}
          href='/'
        >
             <Image
          src="/icons/home.svg"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
          Home
        </Link>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/discover" ? "border-r-2 border-primary" : ""
          }`}
          href='/discover'
        >
             <Image
          src="/icons/discover.svg"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
          Discover
        </Link>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/create-podcast" ? "border-r-2 border-primary" : ""
          }`}
          href='/create-podcast'
        >
             <Image
          src="/icons/microphone.svg"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
          Create Podcast
        </Link>
      </nav>
    </div>
  )
}

export default SideBarLeft
