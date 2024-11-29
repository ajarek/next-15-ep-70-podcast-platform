"use client"

import { PropsPodcast } from "@/types/TypesPodcast"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image";
 
const PodcastsCarousel=({podcasts}:{podcasts:PropsPodcast[]})=> {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  return (
    <div className="mx-auto  max-w-[200px]">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {podcasts.map((pd) => (
            <CarouselItem key={pd.id}>
              <Card className=" rounded-sm   p-0">
                <CardContent className="flex aspect-square items-center justify-center  w-full h-full p-2 ">
                
              <Image src={pd.imgURL} alt={pd.title} width={250} height={250} className=" w-full h-full object-cover rounded-sm" />       
            
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}

export default PodcastsCarousel