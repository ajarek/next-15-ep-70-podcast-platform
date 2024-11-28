import { podcastData } from "@/constants/index";
import Image from "next/image";
type PropsPodcast = {
    id:number;
    title:string;
    description:string;
    imgURL:string;
}
const Podcasts = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1  ">
        {podcastData.map((podcast:PropsPodcast) => (
          <div  key={podcast.id} className="flex flex-col items-center gap-4 border-2 rounded-sm p-4">
            <div className="relative w-[180px] h-[180px] ">

            <Image src={podcast.imgURL} alt={podcast.title} fill className=" object-cover" />
            </div>
            <div>
              <h3>{podcast.title}</h3>
              <p>{podcast.description.slice(0,20)}...</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Podcasts