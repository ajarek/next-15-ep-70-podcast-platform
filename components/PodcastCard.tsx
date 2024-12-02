import Image from "next/image";
import type { PropsPodcast } from "@/types/TypesPodcast";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";

const PodcastCard = ({podcasts}:{podcasts:PropsPodcast[]}) => {
  return (
    <>
      {podcasts.map((podcast) => (
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
    </>
  )
}

export default PodcastCard
