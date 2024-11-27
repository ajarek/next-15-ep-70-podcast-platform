import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const PageUser =async () => {
  const session = await auth()
  if(!session){
    redirect('/')
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center p-24'>
      <h1 className='text-3xl'>Page User <span className='capitalize'>{session?.user?.name}</span></h1>
    </div>
  )
}

export default PageUser