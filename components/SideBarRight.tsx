import Logout from "@/components/Logout"
import { auth } from "@/app/api/auth/auth"
import { User } from "@/lib/models"
import { ModeToggle } from "./ModeToggle"
import PodcastsCarousel from "./PodcastsCarousel"
import { podcastData } from "@/constants/index";
type Session = {
    user: User & { admin: boolean }
    expires: string
  }

const SideBarRight = async() => {
    const session = (await auth()) as Session
  return (
    <div className='min-w-[280px] max-sm:min-w-fit flex flex-col gap-12 p-4 max-sm:p-1  border-l-2'>
         <div className=' flex flex-wrap items-center italic gap-6 max-sm:gap-2  '>
        <Logout session={session} />
        <ModeToggle />
      </div>
      <PodcastsCarousel podcasts={podcastData} />
    </div>
  )
}

export default SideBarRight