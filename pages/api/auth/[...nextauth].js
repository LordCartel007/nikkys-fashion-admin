// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import NextAuth from "next-auth";
// import client from "../../../lib/mongodb.js";
// import { getServerSession } from "next-auth";

// import GoogleProvider from "next-auth/providers/google";

// const adminEmails = ["cartellord77@gmail.com"];

// export const authOptions = {
//   providers: [
//     // OAuth authentication providers....ya

//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   adapter: MongoDBAdapter(client),
//   callbacks: {
//     session: ({ session }) => {
//       if (adminEmails.includes(session?.user?.email)) {
//         return session;
//       } else {
//         return false;
//       }
//     },
//   },
//   debug: true, // Enable debug mode to get more detailed error messages
// };
// export default NextAuth(authOptions);
//Hacking prevention
// security measures
// export async function isAdminRequest(req, res) {
//   try {
//     const session = await getServerSession(req, res, authOptions);
//     if (!session) {
//       res.status(401).end("Unauthorized");
//       throw new Error("No session found");
//     }
//     if (!adminEmails.includes(session?.user?.email)) {
//       res.status(401).end("Unauthorized");
//       throw new Error("Not an admin");
//     }
//   } catch (error) {
//     console.error("Error in isAdminRequest:", error);
//     res.status(500).end("Internal Server Error");
//   }
// }
