import useSWR from "swr";
import fetcher from "$scripts/fetch";

export interface Like {
  fingerprint: String;
  post: String;
}

export default function WithLikes(slug: string) {
  const { data, error } = useSWR(`/api/like/${slug}`, fetcher);

  return {
    error,
    likes: data,
    isLoading: !error && !data,
  };
}
