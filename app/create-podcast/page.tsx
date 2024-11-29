import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { FormAddPodcast } from '@/components/FormAddPodcast'

const CreatePodcast =async () => {
  const session = await auth()
  if(!session){
    redirect('/register')
  }

  return (
    <div className="flex  flex-col items-start justify-start min-h-screen p-4 gap-4">
    <h1 className='text-xl  hover:text-primary  '>Create Podcast</h1>
    <FormAddPodcast/>
     
  </div>
  )
}

export default CreatePodcast