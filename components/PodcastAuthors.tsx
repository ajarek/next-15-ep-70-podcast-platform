import React from "react"
import { getAllUsers, getAllPodcasts } from "@/lib/action"
import { User } from "@/types/TypesUsers"
import Image from "next/image"
import { PropsPodcast } from "@/types/TypesPodcast"

const PodcastAuthors = async () => {
  const users = (await getAllUsers()) as User[]
  const podcastData = (await getAllPodcasts()) as PropsPodcast[]

  return (
    <div>
      <h1 className='text-xl mb-4'>Podcast Authors</h1>
      <div className='flex flex-col gap-4'>
        {users.map((user) => (
          <div key={user._id.toString()} className='flex items-center gap-2'>
            {podcastData.filter((podcast) => podcast.user === user.username)
              .length > 0 && (
              <>
                <Image
                  src={
                    user.img || "https://randomuser.me/api/portraits/men/69.jpg"
                  }
                  alt={user.username}
                  width={30}
                  height={30}
                  className='rounded-full'
                />
                <p className='text-sm capitalize'>{user.username}</p>
                <p className='w-full text-sm text-right text-muted-foreground '>
                  {
                    podcastData.filter(
                      (podcast) => podcast.user === user.username
                    ).length
                  }{" "}
                  podcasts
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PodcastAuthors
