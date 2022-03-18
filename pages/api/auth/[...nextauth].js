import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
let adminUser = {};
import { getAllUsers } from '../../../data/user';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      scope:
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
    })
  ],
  secret: process.env.secret,
  callbacks: {
      async jwt(token, account ) {
        if (account ?.accessToken) {
          token.accessToken = account.accessToken
        }
        return token;
      },
      async signIn({user}) {
        let found = false;
        const allUsers = await getAllUsers();
        allUsers.forEach(
            ({ fName,
               lName,
               email,
               group }) => {
          if(email === user.email) {
            adminUser = {
                        fName,
                        lName,
                        email,
                        group
                      }
            found = true;
          }
        });
        return found;
      },
      async session({ session }) {
        session.user = adminUser;
        return session
      },
      redirect: async ({url, _baseUrl}) => {
        if (url === '/admin/adminMain') {
          return Promise.resolve('/admin/customerRequest');
        }
        return  Promise.resolve('/admin/adminMain');
      }
  }
});