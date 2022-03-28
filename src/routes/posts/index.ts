import pMap from "p-map";
import { basename } from "path";

export async function get() {
  const modules = import.meta.glob("./*.svx");

  const posts = await pMap(Object.entries(modules), async function ([filename, module]) {
    const { metadata } = await module();

    return {
      title: metadata.title,
      teaser: metadata.teaser,
      date: new Date(metadata.date),
      slug: basename(filename, ".svx"),
    };
  });

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  const [main, ...others] = posts;

  return {
    body: { main, others },
  };
}
