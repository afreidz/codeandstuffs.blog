export default async function fetcher(...args) {
  const resp = await fetch.apply(null, args);
  return resp.json();
}
