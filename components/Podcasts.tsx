import { podcastData } from "@/constants/index"
import PodcastCard from "./PodcastCard"

const Podcasts = () => {
  return (
    <div className='w-full grid 2xl:grid-cols-4 grid-cols-3 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1 items-center '>
      <PodcastCard podcasts={podcastData} />
    </div>
  )
}

export default Podcasts
