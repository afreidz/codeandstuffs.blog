import { Spinner } from "$components";
import confetti from "canvas-confetti";
import styles from "./styles.module.scss";
import useLikes from "$scripts/hooks/likes";
import AppContext from "$scripts/stores/app";
import type { Like } from "$scripts/hooks/likes";
import { MouseEvent, useEffect, useState, useContext } from "react";

export default function Like() {
  const { fingerprint, post } = useContext(AppContext);
  const [enabled, setEnabled] = useState(false);
  const { likes, isLoading } = useLikes(post);

  async function like(e: MouseEvent) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({ origin: { x, y } });

    if (fingerprint && post) {
      await (
        await fetch("/api/like", {
          method: "post",
          body: JSON.stringify({ post, fingerprint }),
          headers: { ContentType: "application/json" },
        })
      ).json();
    }
  }

  useEffect(() => {
    setEnabled(
      !likes ? false : !likes.find((l: Like) => l.fingerprint === fingerprint)
    );
  }, [fingerprint, likes]);

  return (
    <button className={styles.like} disabled={!enabled} onClick={like}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <i>{enabled ? "🤍 " : "❤️ "}</i>
          Like{enabled && "d"}
          <strong>{likes?.length}</strong>
        </>
      )}
    </button>
  );
}
