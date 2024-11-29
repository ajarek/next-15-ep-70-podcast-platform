import type { Session } from "next-auth"
import Link from "next/link"
import LogoutBtn from "@/components/LogoutBtn"
import { buttonVariants } from "@/components/ui/button"
import { KeyRound } from "lucide-react"

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className={`${buttonVariants({
            variant: "default",
          })} h-7 text-[18px] max-sm:w-7 max-sm:h-7`}
          href={"/register"}
          aria-label='Login'
        >
          <KeyRound />
          <div className='bg-primary text-primary-foreground max-sm:hidden'>
            
            Login
          </div>
        </Link>
      )}
      {session && (
        <span className='px-4 max-lg:hidden'>{session.user?.email}</span>
      )}
    </div>
  )
}

export default Logout
