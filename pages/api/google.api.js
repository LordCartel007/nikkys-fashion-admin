import mongoose from "mongoose";
import { GoogleUser } from "../../models/google"; // Adjust the path as needed

// Allowed admin email
const ADMIN_EMAIL = "cartellord77@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { email, name, picture, email_verified } = req.body;

  if (email !== ADMIN_EMAIL) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  // Connect to MongoDB (if not already connected)
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  // Check if admin exists
  let user = await GoogleUser.findOne({ email });

  if (!user) {
    user = await GoogleUser.create({ email, name, picture, email_verified });
  }

  res.status(200).json({ success: true, user });
}
