import Podcasts from "@/components/Podcasts";


export default function Home() {
  return (
    <div className="flex  flex-col items-start justify-start min-h-screen p-4 gap-4">
      <h1 className='text-xl  hover:text-primary  '>Trending Podcasts</h1>
      


       <Podcasts/>

      
       
    </div>
  );
}
