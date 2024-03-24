import connectToDatabase from "@/app/_lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase();
    const ideas = db.collection("ideas");
    const result = await ideas.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
