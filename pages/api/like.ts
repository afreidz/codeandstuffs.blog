import db from "$scripts/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { post, fingerprint } = JSON.parse(req.body);
    await db.like.create({ data: { post, fingerprint } });
    const likes = await db.like.findMany({ where: { post }})
    return res.status(200).json({ msg: `liked ${post}`, likes });
  }
}
