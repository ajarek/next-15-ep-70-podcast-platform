'use server'

import connectToDb from './connectToDb'
import { User, UserWithoutId, Podcasts } from './models'
import type { Podcasts as PodcastsType } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export const addUser = async (formData: UserWithoutId) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}

export const getAllUsers = async () => {
  try {
    await connectToDb()
    const users = await User.find({})
    return users
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await User.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    console.log({ message: `Deleted user ${id}` })
    return { message: `Deleted user ${id}` }
  } catch (err) {
    return { message: 'Failed to delete user'+ err }
  }
}

export const updateUser = async (formData: FormData) => {
  const _id = formData.get('_id')
  const username = formData.get('username')
  const email = formData.get('email')
  const img = formData.get('img')
  const isAdmin = formData.get('isAdmin')

  try {
    await connectToDb()
    await User.findOneAndUpdate(
      { _id: _id },
      {
        username: username,
        email: email,
        img: img,
        isAdmin: isAdmin === 'true' ? Boolean(true) : Boolean(false),
      }
    )
    revalidatePath(`/dashboard`)

    return { message: `Updated user ${_id}` }
  } catch (err) {
    return { message: 'Failed to update to db'+err }
  } finally {
    redirect('/dashboard/')
  }
}

export const addPodcast = async (data: PodcastsType) => {
  const { title, description, imgURL, user, details } = data
  try {
    connectToDb()
    const newPodcasts = new Podcasts({
      title,
      description,
     imgURL,
      user,
      details
    })
    await newPodcasts.save()
    console.log('saved' + newPodcasts)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  } finally {
    redirect('/')
  }
}

export const getAllPodcasts = async () => {
  try {
    await connectToDb()
    const podcasts = await Podcasts.find({})
    return podcasts
  } catch (err) {
    console.log(err)
  }
}