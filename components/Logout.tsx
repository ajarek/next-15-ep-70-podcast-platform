import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import { buttonVariants } from '@/components/ui/button'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className={`${buttonVariants({
            variant: 'default',
          })} h-7 text-[18px] `}
          href={'/register'}
          aria-label='Login'
        >
          Login
        </Link>
      )}
      {session && (
        <span className='px-4 max-lg:hidden'>{session.user?.email}</span>
      )}
    </>
  )
}

export default Logout
