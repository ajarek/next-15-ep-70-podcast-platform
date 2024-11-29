import Logout from "@/components/Logout"
import { auth } from "@/app/api/auth/auth"
import { User } from "@/lib/models"
import { ModeToggle } from "./ModeToggle"
import PodcastsCarousel from "./PodcastsCarousel"
import { podcastData } from "@/constants/index"
import PodcastAuthors from "./PodcastAuthors"

type Session = {
  user: User & { admin: boolean }
  expires: string
}

const SideBarRight = async () => {
  const session = (await auth()) as Session
  return (
    <div className='min-w-[280px] max-sm:min-w-fit flex flex-col gap-12 p-4 max-sm:p-1  border-l-2'>
      <div className=' grid grid-cols-2 gap-2 max-sm:grid-cols-1  place-items-center'>
        <Logout session={session} />
        <ModeToggle />
      </div>
      <div className="max-sm:hidden">
        <PodcastsCarousel podcasts={podcastData} />
        <PodcastAuthors />
      </div>
    </div>
  )
}

export default SideBarRight
