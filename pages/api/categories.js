import { Category } from "../../models/Category";
import { mongooseConnect } from "../../lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  // await isAdminRequest(req, res);
  if (method === "GET") {
    res.json(await Category.find().populate("parent"));
  }

  // if (method === "POST") {
  //   const { name, parentCategory } = req.body;
  //   const categoryDoc = await Category.create({
  //     name,
  //     parent: parentCategory,
  //   });
  //   res.json(categoryDoc);
  // }

  if (method === "POST") {
    const { name, parentCategory, properties } = req.body;

    // Validate `parentCategory`
    const parent =
      parentCategory && parentCategory.trim() !== "" ? parentCategory : null;

    try {
      const categoryDoc = await Category.create({
        name,
        // Use `null` if no parent is provided
        parent: parentCategory || undefined,
        properties,
      });
      res.json(categoryDoc);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: "Failed to create category" });
    }
  }

  if (method === "PUT") {
    const { name, parentCategory, properties, _id } = req.body;
    const categoryDoc = await Category.updateOne(
      { _id },
      {
        name,
        parent: parentCategory || undefined,
        properties,
      }
    );
    res.json(categoryDoc);
  }
  if (method === "DELETE") {
    const { _id } = req.query;
    await Category.deleteOne({ _id });
    res.json("ok");
  }
}
