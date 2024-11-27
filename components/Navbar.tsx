import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logout from '@/components/Logout'
import { auth } from '@/app/api/auth/auth'
import { User } from '@/lib/models'
import { ModeToggle } from './ModeToggle'

type Session ={
  user:User & {admin:boolean}
  expires: string
}


const Navbar = async () => {

  const session = await auth() as Session
 
  
  return (
    <div className=' flex flex-col justify-start items-center   px-16 max-sm:px-2  '>
      <div className='h-12  w-full flex  justify-between items-center '>
        <Link
          href='/'
          className='w-[400px] h-12  flex justify-start items-center gap-2 '
          aria-label='logo'
        >
          <div className='relative w-8 h-8 flex justify-center items-center   '>
            <Image
              src='/logo.png'
              alt='logo'
              width={197}
              height={256}
              aria-label='logo'
            />
          </div>
          <h1 className='flex items-center gap-2 text-xl font-bold text-primary italic '>
            Next-Auth v.5
          </h1>
        </Link>
        <div className=' w-full flex items-center gap-2 '>
          

          {session?.user?.admin && (
            <Link
              href='/dashboard'
              className={` text-xl hover:text-primary focus:text-primary px-4`}
              aria-label='dashboard'
            >
              Dashboard
            </Link>
          )}
          {session && (
            <Link
              href='/page-user'
              className={` text-xl hover:text-primary focus:text-primary px-4`}
              aria-label='page-user'
            >
              Page User
            </Link>
          )}
        </div>
        <div className=' flex justify-between items-center italic gap-6 '>
         
          <Logout session={session} />
          <ModeToggle/>
        </div>

        
      </div>
    </div>
  )
}

export default Navbar
