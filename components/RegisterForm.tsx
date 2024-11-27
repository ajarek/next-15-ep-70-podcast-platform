'use client'

import { useState } from 'react'
import { UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin, setIsAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/api/auth/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-[#000] text-white  p-4">
      <div className="flex justify-center p-2">
        <Link href="/" className='relative w-10 h-10 ' aria-label='home'>
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="w-full h-full object-cover  "
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </Link>
      </div>
      <form
        className="w-80  flex flex-col gap-4 p-6  text-primary"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="first and last name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Your photo"
          value={img}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          type="hidden"
          name="isAdmin"
          value={`${DEFAULT_IS_ADMIN}`}
          onChange={()=>setIsAdmin(false)}
        />
        <Button
          className="bg-[#0E78F9] hover:bg-[#0E78F9]/90"
          type="submit"
          aria-label='Registration'
        >
          Registration
        </Button>
        <Link
          href="/api/auth/signin"
          className="text-white"
          aria-label='Login'
        >
          You already have an account? <b className="text-[#0E78F9]">
          Login</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm