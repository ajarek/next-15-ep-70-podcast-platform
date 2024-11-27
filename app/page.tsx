import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="relative w-[200px] h-[200px]">


        <Image
          
          src="/logo.png"
          alt="Next.js logo"
         fill
         className="object-contain"
         sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />

      </div>
       
    </div>
  );
}
