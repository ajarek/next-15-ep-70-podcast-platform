import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { User } from '@/lib/models'

type Session ={
  user:User & {admin:boolean}
  expires: string
}
const Discover =async () => {
  const session = await auth() as Session
  if(!session ){
    redirect('/register')
  }
  return (
    <div className="flex  flex-col items-start justify-start min-h-screen p-4 gap-4">
      <h1 className='text-xl  hover:text-primary  '>Discover</h1>
      
       
    </div>
  
  )
}

export default Discover