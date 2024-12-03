"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

const Audio = ({text}:{text:string}) => {
  
  const [audio, setAudio] = useState<string | null>(null)

  const toSpeech = async () => {
    const response = await fetch("/api/speechToText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
    const arrayBuffer = await response.arrayBuffer()

    const blob = new Blob([arrayBuffer], { type: "audio/mpeg" })
    const url = URL.createObjectURL(blob)

    setAudio(url)
  }

  return (
    <div className='flex flex-col gap-4'>
      
      {audio && <audio src={audio} controls></audio>}
      <Button onClick={toSpeech}>Convert to Speech</Button>
    </div>
  )
}

export default Audio
