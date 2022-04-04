import db from "$lib/db";

export async function get({ params }) {
  const { post } = params;

  try {
    const body = await db.appreciation.findMany({ where: { post } });
    return { status: 200, body };
  } catch (err) {
    return {
      status: 500,
      body: { msg: err.toString() },
    };
  }
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
