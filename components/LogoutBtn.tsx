'use client'

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
      className='h-7 text-lg'
      aria-label='logout'
    >
      Logout
    </Button>
  )
}

export default LogoutBtn
