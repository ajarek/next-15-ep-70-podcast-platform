import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { User } from '@/lib/models'

type Session ={
  user:User & {admin:boolean}
  expires: string
}
const Dashboard =async () => {
  const session = await auth() as Session
  if(!session || session.user?.admin===false){
    redirect('/')
  }
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center p-24'>
      <h1 className='text-3xl'>Dashboard</h1>
    </div>
  )
}

export default Dashboard