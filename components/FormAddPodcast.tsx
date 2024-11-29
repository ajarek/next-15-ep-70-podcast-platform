"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useRouter } from "next/navigation"
import { Textarea } from "./ui/textarea"
import { voiceDetails } from "@/constants/index"

const FormSchema = z.object({
  podcast: z.object({

    title: z.string().min(3, {
      message: "Minimum 3 characters.",
    }),

    description: z.string().min(3, {
      message: "Minimum 3 characters.",
    }),

    image: z.string().min(8, {
      message: "Minimum 8 characters.",
      }),

    //   details: z.string().min(3, {
    //   message: "Minimum 3 characters.",
    // }),
  }),
})

export function FormAddPodcast() {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const item = {
      title: data.podcast.title,
      description: data.podcast.description,
    
      image: data.podcast.image
    }
    console.log(item)

    router.push(`/`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4 bg-background p-4 '
      >
        <FormField
          control={form.control}
          name='podcast'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              

              <FormControl>
                <div className='w-full flex flex-col items-start  gap-4   '>
                  <FormLabel className=''>Title</FormLabel>
                  <Input
                    type='text'
                    value={field.value?.title || ""}
                    onChange={(e) =>
                      field.onChange({
                        ...field.value,
                        title: e.target.value,
                      })
                    }
                    className='w-full'
                  />
                </div>
              </FormControl>
              <FormControl>
                <div className='w-full flex flex-col items-start  gap-4  '>
                  <FormLabel className=''>Description</FormLabel>
                  <Textarea
                    value={field.value?.description || ""}
                    onChange={(e) =>field.onChange({...field.value, description: e.target.value})
                    }
                    className='w-full'
                    />
                </div>
              </FormControl>
              <FormControl>
                <div className='w-full flex flex-col items-start  gap-4   '>
                  <FormLabel className=''>Image <span className="text-muted-foreground">(https://example.com/image.jpg)</span></FormLabel>
                  <Input
                    type='text'
                    value={field.value?.image || ""}
                    onChange={(e) =>
                      field.onChange({
                        ...field.value,
                        image: e.target.value,
                      })
                    }
                    className='w-full'
                  />
                </div>
                </FormControl>
              {/* <FormControl>
                <div className='w-full flex flex-col items-start  gap-4  '>
                  <FormLabel className='text-sm'>Voice Details</FormLabel>
                  <Select
                    onValueChange={(e) =>
                      field.onChange({
                        ...field.value,
                        type: e,
                      })
                    }
                    defaultValue={field.value?.details || ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select details' />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                        {voiceDetails.map((detail) => (
                            <SelectItem key={detail.id} className='' value={detail.name}>
                             <h2 className='capitalize'>{detail.name}</h2>
                        </SelectItem>
                        ))}
                      
                    </SelectContent>
                  </Select>
                </div>
              </FormControl> */}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' aria-label='Send'>
         Create Podcast
        </Button>
      </form>
    </Form>
  )
}
