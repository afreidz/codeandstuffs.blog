import confetti from "canvas-confetti";
import AppContext from "$contexts/app";
import PostContext from "$contexts/post";
import styles from "./styles.module.scss";
import { MouseEvent, useEffect, useState, useContext } from "react";

export default function Like() {
  const { fingerprint } = useContext(AppContext);
  const { post, likes, setLikes } = useContext(PostContext);
  const [enabled, setEnabled] = useState(false);

  async function like(e: MouseEvent) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({ origin: { x, y } });

    if (fingerprint && post) {
      const resp = await (
        await fetch("/api/like", {
          method: "post",
          body: JSON.stringify({ post, fingerprint }),
          headers: { ContentType: "application/json" },
        })
      ).json();
      if (resp.likes) setLikes(resp.likes);
    }
  }

  useEffect(() => {
    setEnabled(!likes || !likes.find((l) => l.fingerprint === fingerprint));
  }, [fingerprint, likes]);

  return (
    <button className={styles.like} disabled={!enabled} onClick={like}>
      {enabled ? <i>🤍 </i> : <i>❤️ </i>}
      Like{!enabled && "d"}
      <strong>{likes.length}</strong>
    </button>
  );
}
