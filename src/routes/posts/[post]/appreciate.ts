import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function get({ params }) {
  const { post } = params;

  const appreciations = await db.appreciation.findMany({ where: { post } });

  return {
    body: appreciations,
  };
}

export async function post({ params, request }) {
  const { post } = params;
  const data = await request.json();

  try {
    await db.appreciation.create({ data: { ...data, post } });
  } catch (err) {
    return {
      status: 500,
      body: { msg: err.toString() },
    };
  }

  return {
    status: 200,
    body: { msg: "ok", post },
  };
}
