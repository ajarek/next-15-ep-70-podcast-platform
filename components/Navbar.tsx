import React from "react"
import Link from "next/link"
import Logout from "@/components/Logout"
import { auth } from "@/app/api/auth/auth"
import { User } from "@/lib/models"
import { ModeToggle } from "./ModeToggle"

type Session = {
  user: User & { admin: boolean }
  expires: string
}

const Navbar = async () => {
  const session = (await auth()) as Session

  return (
    <div className='h-16  w-full flex  justify-between items-center px-4 border-b-2 '>
      <Link
        href='/'
        className=' h-12  flex justify-start items-center gap-2 '
        aria-label='logo'
      >
        <h1 className='text-xl  hover:text-primary  '>Trending Podcasts</h1>
      </Link>
      <div className=' w-fit flex items-center gap-2 '>
        {session?.user?.admin && (
          <Link
            href='/dashboard'
            className={` text-xl hover:text-primary focus:text-primary px-4`}
            aria-label='dashboard'
          >
            Dashboard
          </Link>
        )}
      </div>
      <div className=' flex justify-between items-center italic gap-6 '>
        <Logout session={session} />
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
