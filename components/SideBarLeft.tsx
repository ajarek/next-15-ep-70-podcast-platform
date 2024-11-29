"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Compass, House, Mic } from "lucide-react"

const SideBarLeft = () => {
  const pathname = usePathname()
  return (
    <div className='min-w-[280px] max-lg:min-w-fit flex flex-col gap-12 p-4 border-r-2'>
        <div className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
      <h1 className='text-xl font-semibold max-lg:hidden'>Podcast</h1>
        </div>
      <nav className='flex  flex-col gap-4'>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/" ? "border-r-2 border-primary" : ""
          }`}
          href='/'
        >
         <House color="#f97316" />
        <div className="max-lg:hidden">

          Home
        </div>
        </Link>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/discover" ? "border-r-2 border-primary" : ""
          }`}
          href='/discover'
        >
            <Compass color="#f97316" />
          <div className="max-lg:hidden">Discover</div>
        </Link>
        <Link
          className={`flex items-center gap-2  text-xl hover:text-primary ${
            pathname === "/create-podcast" ? "border-r-2 border-primary" : ""
          }`}
          href='/create-podcast'
        ><Mic color="#f97316" />
          <div className="max-lg:hidden">Create Podcast</div>
        </Link>
      </nav>
    </div>
  )
}

export default SideBarLeft
