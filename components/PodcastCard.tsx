import Image from "next/image";
import type { PropsPodcast } from "@/types/TypesPodcast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const PodcastCard = ({podcasts}:{podcasts:PropsPodcast[]}) => {
  return (
    <>
      {podcasts.map((podcast) => (
        <Card key={podcast.id}>
          <CardHeader>
            <div className="relative w-[180px] h-[180px] ">
              <Image src={podcast.imgURL} alt={podcast.title} fill className=" object-cover" />       
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle>{podcast.title}</CardTitle>
          </CardContent>
          <CardFooter>
            <CardDescription>{podcast.description.slice(0,20)}...</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default PodcastCard
