import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'
import { JWT } from 'next-auth/jwt'


export const { auth, handlers: { GET, POST },} = NextAuth({
  pages: {
    error: '/register',
  },
  theme: {
    colorScheme: 'dark',
    brandColor: '#0E78F9',
    logo: '/logo.png',
    buttonText: '#ffffff',
  },
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { label: 'Username', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.username !== 'string' ||
          typeof credentials.password !== 'string'
        ) {
          throw new Error('Invalid credentials format.')
        }

        await connectToDb()
        try {
          const user = await User.findOne({ username: credentials.username })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if (isPasswordCorrect) {
              return {
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
                img: user.img,
              }
            }
          }
          throw new Error('Invalid credentials.')
        } catch (err) {
          throw new Error(
            err instanceof Error ? err.message : 'Authentication error.'
          )
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user._id
        token.name = user.username
        token.admin = user.isAdmin
        token.image = user.img
      }
      return token
    },
    async session({ session, token }: { session: JWT; token?: JWT }) {
      if (token && session.user) {
        session.user = {
          ...session.user,
          id: token.id,
          name: token.name,
          admin: token.admin,
          image: token.image,
        }
      }
      return session
    },
    async redirect({ baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl + '/discover'
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}as any)
