import NextAuth from "next-auth"
import { loginUser } from "@/actions/auth";
import Credentials from "next-auth/providers/credentials"


 
export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        telefone: {},
        senha: {},
      },
      authorize: async (credentials) => {
        const {telefone, senha} = credentials;
        try {
          let user = null
          // logic to verify if the user exists
          user = await loginUser({telefone,senha})
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
          // return JSON object with the user data
          return user
        } catch (error) {
         console.log(error)
        }
      },
    }),
  ],
})