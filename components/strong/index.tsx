import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function Strong(props: Props) {
  return <strong className={styles.strong}>{props.children}</strong>;
}
