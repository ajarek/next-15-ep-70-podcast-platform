'use client'

import { LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const LogoutBtn = () => {
  const router = useRouter()
  const handleLogout = () => {
    router.push('/api/auth/signout')
  }
  return (
    <Button
      variant='destructive'
      onClick={handleLogout}
      className='h-7 text-lg max-sm:w-7 max-sm:h-7'
      aria-label='logout'
    >
      <LogOut />
      <div className=' max-sm:hidden'>Logout</div>
    </Button>
  )
}

export default LogoutBtn
