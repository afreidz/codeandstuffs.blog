import db from "$scripts/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const post = Array.isArray(req.query.post) ? req.query.post[0] : req.query.post;
    const likes = await db.like.findMany({
      where: { post },
      select: { fingerprint: true, post: true },
    });
    return res.status(200).json(likes);
  }
}
