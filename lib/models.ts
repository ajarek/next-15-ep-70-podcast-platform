import mongoose from 'mongoose'

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, '_id'>

export type Podcasts = {
  title:string;
  description:string;
  imgURL:string;
  user?:string
  details:string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const podcastsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgURL:{type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    details: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Podcasts = mongoose.models?.Podcasts || mongoose.model('Podcasts', podcastsSchema)

