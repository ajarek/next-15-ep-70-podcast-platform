import { Search } from "@/components/Search"
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { User } from '@/lib/models'
import {  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from '@/components/ui/card'
  import Image from 'next/image'
import Link from 'next/link'
import {getAllPodcasts} from '@/lib/action'
import { PropsPodcast } from '@/types/TypesPodcast'

type Session ={
  user:User & {admin:boolean}
  expires: string
}
const Discover =async ({searchParams}: {  searchParams: Promise<{  query: string }>}) => {
  const session = await auth() as Session
  const podcasts =await getAllPodcasts() as PropsPodcast[]
  const { query } = await searchParams
  if(!session ){
    redirect('/register')
  }
  return (
    <div className="flex  flex-col items-start justify-start min-h-screen p-4 gap-4">
      <h1 className='text-xl  hover:text-primary  '>Discover</h1>
      <Search />
      <div className='grid grid-cols-3 gap-4'>
      {podcasts
      .filter(pd => !query || pd.title?.toLowerCase().includes(query.toLowerCase()))
      .map((podcast) => (
        <Card key={(podcast._id).toString()} className="flex flex-col items-center justify-center">
          <Link href={`/podcast/${podcast._id}`}>
          <CardHeader>
            <div className="relative w-[180px] h-[180px] ">
              <Image src={podcast.imgURL || ''} alt={podcast.title || ''} fill sizes="(max-width: 768px) 100vw, 33vw" className=" object-cover" />       
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle>{podcast.title}</CardTitle>
            <CardDescription>{podcast.description?.slice(0,20) || ''}...</CardDescription>
          </CardContent>
          </Link>
        </Card>
      ))}
    </div>
       
    </div>
  
  )
}

export default Discover