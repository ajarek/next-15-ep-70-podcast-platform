import { PropsPodcast } from "@/types/TypesPodcast"
import { getAllPodcasts } from "@/lib/action"
import Image from "next/image"
import Audio from "@/components/Audio"

const PodcastId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const podcasts = (await getAllPodcasts()) as PropsPodcast[]
  const { id } = await params
  const PodcastId = podcasts.find(
    (podcast: PropsPodcast) => podcast._id.toString() === id
  )

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 '>
      <Image
        src={PodcastId?.imgURL || ""}
        alt={PodcastId?.title || ""}
        width={200}
        height={200}
      />
      <h1 className='text-xl'>{PodcastId?.title}</h1>
      <p>{PodcastId?.description}</p>
      <p className='capitalize'>author: {PodcastId?.user}</p>
      <Audio/>
    </div>

  )
}

export default PodcastId
