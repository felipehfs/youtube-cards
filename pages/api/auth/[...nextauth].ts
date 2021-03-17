import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text', placeholder: 'jsmith'},
        password: { label: 'Senha', type: 'password'},
      },
      async authorize(credentials) {
        if (credentials.username === "admin") {
          return credentials;
        }
        return null
      }
    })
  ],
  jwt: {
    secret: process.env.JWT_SECRET,

  }
});