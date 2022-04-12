import path from "path";
import db from "$scripts/db";
import fs from "fs/promises";
import slugPlug from "rehype-slug";
import prism from "@mapbox/rehype-prism";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export async function getByLimit(limit: number) {
  const files = await fs.readdir(path.join(process.cwd(), "pages", "posts"), {
    withFileTypes: true,
  });

  const posts = (
    await Promise.all(
      files.map(async (file) => {
        if (file.name.includes("[slug]")) return;
        return await parsePost(file.name);
      })
    )
  )
    .filter(Boolean)
    .sort((a, b) => {
      if (!a.frontmatter?.date || !b.frontmatter?.date) return 0;
      if (
        typeof a.frontmatter.date !== "number" ||
        typeof b.frontmatter.date !== "number"
      )
        return 0;
      return b.frontmatter.date - a.frontmatter.date;
    });

  if (limit) {
    return posts.filter((_, index) => {
      return index + 1 <= limit;
    });
  }

  return posts;
}

export async function getBySlug(slug: string) {
  return await parsePost(slug);
}

async function parsePost(input: string): Promise<MDXRemoteSerializeResult> {
  const file = input.endsWith(".mdx") ? input : `${input}.mdx`;

  const contents = await fs.readFile(
    path.join(process.cwd(), "pages", "posts", file),
    "utf-8"
  );

  const likes = await db.like.findMany({
    where: { post: input },
    select: { fingerprint: true, post: true },
  });

  const slug = input.replace(".mdx", "");
  const source = await serialize(contents, {
    scope: { likes, slug },
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [prism, slugPlug],
    },
  });

  return source;
}
