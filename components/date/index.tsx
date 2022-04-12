import { Chip } from "$components";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
const week = 6.048e8;

interface Props {
  stamp: number;
}

export default function PostDate(props: Props) {
  const [formatted, setFormatted] = useState("");
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const now = +new Date();
    setFormatted(new Date(props.stamp).toLocaleString());
    setIsNew(now - props.stamp < week);
  }, [props.stamp]);

  return (
    <em className={styles.date}>
      {isNew && <Chip type="new">new</Chip>}
      Posted: {formatted}
    </em>
  );
}
