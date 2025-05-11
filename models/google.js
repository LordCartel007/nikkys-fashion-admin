import mongoose, { Schema, model, models } from "mongoose";

const GoogleSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    picture: { type: String },
    email_verified: { type: Boolean, default: false },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export const GoogleUser =
  models?.GoogleUser || model("GoogleUser", GoogleSchema);
